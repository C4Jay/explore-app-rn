import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const regionScreen = props => {

    return (
        <ScrollView style={{backgroundColor: /* '#756477' */ /* '#efca08' */ '#fdea79'}}>
        <View style={styles.main}>
            <View styles={styles.tile}>
                <TouchableOpacity onPress = {() => {props.navigation.navigate('Tripsnew', {district: 'Matale' , user: props.navigation.getParam('user')})}}>
                <ImageBackground style={styles.img} source={require ('../assets/imgs/photo-1580889240912-c39ecefd3d95.jpg')}>
                <Text style={styles.text}>MATALE</Text></ImageBackground>
                {/* <Text>Matale</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.tile}>
                <TouchableOpacity onPress = {() => {props.navigation.navigate('Tripsnew', {district: 'Badulla', user: props.navigation.getParam('user')})}}>
                <ImageBackground style={styles.img} source={require ('../assets/imgs/photo-1519576325797-91124298a877.jpg')}>
                <Text style={styles.text}>BADULLA</Text></ImageBackground>
                {/* <Text style={style.text}>Badulla</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.tile}>
                <TouchableOpacity onPress = {() => {props.navigation.navigate('Tripsnew', {district: 'Galle', user: props.navigation.getParam('user')})}}>
                <ImageBackground style={styles.img} source={require ('../assets/imgs/photo-1567498573339-688686a4b5df.jpg')}>
                <Text style={styles.text}>GALLE</Text></ImageBackground>
                {/* <Text style={style.text}>Galle</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.tile}>
                <TouchableOpacity onPress = {() => {props.navigation.navigate('Tripsnew', {district: 'Ratnapura', user: props.navigation.getParam('user')})}}>
                <ImageBackground style={styles.img} source={require ('../assets/imgs/photo-1539021929149-88832c42bc15.jpg')}>
                <Text style={styles.text}>RATNAPURA</Text></ImageBackground>
                {/* <Text style={style.text}>Galle</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.tile}>
                <TouchableOpacity onPress = {() => {props.navigation.navigate('Tripsnew', {district: 'Matara', user: props.navigation.getParam('user')})}}>
                <ImageBackground style={styles.img} source={require ('../assets/imgs/photo-1522310193626-604c5ef8be43.jpg')}>
                <Text style={styles.text}>MATARA</Text></ImageBackground>
                {/* <Text style={style.text}>Galle</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.tile}>
                <TouchableOpacity onPress = {() => {props.navigation.navigate('Tripsnew', {district: 'Batticaloa', user: props.navigation.getParam('user')})}}>
                <ImageBackground style={styles.img} source={require ('../assets/imgs/photo-1552055568-f8c4fb8c6320.jpg')}>
                <Text style={styles.text}>BATTICALOA</Text></ImageBackground>
                {/* <Text style={style.text}>Galle</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.tile}>
                <TouchableOpacity onPress = {() => {props.navigation.navigate('Tripsnew', {district: 'Polonnaruwa', user: props.navigation.getParam('user')})}}>
                <ImageBackground style={styles.img} source={require ('../assets/imgs/photo-1580889242438-b286d3a752a1.jpg')}>
                <Text style={styles.text}>POLONNARUWA</Text></ImageBackground>
                {/* <Text style={style.text}>Galle</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.tile}>
                <TouchableOpacity onPress = {() => {props.navigation.navigate('Tripsnew', {district: 'Kegalle', user: props.navigation.getParam('user')})}}>
                <ImageBackground style={styles.img} source={require ('../assets/imgs/photo-1533484482814-3fe2d922be89.jpg')}>
                <Text style={styles.text}>KEGALLE</Text></ImageBackground>
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
        backgroundColor: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif-light'
    }
})

export default regionScreen;