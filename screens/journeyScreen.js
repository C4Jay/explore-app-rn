import React, { Component } from 'react';
import getDirections from 'react-native-google-maps-directions'
import { View, Button, StyleSheet } from 'react-native';
import axios from '../axios-list';

var lat;
var lng;

var Gallelat = 6.0326762144694746;
var Gallelng = 80.21499999416511;

export default class Journeyscreen extends Component {

    
    componentDidMount() {
      let trip = this.props.navigation.getParam('trip')
      console.log(trip)
      if(trip == "Galle Fort") {
        lat = Gallelat,
        lng = Gallelng
      }
        /* console.log(this.props.navigation.getParam('lat'),this.props.navigation.getParam('lng'))
        axios.get('/Trips/'+ this.props.navigation.getParam('keyid') +'/.json')
        .then(response => {
          console.log(response.data.triplng)
          lat = response.data.triplat
          lng = response.data.triplng
          console.log(lat,lng)
          
        }).catch(err => {
          console.log(err)
        })
        */

    }
 
  handleGetDirections = () => {
    const data = {
       /* source: {
        latitude: 6.7572025,
        longitude: 79.907201
      }, */

      
      destination: {
      
        latitude:  lat/* Gallelat *//* this.props.navigation.getParam('lat') */ /* 6.0558904 */ /* 7.9570007 */ /* 6.0326762144694746 *//*  this.props.navigation.getParam('lat') */ /* this.props.navigation.getParam('lat') */ /* parseFloat(lat) */,
        longitude: lng/* Gallelng */ /* this.props.navigation.getParam('lng') *//* 80.1769774 */ /* 80.757328 */ /* 80.21499999416511 */ /* this.props.navigation.getParam('lng') */ /* this.props.navigation.getParam('lng') */ /* parseFloat(lng) */
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      waypoints: [
        /* {
          latitude: -33.8600025,
          longitude: 18.697452
        },
        {
          latitude: -33.8600026,
          longitude: 18.697453
        },
           {
          latitude: -33.8600036,
          longitude: 18.697493
        } */
      ]
    }
 
    getDirections(data)
  }
 
  render() {

    

  let btn;
  
  if(lat && lng) {
    btn = <View style={styles.btn}>
      <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    
  }
    return (
     /*  <View style={styles.main}>
      <View style={styles.btn}>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
        </View>
      </View> */
      <View style={styles.main}>
      {btn}
      </View>
    );
  }
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: '#efca08',
        flex: 1,
        // justifyContent: 'center'
    },
   /*  btn: {
      justifyContent: 'center'
    } */
})