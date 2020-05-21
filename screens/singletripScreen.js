import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

class SingletripScreen extends Component {
    render() {
        return (
            <ScrollView>
            <View style={{backgroundColor: '#32b855'}}>
                <Image style={styles.img} source={{uri: this.props.navigation.getParam('img')}}></Image>
                <Image style={styles.img} source={{uri: this.props.navigation.getParam('img1')}}></Image>
                <Image style={styles.img} source={{uri: this.props.navigation.getParam('img2')}}></Image>
                <Image style={styles.img} source={{uri: this.props.navigation.getParam('img3')}}></Image>
                <View style={styles.trip}>
                    <Text style={{fontSize: 26}}>{this.props.navigation.getParam('trip')}</Text>
                </View>
                <View style={styles.location}>
                    <Text>
                        {this.props.navigation.getParam('region')}
                    </Text>
                    <Text>
                        {this.props.navigation.getParam('district')}
                    </Text>
                </View>
                <View style={styles.description}>
                    <Text>{this.props.navigation.getParam('description')}</Text>
                </View>
                <Button mode="contained" style={{width: '100%'}}>get there</Button>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        height: 400,
        width: '100%',
        marginBottom: 3,
        marginTop: 3
    },
    location: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    description: {
        marginLeft: 10,
        marginRight: 3,
        marginBottom: 30,
    },
    trip: {
        alignItems: 'center',
        fontSize: 26,
        backgroundColor: 'pink'
    }
})



export default SingletripScreen;