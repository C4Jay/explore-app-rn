import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { db } from '../configs/db.js';
// import axios from '../axios-chat.js';
// import moment from 'moment';
import { getDistance } from 'geolib';
import MapScreen from '../component/mapview';

import axios from '../axios-list';

import * as Permissions from 'expo-permissions';
import * as Maplocation from 'expo-location';


class ChatScreen extends Component {
  
    /* constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
  this.send = this.send.bind(this);
        
      } */

    state = {
        user: 'Cee Jay',
        chats: [],
        content: '',
        writeError: null,
        readError: null,
        trips: [],
        lat: '',
        lng: ''
    }

    Permissionverify = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION)
        if(result.status != 'granted'){
            Alert.alert('permission need','need permissions to proceed',
            [{text: 'OK'}]
            )
            return false
        }
        return true
    }
    
    
    locationHandler = async () => {
        const haspermission = await this.Permissionverify()
        if(!haspermission) {
            return
        }

        // setisfetching(true)

        try {
            const location = await Maplocation.getCurrentPositionAsync({timeout: 5000})
            console.log(location)
            this.setState({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
          /*   props.onpickedlocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
 */
        } catch (err) {
            Alert.alert(
                /* 'Couldn`t locate you',
                'Please try later or pick a location on the map',
                [{text: 'OK'}] */
                'Successfully located',
                'Your current location successfully saved',
                [{text: 'OK'}]
            )
        }
        // setisfetching(false)
        this.setState({
            donefetching: true
        })

    }

    async componentDidMount() {
        this.locationHandler()

        if(this.props.navigation.getParam('district')) {
            axios.get('/Trips.json')
        .then((response) => {
       
            const hotel = []
            const obj = response.data
            for(let key in obj) {
              
              if(obj[key].tripdistrict == this.props.navigation.getParam('district') ) {
               
              hotel.push({
                  tripid: key,
                  
                  triplat: obj[key].triplat,
                  triplng: obj[key].triplng,
                  triptrip: obj[key].triptrip,
                  tripregion: obj[key].tripregion,
                  tripdistrict: obj[key].tripdistrict,
                  tripimg: obj[key].tripimg,
                  tripimg1: obj[key].tripimg1,
                  tripimg2: obj[key].tripimg2,
                  tripimg3: obj[key].tripimg3,
                  tripdescription: obj[key].tripdescription
              })
            }
   

            this.setState({
                trips: hotel
            })
            console.log(hotel)

        }

        })
        .catch(err => {
            console.log(err)
        })
        } else { 
        
        try {
            db.ref('Trips').on('value', snapshot => {
              let chats = [];
              snapshot.forEach((snap) => {
                chats.push(snap.val());
              });
              this.setState({ trips: chats });
              console.log(this.state.trips)
            });
          } catch (error) {
            this.setState({ readError: error.message });
          }
        
        
        
    }

}

    

      render() {

        
        
        return (
        
        //   <View style={{marginTop: 60, flex: 1, width: 368}}>  
        <View>
            <ScrollView>
              {/* <Text>Hey</Text> */}
            
              <View>
                  {this.state.trips.map(item => {
                      return <View key={item.triptrip}> 
                      <TouchableOpacity onPress={() => {
                          this.props.navigation.navigate('Singletrip', {
                            user: this.props.navigation.getParam('user'), keyid: item.tripid,trip: item.triptrip, region: item.tripregion, district: item.tripdistrict, img: item.tripimg, img1: item.tripimg1, img2: item.tripimg2, img3: item.tripimg3, description: item.tripdescription, lat:item.triplat, lng: item.triplng})}}>
                      <View style={styles.tile}>
                      <Image style={styles.img} source={{uri: item.tripimg}}></Image>
                      <View style={{flexDirection: 'column'}}>
                      <View style={{flexDirection: 'row'}}>
                      <Text style={styles.text}>{item.triptrip}</Text>
                      <Text style={styles.distance}>approx. </Text>
                    <Text>{getDistance(
{ latitude: item.triplat , longitude: item.triplng },
// { latitude: 6.9565151, longitude: 79.9116888 }
{ latitude: this.state.lat, longitude: this.state.lng }
) / 1000} km
</Text>  
                      </View>
                      <Text style={styles.text1}>{item.tripregion}</Text>
                     <Text style={styles.text2}>{item.tripdistrict}</Text>
                      </View>
                      
                      </View>
                      </TouchableOpacity>
                     {/*  <View style={{height: 246, width: '100%'}}>
                                       <MapScreen lat={item.triplat} lng={item.triplng} ></MapScreen>
                                   </View> */}
                                   
                      </View>
                      
            //           {/* <TouchableOpacity onPress={() => {this.props.navigation.navigate('Singletrip', {keyid: item.tripid,trip: item.triptrip, region: item.tripregion, district: item.tripdistrict, img: item.tripimg, img1: item.tripimg1, img2: item.tripimg2, img3: item.tripimg3, description: item.tripdescription, lat:item.triplat, lng: item.triplng})}}>
            //                   <View style={styles.tile}>
            //                       <Image style={styles.img} source={{uri: item.tripimg}}></Image>
            //                       <View style={{flexDirection: 'column'}}>
            //                       <View style={{flexDirection: 'row'}}>
            //                       <Text style={styles.text}>{item.triptrip}</Text>
            //                       <Text style={styles.distance}>approx. </Text> */}
            //                      {/*  <Text>{getDistance(
            //   { latitude: item.triplat , longitude: item.triplng },
            //   // { latitude: 6.9565151, longitude: 79.9116888 }
            //   { latitude: this.state.lat, longitude: this.state.lng }
            //   ) / 1000} km
            //   </Text>  */}
            //                       {/* </View>
            //                       <Text style={styles.text1}>{item.tripregion}</Text>
            //                       <Text style={styles.text2}>{item.tripdistrict}</Text>
            //                       </View>
                                  
                                  
            //                   </View>
            //               </TouchableOpacity> */}
            //             {/*   <View style={{height: 246, width: '100%'}}>
            //                           <MapScreen lat={item.triplat} lng={item.triplng} ></MapScreen>
            //                       </View> */}
            //                 {/* </View>                  */}
                  })}
              </View>

              
              </ScrollView>
              {/* <TextInput onChangeText={this.inputHandler} value={this.state.content}></TextInput>
              <Button onPress={this.send} title="send"></Button> */}

              {/* <View>
                  <Text>Login as : {this.state.user}</Text>
              </View> */}

         
          </View>
        );
      }

    
}

const styles = StyleSheet.create({
  tile1: {
    // height: 35,
    backgroundColor: '#aeedf5',
    width: 218,
    marginTop: 1,
    marginBottom: 1,
    borderStyle: 'solid',
    borderRadius: 6,
    right: -30,
    minHeight: 35
    

    
  },
  tile2: {
    // height: 35,
    backgroundColor: '#f2cee7',
    width: 218,
    marginTop: 1,
    marginBottom: 1,
    borderStyle: 'solid',
    borderRadius: 6,
    left: 100,
    minHeight: 35
  
  },

  
    img: {
        height: 400,
        width: '100%',
        borderRadius: 10,
        // marginLeft: 3,
        // marginRight: 6
    },
    tile: {
        // flexDirection: "row",
        // height: 150,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderRadius: 6,
        // backgroundColor: 'rgba(252, 186, 3,0.7)'
        // backgroundColor: 'rgba(134, 245, 44, 0.1)'
        // backgroundColor: 'rgba(152, 235, 52, 0.8)'
        backgroundColor: 'rgba(240, 135, 0,10)'
    },

    text: {
        marginLeft: '3%',
        fontFamily: 'Roboto',
        fontSize: 16
    },
    text1: {
        marginLeft: '3%',
        fontSize: 14,
        color: 'white'
    },
    text2 : {
        marginLeft: '3%',
        fontSize: 14,
        color: 'white'
    },
    distance: {
        marginLeft: 150
    }

})

export default ChatScreen;