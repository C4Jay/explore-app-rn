import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, FlatList, Alert, Image} from 'react-native';
import { white } from 'color-name';
import { TextInput } from 'react-native-paper';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

import * as Permissions from 'expo-permissions';
import * as Maplocation from 'expo-location';

import { getDistance } from 'geolib';
class TripsnewstylesScreen extends Component {

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
            }, () => {Alert.alert(
                /* 'Couldn`t locate you',
                'Please try later or pick a location on the map',
                [{text: 'OK'}] */
                'Please note',
                'distances shown in this list is an approximate value based on your current location and is not 100% correct 😊, For directions go to each trip. \nThank You 😇',
                [{text: 'OK'}]
            )})
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
                'Something happened',
                'We couldn\'t locate you please go back and come again',
                [{text: 'OK'}]
            )
        }
        // setisfetching(false)
        this.setState({
            donefetching: true
        })
        // this.getMiles(6.8046796,80.7669454)

    }




    static navigationOptions = {
        // title: 'Explore Sri Lanka',
        // headerStyle: {
        //   backgroundColor: /* '#f4511e' */ Platform.OS === 'android' ? 'yellow' : '#d303fc',
        // position: 'absolute', backgroundColor: 'transparent', zIndex: 100, /* top: 0, left: 0, right: 0 */
        // },
        headerTransparent: {position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0},
        headerTintColor: 'white',
        headerTitle: 'Sri Lanka',
        
            headerTitleStyle: { 
                fontFamily: 'sans-serif-light'
             },
        
        
        // headerBackground: (
        //     <Image
        //       style={StyleSheet.absoluteFill}
        //       source={require ('../assets/imgs/pngfind.com-asia-png-2659486.png')}
        //     />
        //   ),
        /* headerTitle: (props) => ( // App Logo
            <Image
              style={{ width: 190, height: 45 }}
              source={require('../assets/imgs/pngfind.com-asia-png-2659486.png')}
              resizeMode='contain'
            />
          ),
     */
    }


    state = {
        trips: [],
        trip: '',
        lat: '',
        lng: '',
        tripsfavs: []
    }

    handleChange = (trip) => {
        this.setState({
            trip: trip
        })
    }

    async componentDidMount() {


        await this.locationHandler()
        
        if(this.props.navigation.getParam('district') ) {
            axios.get('https://map-app-rn.firebaseio.com/Trips.json')
        .then((response) => {
       
            const hotel = []
            const obj = response.data
            var counter = 0
            for(let key in obj) {
              
              if(obj[key].tripdistrict == this.props.navigation.getParam('district') ) {
            //    var distance = this.getMiles(obj[key].triplat,obj[key].triplng)
        //   this.getMiles(obj[key].triplat,obj[key].triplng)
            //   var  number = count
            //    count++
            counter++
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
                  tripdescription: obj[key].tripdescription,
                  tripdistance: distanceglo,
                //   tripduration: this.getMiles(triplat,triplng)
                tripnumber: counter-1,
              /*   cold: obj[key].cold,
                hot: obj[key].hot,
                monk: obj[key].monk,
                ele: obj[key].ele,
                rainy: obj[key].rainy
                */

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
    else { 
        
       try {
        //     db.ref('Trips').on('value', snapshot => {
        //       let chats = [];
        //       snapshot.forEach((snap) => {
        //         chats.push(snap.val());
        //       });
        //       this.setState({ trips: chats });
        //       console.log(this.state.trips)
        //     });
        //   } catch (error) {
        //     this.setState({ readError: error.message });
        //   }

        axios.get('https://map-app-rn.firebaseio.com/Trips.json')
        .then((response) => {
       
            const hotel = []
            const obj = response.data
            var counter = 0
            for(let key in obj) {
              
            // this.getMiles(obj[key].triplat,obj[key].triplng)
           
      

    
  
          
          
          
            // counter++
            
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
                  tripdescription: obj[key].tripdescription,
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
     /*  tripdistance: getDistance(
        { latitude: obj[key].lat , longitude: obj[key].lng },
        // { latitude: 6.9565151, longitude: 79.9116888 }
        { latitude: this.state.lat, longitude: this.state.lng }
        ), */

                //   tripdistance: distances[counter-1],

                // tripdistance: distancetrip,

                //   tripduration: this.getMiles(triplat,triplng)
                tripnumber: counter-1

              })
            }
   

            this.setState({
                trips: hotel,
                

               

            })

            function compare( a, b ) {
                if ( a.tripdistance < b.tripdistance ){
                  return -1;
                }
                if ( a.tripdistance > b.tripdistance ){
                  return 1;
                }
                return 0;
              }
            var tripslist = this.state.trips.sort(compare)
            this.setState({
                tripsfinl: this.state.trips
            })
            console.log(hotel)
            console.log(distances)
            

        // }

        })
        .catch(err => {
            console.log(err)
        })
    }catch {
        console.log(err)
    }

        
    axios.get('https://map-app-rn.firebaseio.com/Users.json')
    .then((response) => {
   
        const hotel = []
        const obj = response.data
        for(let key in obj) {
          
          if(obj[key].user == 'user1' ) {
           
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
            tripsfavs: hotel
        })
        console.log(hotel)

    }

    })
    .catch(err => {
        console.log(err)
    })
 
   

}

        
    }

    





    render () {
        return (
            <View style={{flex: 1}}>
                <View>
                    <ImageBackground
                    source={{uri: 'https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'}}
                    style={{width: '100%', height: 270}}
                    imageStyle={{borderBottomRightRadius: 40}}>

                    </ImageBackground>
                    <View style={styles.DarkOverlay}>
                    <View style={styles.searchContainer}>
                    <Text style={styles.userGreet}>Hey,</Text>
                    <Text style={styles.userText}>Where do you like to go?</Text>
                    </View>

                    <TextInput
                    style={styles.searchBox}
                    placeholder="Find destination"
                    placeholderTextColor='#666'
                    value={this.state.trip}
                    onChangeText={this.handleChange}>

                    </TextInput>
                    <Feather name='search' size={22} color='#666' style={{position: 'absolute', top: 220, left: 300, right: 60}} />
                    {/* <Feather name='menu' size={22} color='#fff' style={{position: 'absolute', top: 220, left: 300, right: 60}} /> */}
                    {/* <Feather name='bell' size={22} color='#666' style={{position: 'absolute', top: 240, left: 300, right: 60}} /> */}
                   
                    </View>
                    </View>

                    <ScrollView>
                        <View style={{padding: 16}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Trending destinations</Text>
                        </View>
                        <View>
                            <FlatList
                            horizontal={true}
                            data={this.state.trips}
                            renderItem={({item}) => {
                                return (
                                    <View key={item.triptrip} style={{paddingVertical: 20, paddingLeft: 10}}>
                                        {this.state.trip.toLowerCase().substring(0,4) == item.triptrip.toLowerCase().substring(0,4) || this.state.trip == '' ?
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Singletripstyle', {trip: item.triptrip, keyid: item.tripid, region: item.tripregion, district: item.tripdistrict, img: item.tripimg, img1: item.tripimg1, img2: item.tripimg2, img3: item.tripimg3, description: item.tripdescription, lat:item.triplat, lng: item.triplng,})}>
                                            <Image source={{uri: item.tripimg}} style={{width: 150, marginRight: 8, height: 250, borderRadius: 10}}/>
                                        <View style={styles.ImageOverlay}></View>
                                        <Feather name='map-pin' size={16} color='white' style={styles.imageLocationIcon}/>
                                        <MaterialCommunityIcons name='map-marker-distance' size={16} color='white' style={styles.imageLocationIcon1}/>
                                        
                                        <Text style={styles.ImageText}>{item.triptrip}</Text>
                                        {item.tripdistrict == 'Badulla' ?
                    <Text style={styles.distance1}>{Math.round(getDistance(
{ latitude: item.triplat , longitude: item.triplng },
// { latitude: 6.9565151, longitude: 79.9116888 }
{ latitude: this.state.lat, longitude: this.state.lng }
) / 1000 + 60 + 10)}  km
                          </Text>  : <Text style={styles.distance1}>{Math.round(getDistance(
{ latitude: item.triplat , longitude: item.triplng },
// { latitude: 6.9565151, longitude: 79.9116888 }
{ latitude: this.state.lat, longitude: this.state.lng }
) / 1000 + 10)}  km</Text> }
                                        </TouchableOpacity>
                                        : null }
                                        </View>
                                )
                            }}
                                />
                        </View>
                        
                        <View style={{paddingBottom: 60}}>
                            <View style={{padding: 20,  flexDirection: 'row', justifyContent:'space-between', float: 'left'}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold', float: 'left'}}>Favorites</Text>
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#ff2600'}}>view all</Text>
                            </View>
                            
                            <FlatList
                            data={this.state.tripsfavs}
                            renderItem={({item}) => {
                                return (

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Singletripstyle', {trip: item.triptrip, keyid: item.tripid, region: item.tripregion, district: item.tripdistrict, img: item.tripimg, img1: item.tripimg1, img2: item.tripimg2, img3: item.tripimg3, description: item.tripdescription, lat:item.triplat, lng: item.triplng,})}>
                            <Image 
                            source={{uri: /* 'https://images.unsplash.com/photo-1580889272861-dc2dbea5468d?ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80' */ item.tripimg}}
                            style={{width: '92%', height: 250, borderRadius: 10, alignSelf: 'center', marginBottom: 20}} />
                            <View style={{position: 'absolute', bottom: 0, padding: 16}}>
                                <View style={{flexDirection: 'column' ,padding:10}}>
                                    <Feather name='map-pin'
                                    color='white'
                                    size={22}
                                    style={{marginLeft: 10, position: 'absolute',bottom: 65}}></Feather>
                                    <Text style={{fontSize: 22, color: 'white',marginLeft: 34, marginHorizontal: 10, marginBottom: 10}}>{item.triptrip}</Text>
                                    <View>
                                    <Text style={{fontSize: 14, color: 'white', marginBottom: 4, opacity: 0.9, marginLeft: 16}}>
                                    {item.tripdescription.substring(0,80)}....
                                    </Text>
                                    </View>
                                
                                </View>
                            </View>
                            </TouchableOpacity>
                                )}}/>
                        </View>

                    </ScrollView>
                    </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    DarkOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 270,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderBottomRightRadius: 40    
    },
    searchContainer: {
        paddingTop: 100,
        padding: 16
    },
    userGreet: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white'
    },
    userText: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: 'white'
    },
    searchBox : {
        marginTop: 16,
        backgroundColor: 'white',
        paddingLeft: 24,
        padding: 12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        width: '90%',
        height: 30
    },
    imageLocationIcon: {
        position: 'absolute',
        marginTop: 4,
        left: 10,
        bottom: 10
    },
    imageLocationIcon1: {
        position: 'absolute',
        marginTop: 4,
        left: 10,
        bottom: 29
    },
    ImageText: {
        position: 'absolute',
        color: 'white',
        marginTop: 4,
        fontSize: 14,
        left: 30,
        bottom: 10
    },
    distance1: {
        position: 'absolute',
        color: 'white',
        marginTop: 4,
        fontSize: 14,
        left: 30,
        bottom: 29

    }
})
export default TripsnewstylesScreen