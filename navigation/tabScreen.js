import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Font from 'react-native-vector-icons/FontAwesome';
//Screens
import hospital from '../Home/hospital';
import insemination from '../Home/insemination';
import main from '../Home/main';
import menu from '../Home/menu';

const tab = createMaterialBottomTabNavigator();

const tabScreen = () => {
    <tab.Navigator
        initialRouteName = "Main"
        activeColor = "#fff"
    >
        <tab.Screen 
            name = "Main"
            component = {main}
            options = {{
                tabBarLabel: 'Main',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name='home-outline' color = {color} size={26}/>
                ),
            }}
        />
        <tab.Screen 
            name = "Hospital"
            component = {hospital}
            options = {{
                tabBarLabel: 'Main',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <Font name='hospital-o' color = {color} size={26}/>
                ),
            }}
        />
        <tab.Screen 
            name = "Menu"
            component = {menu}
            options = {{
                tabBarLabel: 'Main',
                tabBarColor: '#694fad',
                tabBarIcon: ({ color }) => (
                    <Icon name='fast-food-outline' color = {color} size={26}/>
                ),
            }}
        />
        <tab.Screen 
            name = "Insemination"
            component = {insemination}
            options = {{
                tabBarLabel: 'Main',
                tabBarColor: '#d02860',
                tabBarIcon: ({ color }) => (
                    <Icon name='heart-outline' color = {color} size={26}/>
                ),
            }}
        />
    </tab.Navigator>
}

export default tabScreen;