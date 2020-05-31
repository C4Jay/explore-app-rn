import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Custombutton from '../component/custombutton.js';

import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { TouchableOpacity, PinchGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import axios from '../axios-list';

var trip = ''
var take = ''
class SingletripScreen extends Component {

    state = {
        trip: '',
        img: false,
        img1: false,
        img2: false,
        img3: false,
    }

    images = [{
        url: this.props.navigation.getParam('img'),
        }]

    show () {
        this.setState({
            img: true
        })
    }

    favsSet () {
        console.log(this.props.navigation.getParam('trip'))
        console.log('hey')
       /*  axios.post('/Users.json', {favourites: this.props.navigation.getParam('keyid')})
        .then(response => {
            console.log(response)
        }).catch (err => {
            console.log(err)
        }) */
    }

    colorSet () {
        return ('green')
    }
    componentDidMount() {
       console.log(this.props.navigation.getParam('trip'))
        trip = this.props.navigation.getParam('trip')
    
    }

 

    render() {
        take = 'this'
        return (
            <ScrollView>
               
            {/* <View style={{backgroundColor: '#32b855'}}> */}
            <View>
               
                <Image style={styles.img} source={{uri: this.props.navigation.getParam('img')}}></Image>                
                <Image style={styles.img} source={{uri: this.props.navigation.getParam('img1')}}></Image>
                <Image style={styles.img} source={{uri: this.props.navigation.getParam('img2')}}></Image>
                <Image style={styles.img} source={{uri: this.props.navigation.getParam('img3')}}></Image>
            
       
       <View style={styles.trip}>
                    <Text style={{fontSize: 26}}>{this.props.navigation.getParam('trip')}</Text>
                </View>
                <LinearGradient
        //   colors={['#11998e', '#38ef7d']}
        // colors={['#ee0979', '#ff6a00']}
        colors={['#efca08', '#efca08']}
         
        >
                <View style={styles.location}>
                    <Text style={{color: 'darkgrey'}}>
                        {this.props.navigation.getParam('region')}
                    </Text>
                    <Text style={{color: 'darkgrey'}}>
                        | {this.props.navigation.getParam('district')}
                    </Text>
                </View>
                <View style={styles.description}>
                    <Text style={{color: 'white'}}>{this.props.navigation.getParam('description')}</Text>
                </View>
                <Button mode="contained" color="#bbdef0" style={{width: '100%'}} onPress={() => this.props.navigation.navigate('Journey', {trip: this.props.navigation.getParam('trip'), keyid: this.props.navigation.getParam('keyid'), lat: this.props.navigation.getParam('lat'), lng: this.props.navigation.getParam('lng')})}>get there</Button>
                </LinearGradient>
            </View>
            
            </ScrollView>
        )
    }
}

SingletripScreen['navigationOptions'] = screenProps => ({
    title:screenProps.navigation.getParam('trip'),
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
    headerTitleStyle: { 
    },
    headerRight: () => {return ( <HeaderButtons HeaderButtonComponent={Custombutton}>
        <Item 
        title="Favorite" 
        iconName="ios-star" 
        onPress={() => {
            axios.post('/Users.json', {favourites: screenProps.navigation.getParam('trip'), user: screenProps.navigation.getParam('user') /* 'hey' */})
        .then(response => {
            console.log(response)
        }).catch (err => {
            console.log(err)
        })
        } }></Item>
    </HeaderButtons>)}
})
    


const styles = StyleSheet.create({
    img: {
        height: 400,
        width: '100%',
        marginBottom: 3,
        marginTop: 3
    },
    location: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    description: {
        marginLeft: 10,
        marginRight: 3,
        marginBottom: 30,
        color: 'white',
        backgroundColor:'#efca08'
    },
    trip: {
        alignItems: 'center',
        fontSize: 26,
        backgroundColor: 'pink',
        marginBottom: 3
    }
})



export default SingletripScreen;