import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import img from '../assets/imgs/flame-page-under-construction.png';
import * as firebase from 'firebase';


/* var firebaseConfig = {
    apiKey: "AIzaSyAiI5UcfWWLo-t5L0K4GHYjZUQgmm5Xfu0",
    authDomain: "map-app-rn.firebaseapp.com",
    databaseURL: "https://map-app-rn.firebaseio.com",
    projectId: "map-app-rn",
    storageBucket: "map-app-rn.appspot.com",
    messagingSenderId: "874118927923",
    appId: "1:874118927923:web:ebe12c1dc6f28c7a7fb546",
    measurementId: "G-TYMXKNNXKZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); */

  

class SigninScreen extends Component {


    state = {
        mail: '',
        password: ''
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
        
        
     
    }

    handleChange = (trip) => {
        this.setState({
            trip: trip
        })
    }



    handleChangemail = (mail) => {
        this.setState({
            mail: mail
        })
    }

    handleChangpassword = (password) => {
        this.setState({
            password: password
        })
    }

    check = () => {
        console.log(this.state.mail)
        console.log(this.state.password)

        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.mail, this.state.password)
          .then(() => this.props.navigation.navigate('Tripsstyle'))
          .catch(err => console.log(err))
    }

    signin () {
        console.log(this.state.mail, this.state.password)
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.mail, this.state.password)
          .then(() => this.props.navigation.navigate('Tripsstyle'))
          .catch(err => console.log(err))
    }

    componentDidMount () {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main' : 'SignUp')
          })

          
    }

    render () {
        return (
            <View>
                <View style={styles.title}>
                <Text style={styles.tiletext}>Sign In</Text>
                </View>
                
                <View style={{ alignItems: 'center', marginTop: 50}}>
                <TextInput
                    style={styles.searchBox}
                    placeholder="E-mail"
                    placeholderTextColor='#666'
                    value={this.state.mail}
                    onChangeText={(mail) => this.setState({mail})}>

                    </TextInput>
                    <Feather name='mail' size={22} color='#666' style={{position: 'relative', top: -40, left: 120, zIndex: 4, right: 60}} />
               
                    <TextInput
                    style={styles.searchBox}
                    placeholder="Password"
                    placeholderTextColor='#666'
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}>

                    </TextInput>
                    <Feather name='lock' size={22} color='#666' style={{position: 'relative', top: -40, left: 120, right: 60}} />

{/*                     <View style={styles.BookTicketBtn}>
           <TouchableOpacity onPress={this.check}>
           <Text style={styles.bookTicketText}>Sign In</Text>
           </TouchableOpacity>
           
           </View> */}

           <Button onPress={this.check} mode="contained" style={{color: 'white', borderRadius: 20}} color="#ff6200">Sign In</Button>
              <View style={{width: '100%', bottom: 0}}> 
               <Image  style={{width: '92%', height: 250, borderRadius: 10, bottom: 0, alignSelf: 'center', marginBottom: 20}}  source={require ('../assets/imgs/flame-page-under-construction.png')}></Image>
               </View>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        // position: 'absolute',
        textAlign: 'center',
        alignItems: 'center',

        justifyContent: 'center',
        top: 0,
        backgroundColor: /* '#c938b6' */'#ff6200',
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        height: 220
    },
    tiletext: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        bottom: -20
    },
    searchBox : {
        marginTop: 10,
        backgroundColor: 'white',
        paddingLeft: 24,
        padding: 12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        width: '90%',
        height: 30
    },
    BookTicketBtn: {
        position: 'absolute',
        // right: 12,
        top: 200,
        backgroundColor: '#ff6200',
        padding: 16,
        borderRadius: 40,
        elevation: 5,
        width:100,
        textAlign: 'center'
    },
    bookTicketText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default SigninScreen;