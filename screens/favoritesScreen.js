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


class FavsScreen extends Component {
  
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

       
            axios.get('/Users.json')
        .then((response) => {
       
            const hotel = []
            const obj = response.data
            for(let key in obj) {
              
              if(obj[key].user == this.props.navigation.getParam('user') ) {
               
              hotel.push({

                tripid: key,
                  
                  triplat: obj[key].lat,
                  triplng: obj[key].lng,
                  triptrip: obj[key].trip,
                  tripregion: obj[key].region,
                  tripdistrict: obj[key].district,
                  tripimg: obj[key].img,
                  tripimg1: obj[key].img1,
                  tripimg2: obj[key].img2,
                  tripimg3: obj[key].img3,
                  tripdescription: obj[key].description,
                  hot: obj[key].hot,
      cold:obj[key].cold,
      rainy: obj[key].rainy,
      monk: obj[key].monk,
      ele: obj[key].ele,
      tiger: obj[key].tiger,
      ocean: obj[key].ocean,
      statu: obj[key].statu,
      hike: obj[key].hike,
      camp: obj[key].camp,
                  /* tripid: key,
                  
                  triplat: obj[key].lat,
                  triplng: obj[key].lng,
                  triptrip: obj[key].trip,
                  tripregion: obj[key].region,
                  tripdistrict: obj[key].district,
                  tripimg: obj[key].img,
                  tripimg1: obj[key].img1,
                  tripimg2: obj[key].img2,
                  tripimg3: obj[key].img3,
                  tripdescription: obj[key].description */
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
                  {/* <Text style={styles.distance}>approx. </Text> */}
                  <View style={styles.distance}>
                      <Image style={{height: 30, width: 30}} source={require ('../assets/imgs/km.png')}></Image>
                      </View>{item.tripdistrict == 'Badulla' ?
                <Text style={styles.distance1}>{getDistance(
{ latitude: item.triplat , longitude: item.triplng },
// { latitude: 6.9565151, longitude: 79.9116888 }
{ latitude: this.state.lat, longitude: this.state.lng }
) / 1000 + 60 + 10}  km
                      </Text>  : <Text style={styles.distance1}>{getDistance(
{ latitude: item.triplat , longitude: item.triplng },
// { latitude: 6.9565151, longitude: 79.9116888 }
{ latitude: this.state.lat, longitude: this.state.lng }
) / 1000 + 10}  km</Text> }
                  {/* <Text style={styles.distance1}>{toString(this.getMiles(item.triplat,item.triplng))}</Text> */}
                 
                  {/* <Text style={styles.distance1}>{distances[item.tripnumber]} kms</Text> */}
                 
                  {/* <Text style={styles.distance1}>{distances[0]}</Text> */}
                  {/* <Text style={styles.distance1}>{item.tripdistance}</Text> */}
                  </View>
                  <Text style={styles.text1}>{item.tripregion}</Text>
                 <Text style={styles.text2}>{item.tripdistrict}</Text>

                 <View style={{alignItems: 'center'}}>
                 <View style={{alignItems: 'center', /* flexFlow: 'space-between' ,marginHorizontal: '25%', */ alignContent: 'center', textAlign: 'center', marginTop: 6, marginBottom: 6, flexDirection: 'row'}}>

                 {item.hot ? <Image style={{height: 30, width: 30}} source={{uri: 'https://unicodey.com/emoji-data/img-facebook-64/1f975.png'}}></Image> : null }
                 {item.cold ? <Image style={{height: 30, width: 30}} source={{uri: 'https://unicodey.com/emoji-data/img-facebook-64/1f976.png'}}></Image> : null }
                 {item.rainy ? <Image style={{height: 30, width: 30}} source={{uri: 'https://unicodey.com/emoji-data/img-facebook-64/1f327-fe0f.png'}}></Image> : null }
                 {item.ele ? <Image style={{height: 30, width: 30}} source={{uri: 'https://unicodey.com/emoji-data/img-facebook-64/1f418.png'}}></Image> : null }
                 {item.monk ? <Image style={{height: 30, width: 30}} source={{uri: 'https://unicodey.com/emoji-data/img-facebook-64/1f412.png'}}></Image> : null }
                 {item.statu ? <Image style={{height: 30, width: 30}} source={{uri: 'https://unicodey.com/emoji-data/img-facebook-64/1f5ff.png'}}></Image> : null }
                 {item.tiger ? <Image style={{height: 30, width: 30}} source={{uri: 'https://unicodey.com/emoji-data/img-facebook-64/1f406.png'}}></Image> : null }
                 {item.ocean ? <Image style={{height: 30, width: 30}} source={{uri: 'https://unicodey.com/emoji-data/img-facebook-64/1f30a.png'}}></Image> : null }
                 {item.hike ? <Image style={{height: 30, width: 30}} source={{uri: 'https://unicodey.com/emoji-data/img-google-64/1f9d7.png'}}></Image> : null }
                 {item.camp ? <Image style={{height: 30, width: 30}} source={{uri: 'https://unicodey.com/emoji-data/img-twitter-64/1f3d5-fe0f.png'}}></Image> : null }
                     
                 
                 </View>
                 </View>
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
        position: 'absolute',
        marginTop: 3,
    
        marginLeft: 260,
     
    },
    distance1: {
        position: 'absolute',
        marginTop: 3,
        marginLeft: 300
     
    }

})

export default FavsScreen;