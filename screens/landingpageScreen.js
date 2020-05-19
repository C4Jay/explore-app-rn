import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';

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
    render () {
    return (
    <View>
        <Text>landing page</Text>
    </View>
    )
    }
}

export default landingpageScreen;