import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, FlatList, Alert, Image} from 'react-native';
import { white } from 'color-name';
import { TextInput } from 'react-native-paper';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

import { AsyncStorage } from 'react-native';
class TripallScreen extends Component {

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
        tripsfavs: []
    }

    async componentDidMount () {
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
            <ScrollView style={{marginTop: 20}}>
                <FlatList
                            data={this.state.trips}
                            renderItem={({item}) => {
                                return (

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Singletripstyle', {trip: item.triptrip, keyid: item.tripid, region: item.tripregion, district: item.tripdistrict, img: item.tripimg, img1: item.tripimg1, img2: item.tripimg2, img3: item.tripimg3, description: item.tripdescription, lat:item.triplat, lng: item.triplng,})}>
                            <Image 
                            source={{uri: /* 'https://images.unsplash.com/photo-1580889272861-dc2dbea5468d?ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80' */ item.tripimg}}
                            style={{width: '92%', height: 250, borderRadius: 10, alignSelf: 'center', marginBottom: 15, marginTop: 10}} />
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
            </ScrollView>
        )
    }
}

export default TripallScreen;