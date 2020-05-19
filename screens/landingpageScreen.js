import React, { Component } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';

class landingpageScreen extends Component {
    static navigationOptions = {
        title: 'Explore Sri Lanka',
        headerStyle: {
          backgroundColor: /* '#f4511e' */ Platform.OS === 'android' ? 'yellow' : '#d303fc',
        },
        headerTintColor: 'black',
        headerTitleStyle: { 
        },
    }

    newbookingHandler () {
        console.log('new')
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


<TouchableOpacity onPress={this.newbookingHandler}>
<View style={{alignItems: 'center', marginTop: '136%'}}>
<View style={{height: 50, width: 150, textAlign:'center', backgroundColor: 'rgba(255,255,255, 0.5)', alignItems: 'center', justifyContent:'center', borderRadius: 6}}>
<Text style={{textAlign: 'center'}}>Explore all</Text>
</View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.newbookingHandler}>
<View style={{alignItems: 'center', marginTop: 10}}>
<View style={{height: 50, width: 150, textAlign:'center', backgroundColor: 'rgba(255,255,255, 0.5)', alignItems: 'center', justifyContent:'center', borderRadius: 6}}>
<Text style={{textAlign: 'center'}}>Explore by region</Text>
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