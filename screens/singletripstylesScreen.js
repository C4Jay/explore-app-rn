import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import {Feather} from '@expo/vector-icons';

import { AsyncStorage } from 'react-native';
class SingletripstyleScreen extends Component {

    state = {
        trips: []
    }

    handleFavs() {

        axios.get('https://map-app-rn.firebaseio.com/Users.json')
    .then((response) => {
   
        const hotel = []
        const obj = response.data
        for(let key in obj) {
          
          if(obj[key].user == AsyncStorage.getItem('user') && obj[key].triptrip == this.props.navigation.getParam('trip') ) {
              return 
          
        }
    }}).catch (er => {
        console.log(er)
    })
        axios.post('https://map-app-rn.firebaseio.com/Users.json', {favourites: this.props.navigation.getParam('trip'), user:  AsyncStorage.getItem('user') /* 'hey' */,
            trip: this.props.navigation.getParam('trip'), region: this.props.navigation.getParam('region'), district: this.props.navigation.getParam('district'), img: this.props.navigation.getParam('img'), img1: this.props.navigation.getParam('img1'), img2: this.props.navigation.getParam('img2'), img3: this.props.navigation.getParam('img3'), description: this.props.navigation.getParam('description'), lat:this.props.navigation.getParam('lat'), lng: this.props.navigation.getParam('lng'),
    })
    .then(response => {
        console.log(response.data)
    }).catch(er => {
        console.log(er)
    })
}

    componentDidMount() {


      

        axios.get('https://map-app-rn.firebaseio.com/Trips.json')
        .then((response) => {
       
            const hotel = []
            const obj = response.data
            var counter = 0
            for(let key in obj) {

                if(obj[key].tripdistrict == this.props.navigation.getParam('district') && obj[key].triptrip != this.props.navigation.getParam('trip')) {

            
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

            console.log(this.state.trips)

           
        
        }
        
    })
    .catch (err => {
        console.log(err)
    })

    

}




    
    render () {
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
            <ImageBackground
            source={{uri:this.props.navigation.getParam('img')}}
            style={styles.image}
            imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
            >
            <Text style={styles.Tagline}>Discover {this.props.navigation.getParam('trip')}</Text>
            
            <Text style={styles.Placename}>Located in {this.props.navigation.getParam('district')} district</Text>
            
 <View style={{position: 'absolute', right: 20, top: 40, backgroundColor: '#ff6200', padding: 10, borderRadius: 40, elevation: 5}}>         
 <TouchableOpacity onPress={() => {this.handleFavs()}}>
<Feather name='heart' size={22} color='white' />
</TouchableOpacity>         
</View>
            
       </ImageBackground>

       {/* <TouchableOpacity style={styles.BookTicketBtn}> */}
       <View style={styles.BookTicketBtn}>
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Journey', {trip: this.props.navigation.getParam('trip'), img: this.props.navigation.getParam('img')})}>
           <Text style={styles.bookTicketText}>Get There</Text>
           </TouchableOpacity>
           </View>
       {/* </TouchableOpacity> */}

               <ScrollView>
                   <Text style={{padding: 14, fontSize: 22, fontWeight: 'bold'}}>
                   {this.props.navigation.getParam('trip')}
                   </Text>
                   <Text  style={{paddingHorizontal: 14, fontSize: 14, justifyContent: 'flex-start', opacity: 0.3, textAlign: 'justify', lineHeight: 26}}>{this.props.navigation.getParam('description')}</Text>

                   <View>
                       <Text style={{padding: 14, fontSize: 20 , fontWeight: 'bold'}}>
                       Other places in the area
                       </Text>
                       <FlatList
                            horizontal={true}
                            data={this.state.trips}
                            renderItem={({item}) => {
                                return (
                                    <View key={item.triptrip} style={{paddingVertical: 20, paddingLeft: 10}}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Singletripstyle', {trip: item.triptrip, keyid: item.tripid, region: item.tripregion, district: item.tripdistrict, img: item.tripimg, img1: item.tripimg1, img2: item.tripimg2, img3: item.tripimg3, description: item.tripdescription, lat:item.triplat, lng: item.triplng,})}>
                                            <Image source={{uri: item.tripimg}} style={{width: 150, marginRight: 8, height: 250, borderRadius: 10}}/>
                                        <View style={styles.ImageOverlay}></View>
                                        <Feather name='map-pin' size={16} color='white' style={styles.imageLocationIcon}/>
                                        
                                        <Text style={styles.ImageText}>{item.triptrip}</Text></TouchableOpacity>
                                        </View>
                                )
                            }}
                                />

                   </View>
               
               </ScrollView>
            </View>
        )
    }
}

SingletripstyleScreen['navigationOptions'] = screenProps => ({
    title:screenProps.navigation.getParam('trip'),
    
    headerTransparent: {position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0},
    headerTintColor: 'white',
    headerTitleStyle: {
         fontFamily: 'sans-serif-light' 
    }})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 380,
        width: '100%',
        justifyContent: 'flex-end'
    },
    Tagline: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginVertical: 6
    },
    Placename: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginBottom: 30
    },
    BookTicketBtn: {
        position: 'absolute',
        right: 12,
        top: 350,
        backgroundColor: '#ff6200',
        padding: 16,
        borderRadius: 40,
        elevation: 5
    },
    bookTicketText: {
        color: 'white',
        fontSize: 14
    },
    imageLocationIcon: {
        position: 'absolute',
        marginTop: 4,
        left: 10,
        bottom: 10
    },
    ImageText: {
        position: 'absolute',
        color: 'white',
        marginTop: 4,
        fontSize: 14,
        left: 30,
        bottom: 10
    }

})

export default SingletripstyleScreen;