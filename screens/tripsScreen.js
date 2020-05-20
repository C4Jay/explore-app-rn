import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import {
    useFonts,
    Pacifico,
  } from '@expo-google-fonts/pacifico';
  import { AppLoading } from 'expo';
  import { getDistance } from 'geolib';
import axios from '../axios-list';

class TripsScreen extends Component {

    state = {
        fontLoaded : false,
        trips: null
    }

    componentDidMount () {
        
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

getDistance(
    { latitude: 51.5103, longitude: 7.49347 },
    { latitude: "51° 31' N", longitude: "7° 28' E" }
);
        return (
            <View>


 <FlatList
        data={this.state.trips}
        renderItem={({ item }) => {return (
            <TouchableOpacity>
                    <View style={styles.tile}>
                        <Image style={styles.img} source={{uri: item.img}}></Image>
                        <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>{item.trip}</Text>
                        <Text style={styles.distance}>approx. </Text>
                        <Text>{getDistance(
    { latitude: item.lat , longitude: item.lng },
    { latitude: 6.9565151, longitude: 79.9116888 }
) / 1000} km
</Text> 
                        </View>
                        <Text style={styles.text1}>{item.region}</Text>
                        <Text style={styles.text2}>{item.district}</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>    
        )}} 
        keyExtractor={item => item.id}
      />


 


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
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    img: {
        height: 150,
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
        backgroundColor: 'rgba(134, 245, 44, 0.8)'
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