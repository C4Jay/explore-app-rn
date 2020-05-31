import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const regionScreen = props => {

    return (
        <ScrollView style={{backgroundColor: /* '#756477' */ /* '#efca08' */ '#fdea79'}}>
        <View style={styles.main}>
            <View styles={styles.tile}>
                <TouchableOpacity onPress = {() => {props.navigation.navigate('Tripsnew', {district: 'Matale'})}}>
                <ImageBackground style={styles.img} source={require ('../assets/imgs/photo-1580889240912-c39ecefd3d95.jpg')}>
                <Text style={styles.text}>MATALE</Text></ImageBackground>
                {/* <Text>Matale</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.tile}>
                <TouchableOpacity onPress = {() => {props.navigation.navigate('Tripsnew', {district: 'Badulla'})}}>
                <ImageBackground style={styles.img} source={require ('../assets/imgs/photo-1519576325797-91124298a877.jpg')}>
                <Text style={styles.text}>BADULLA</Text></ImageBackground>
                {/* <Text style={style.text}>Badulla</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.tile}>
                <TouchableOpacity onPress = {() => {props.navigation.navigate('Tripsnew', {district: 'Galle'})}}>
                <ImageBackground style={styles.img} source={require ('../assets/imgs/photo-1567498573339-688686a4b5df.jpg')}>
                <Text style={styles.text}>GALLE</Text></ImageBackground>
                {/* <Text style={style.text}>Galle</Text> */}
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: /* '#756477' */ /* '#efca08' */ '#fdea79'
    },
    tile : {
        backgroundColor: 'transparent',
        width: 300,
        height: 300,
     
    },
    img: {
     
        width: 300,
        height: 300
    },
    text: {
        fontSize: 26,
        marginTop: 100,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0.5)'
    }
})

export default regionScreen;