import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInForm from '../Login_SignUp/SignIn';
import ForgotPassword from '../Login_SignUp/ForgotPassword';
import SignUp from '../Login_SignUp/SignUp';
import main from '../Home/main';

const Stack = createStackNavigator();

const Nav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "SignIn" component = {SignInForm} />
                <Stack.Screen name = "SignUp" component = {SignUp} />
                <Stack.Screen name = "ForgotPassword" component = {ForgotPassword} />
                <Stack.Screen name = 'Main' component = {main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Nav;