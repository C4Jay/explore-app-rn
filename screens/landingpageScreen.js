import React, { Component } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {Icon} from 'react-native-vector-icons';
import * as firebase from 'firebase';
import { AsyncStorage } from 'react-native';
import moment from 'moment';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
class landingpageScreen extends Component  {

    state = {
        user: '',
        time: ''
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
        headerTitleStyle: { 
            flex: 1, textAlign: 'center'
        },
        // headerBackground: (
        //     <Image
        //       style={StyleSheet.absoluteFill}
        //       source={require ('../assets/imgs/pngfind.com-asia-png-2659486.png')}
        //     />
        //   ),
        headerTitle: (props) => ( // App Logo
            <Image
              style={{ width: 190, height: 45 }}
              source={require('../assets/imgs/pngfind.com-asia-png-2659486.png')}
              resizeMode='contain'
            />
          ),
    
    }

    logout () {
        firebase
          .auth()
          .signOut()
          .then(() => console.log('logging out'))
          .catch(err => console.log(err))
        
          AsyncStorage.removeItem('user');  
 
    }

    displayTime(){
        //let now = moment();
        //let location = now.clone().tz(this.props.timezone);
        this.setState({
            time: moment().format('MMMM Do YYYY, h:mm:ss a').toLocaleString()
        });
        //return location.toLocaleString();
    }



    async componentDidMount () {
        let user = await AsyncStorage.getItem('user');
        this.setState({
            user: user
        })

       this.interval = setInterval(() => {
            this.displayTime();
        }, 1000)
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
<View style={{textAlign: 'center', top: 400, display: 'flex', justifyContent: 'center'}}>
    <Text style={{textAlign: 'justify', lineHeight: 26,textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20}}>{this.state.time}</Text>
    
</View>

{/* // {!this.state.user ?  */}
<TouchableOpacity onPress={() => {this.props.navigation.navigate('Signin', {user: 'user1'})}}>
    <View style={{alignItems: 'center', marginTop: '134%', elevation: 5}}>
        <View style={{height: 50, width: 150, textAlign:'center', backgroundColor: '#ff6200', alignItems: 'center',elevation: 10, justifyContent:'center', borderRadius: 25}}>
            <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>BEGIN</Text> 
        </View>

    </View>        
</TouchableOpacity> 
{/* : null } */}


{/* <TouchableOpacity onPress={this.logout}>
    <View style={{alignItems: 'center', marginTop: '100%'}}>
        <View style={{height: 50, width: 150, textAlign:'center', backgroundColor: 'rgba(255,255,255, 0.5)', alignItems: 'center', justifyContent:'center', borderRadius: 6}}>
            <Text style={{textAlign: 'center'}}>Sign Out</Text>
        </View>
    </View>        
</TouchableOpacity>

<TouchableOpacity onPress={() => {this.props.navigation.navigate('Tripsstyle', {user: 'user1'})}}>
    <View style={{alignItems: 'center', marginTop: 10}}>
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


<TouchableOpacity onPress={() => {this.props.navigation.navigate('Favs', {user: 'user1'})}}>
    <View style={{alignItems: 'center', marginTop: 10}}>
        <View style={{height: 80, width: 150, textAlign:'center', backgroundColor: 'rgba(255,255,255, 0.5)', alignItems: 'center', justifyContent:'center', borderRadius: 6}}>
            <Text style={{textAlign: 'center'}}>Favorites</Text>
            <Image style={{height: 40, width: 35}} source={require('../assets/icons/icon.png')}></Image>
        </View>
    </View>
</TouchableOpacity> */}
    
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