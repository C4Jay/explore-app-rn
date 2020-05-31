import React from 'react'
import {  } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const Custombutton = (props) => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={26} color='yellow'></HeaderButton>
}

export default Custombutton;