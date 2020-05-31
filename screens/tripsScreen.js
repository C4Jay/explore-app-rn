import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Alert} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import {
    useFonts,
    Pacifico,
  } from '@expo-google-fonts/pacifico';
  import { AppLoading } from 'expo';
  import { getDistance } from 'geolib';
import axios from '../axios-list';
import * as Permissions from 'expo-permissions';
import * as Maplocation from 'expo-location';
import MapScreen from '../component/mapview';
import { db } from '../configs/db.js';

class TripsScreen extends Component {

    state = {
        fontLoaded : false,
        trips: [],
        lat: '',
        lng: '',
        donefetching: false
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




/*
    componentDidMount () {

        this.locationHandler()

             if(this.props.navigation.getParam('district')) {
                axios.get('/Trips.json')
            .then((response) => {
           
                const hotel = []
                const obj = response.data
                for(let key in obj) {
                  
                  if(obj[key].tripdistrict == this.props.navigation.getParam('district') ) {
                   
                  hotel.push({
                      id: key,
                      
                      lat: obj[key].triplat,
                      lng: obj[key].triplng,
                      trip: obj[key].triptrip,
                      region: obj[key].tripregion,
                      district: obj[key].tripdistrict,
                      img: obj[key].tripimg,
                      img1: obj[key].tripimg1,
                      img2: obj[key].tripimg2,
                      img3: obj[key].tripimg3,
                      description: obj[key].tripdescription
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
        
            axios.get('/Trips.json')
            .then((response) => {
           
                const hotel = []
                const obj = response.data
                for(let key in obj) {
                   
                  hotel.push({
                      id: key,
                      
                      lat: obj[key].triplat,
                      lng: obj[key].triplng,
                      trip: obj[key].triptrip,
                      region: obj[key].tripregion,
                      district: obj[key].tripdistrict,
                      img: obj[key].tripimg,
                      img1: obj[key].tripimg1,
                      img2: obj[key].tripimg2,
                      img3: obj[key].tripimg3,
                      description: obj[key].tripdescription
                  })
                }
       
    
                this.setState({
                    trips: hotel
                })
                console.log(hotel)
    
            })
            .catch(err => {
                console.log(err)
            }) 

    
        }



    }*/

    // async componentDidMount() {
        componentDidMount() {
        // this.locationHandler()
        // try {
            db.ref('Trips').once('value')
            .then((data) => { 
              const trip = []
              const obj = data.val()
              for(let key in obj){
                  trip.push({
                    id: key,
                      
                    lat: obj[key].triplat,
                    lng: obj[key].triplng,
                    trip: obj[key].triptrip,
                    region: obj[key].tripregion,
                    district: obj[key].tripdistrict,
                    img: obj[key].tripimg,
                    img1: obj[key].tripimg1,
                    img2: obj[key].tripimg2,
                    img3: obj[key].tripimg3,
                    description: obj[key].tripdescription
                  })
                }
                  this.setState({
                      trips: trip
                  })
                  console.log(trip)
              })
              .catch(err => {
                  console.log(err)
              })
              
              
        //   } catch (error) {
            // this.setState({ readError: error.message });
            // console.log(error)
        //   }
        }

    

   /*  componentDidMount() {
        this.loadAssetsAsync()
      }

      loadAssetsAsync = async () => {
        await Font.loadAsync({
            'Pacifico-Regular': require('../assets/fonts/Pacifico-Regular.ttf')
        })
        this.setState({ fontLoaded: true })
      } */
    render () {

       /*  if (!this.state.fontLoaded) {
            return <AppLoading />
          }

          
 */



        return (
            
            <View>
                {/* <ScrollView> */}
            <View><Text>Hey</Text></View>


 <FlatList
 LisHeaderComponent={
    <> </>
    }
    data={this.state.trips}
    renderItem={({ item }) => {return (
        <View key={item.trip}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Singletrip', {keyid: item.id,trip: item.trip, region: item.region, district: item.district, img: item.img, img1: item.img1, img2: item.img2, img3: item.img3, description: item.description, lat:item.lat, lng: item.lng})}}>
                <View style={styles.tile}>
                    <Image style={styles.img} source={{uri: item.img}}></Image>
                    <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>{item.trip}</Text>
                    <Text style={styles.distance}>approx. </Text>
                    <Text>{getDistance(
{ latitude: item.triplat , longitude: item.triplng },
// { latitude: 6.9565151, longitude: 79.9116888 }
{ latitude: this.state.lat, longitude: this.state.lng }
) / 1000} 
</Text> 
                    </View>
                    <Text style={styles.text1}>{item.region}</Text>
                    <Text style={styles.text2}>{item.district}</Text>
                    </View>
                    
                    
                </View>
            </TouchableOpacity>
            <View style={{height: 246, width: '100%'}}>
                        <MapScreen lat={item.lat} lng={item.lng} ></MapScreen>
                    </View>
              </View>
                
    )}} 
    
    keyExtractor={item => item.id}
    ListFooterComponent={
        <></>
      }
  />

{/*  <View>
    {this.state.trips.map(item => {
     return <View>
     <TouchableOpacity onPress={() => {this.props.navigation.navigate('Singletrip', {keyid: item.id,trip: item.trip, region: item.region, district: item.district, img: item.img, img1: item.img1, img2: item.img2, img3: item.img3, description: item.description, lat:item.lat, lng: item.lng})}}>
             <View style={styles.tile}>
                 <Image style={styles.img} source={{uri: item.img}}></Image>
                 <View style={{flexDirection: 'column'}}>
                 <View style={{flexDirection: 'row'}}>
                 <Text style={styles.text}>{item.trip}</Text>
                 <Text style={styles.distance}>approx. </Text>
                 <Text>{getDistance(
{ latitude: item.lat , longitude: item.lng },
// { latitude: 6.9565151, longitude: 79.9116888 }
{ latitude: this.state.lat, longitude: this.state.lng }
) / 1000} km
</Text> 
                 </View>
                 <Text style={styles.text1}>{item.region}</Text>
                 <Text style={styles.text2}>{item.district}</Text>
                 </View>
                 
                 
             </View>
         </TouchableOpacity>
         <View style={{height: 246, width: '100%'}}>
                     <MapScreen lat={item.lat} lng={item.lng} ></MapScreen>
                 </View>
           </View>
 })}
</View> */}
 


               {/*  <TouchableOpacity>
                    <View style={styles.tile}>
                        <Image style={styles.img} source={{uri: 'https://images.unsplash.com/photo-1537551080512-fb7dd14fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'}}></Image>
                        <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>Sigiriya Fortress</Text>
                        <Text style={styles.distance}>approx. </Text>
                        <Text>{getDistance(
    { latitude: 51.5103, longitude: 7.49347 },
    { latitude: "51° 31' N", longitude: "7° 28' E" }
)} m
</Text>
                        </View>
                        <Text style={styles.text1}>Sigiriya</Text>
                        <Text style={styles.text2}>Matale</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tile}>
                        <Image style={styles.img} source={{uri: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80'}}></Image>
                        <View style={{flexDirection: 'column'}}>
                        <Text style={styles.text}>Nine Arches</Text>
                        <Text style={styles.text1}>Ella</Text>
                        <Text style={styles.text2}>Badulla</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity> */} 
                {/* </ScrollView> */}
            </View> 
           
        )
    }
}

const styles = StyleSheet.create({
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


export default TripsScreen ;