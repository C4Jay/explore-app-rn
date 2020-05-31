import React, { Component } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {Icon} from 'react-native-vector-icons';

class landingpageScreen extends Component  {
    static navigationOptions = {
        title: 'Explore Sri Lanka',
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
    
    }

    

    render () {

    return (
    
        <ImageBackground style={{flex: 1}} source={{uri: 'https://images.unsplash.com/photo-1531201890865-fb64780d16e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80'}}>
        {/* <View style={styles.btns}>
        <View>
            <View style={styles.btn}>
                <Text>Explore all</Text>
            </View>
            <View style={styles.btn1}>
                <Text>Explore by area</Text>
            </View>
            </View>
        </View> */}


<TouchableOpacity onPress={() => {this.props.navigation.navigate('Tripsnew', {user: 'user1'})}}>
    <View style={{alignItems: 'center', marginTop: '136%'}}>
        <View style={{height: 50, width: 150, textAlign:'center', backgroundColor: 'rgba(255,255,255, 0.5)', alignItems: 'center', justifyContent:'center', borderRadius: 6}}>
            <Text style={{textAlign: 'center'}}>Explore all</Text>
        </View>
    </View>        
</TouchableOpacity>


<TouchableOpacity onPress={() => {this.props.navigation.navigate('Regions', {user: 'user1'})}}>
    <View style={{alignItems: 'center', marginTop: 10}}>
        <View style={{height: 50, width: 150, textAlign:'center', backgroundColor: 'rgba(255,255,255, 0.5)', alignItems: 'center', justifyContent:'center', borderRadius: 6}}>
            <Text style={{textAlign: 'center'}}>Explore by region </Text> 
        </View>
    </View>
</TouchableOpacity>


<TouchableOpacity onPress={() => {this.props.navigation.navigate('Regions', {user: 'user1'})}}>
    <View style={{alignItems: 'center', marginTop: 10}}>
        <View style={{/* flexDirection: 'row', */ height: 80, width: 150, textAlign:'center', backgroundColor: 'rgba(255,255,255, 0.5)', alignItems: 'center', justifyContent:'center', borderRadius: 6}}>
            <Text style={{textAlign: 'center'}}>Favorites</Text>
            <Image style={{height: 40, width: 35}} source={require('../assets/icons/icon.png')}></Image>
        </View>
    </View>
</TouchableOpacity>
    
</ImageBackground>
    
    )
    }
}


const styles = StyleSheet.create({
    btns: {
        zIndex: 1,
        marginTop: '50%',
        alignItems: 'center',
       
    },
    btn1: {
        marginTop: 30,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: 'white'
    },
    btn: {
        marginTop: 30,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: 'white'
    }
})

export default landingpageScreen;