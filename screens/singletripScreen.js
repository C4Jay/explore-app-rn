import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Custombutton from '../component/custombutton.js';

var trip = ''
class SingletripScreen extends Component {

    state = {
        trip: ''
    }

    favsSet () {
        console.log(this.props.navigation.getParam('trip'))
    }
    componentDidMount() {
       console.log(this.props.navigation.getParam('trip'))
        trip = this.props.navigation.getParam('trip')
    
    }

    

    render() {
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
        onPress={() => {screenProps.favsSet} }></Item>
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