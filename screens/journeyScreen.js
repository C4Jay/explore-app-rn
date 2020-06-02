import React, { Component } from 'react';
import getDirections from 'react-native-google-maps-directions'
import { View, Button, StyleSheet } from 'react-native';

var lat;
var lng;

export default class Journeyscreen extends Component {

/*   lat = this.props.navigation.getParam('lat')
  lng = this.props.navigation.getParam('lng')
 */
  trip = this.props.navigation.getParam('trip')

  componentDidMount() {
    if(this.trip == 'Galle Fort') {
      lat = 6.0326762144694746,
      lng = 80.21499999416511
    }
    if(this.trip == 'Sigiriya') {
      lat = 7.9571924,
      lng = 80.7600266
    }
    if(this.trip == 'Nine Arches') {
      lat = 6.8768151,
      lng = 81.0608465
    }
    if(this.trip == 'Adam\'s Peak') {
      lat = 6.8093454,
      lng = 80.4994057
    }
    if(this.trip == 'Mirissa Beach') {
      lat = 5.9493634,
      lng = 80.4558128
    }
    if(this.trip == 'Arugam Bay Beach') {
      lat = 6.8393788,
      lng = 81.8327629
    }
    if(this.trip == 'Horton Plains National Park') {
      lat = 6.8046796,
      lng = 80.7669454
    }
    if(this.trip == 'Sinharaja Rain Forest') {
      lat = 6.401205,
      lng = 80.5102207
    }
    if(this.trip == 'Rawana Falls') {
      lat = 6.8411694,
      lng = 81.0550963
    }

    /* console.log(this.props.navigation.getParam('lat'),this.props.navigation.getParam('lng'))
    lat = this.props.navigation.getParam('lat')
    lng = this.props.navigation.getParam('lng') */
  }

  

  handleGetDirections = () => {
    const data = {
       /* source: {
        latitude: 6.7572025,
        longitude: 79.907201
      }, */
      destination: {
        latitude: /* 6.0558904 */ /* this.props.navigation.getParam('lat'), */lat /* 6.0326762144694746 */,
        longitude: /* 80.1769774 */ /* this.props.navigation.getParam('lng') */ lng /* 80.21499999416511 */
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
    return (
      <View style={styles.main}>
     
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})