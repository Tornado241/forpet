import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';

const SignUp = ({ navigation }) => {

    const [data, setData] = useState({
        typeEmail: '',
        typePassword: '',
        comfirmPassword: '',
        isValiEmail: true,
        isValiPassword: true,
        isValiComfirm: true

    });

    const goSignIn = () => {
        navigation.navigate("SignIn");
    }

    const onSignUp = () => {
        if (data.typeEmail === '' || data.typePassword === '' || data.comfirmPassword === '') {
            Alert.alert("Enter your information");
        } else if (data.typePassword != data.comfirmPassword) {
            Alert.alert("Comfirm Pass is not correct")
        } else {
            auth().createUserWithEmailAndPassword(data.typeEmail, data.typePassword)
                .then(() => {
                    navigation.navigate("SignIn");
                })
                .catch((error) => {
                    console.log(`Login failed. Error = ${error}`);
                })
        }
    }

    const handleValiEmail = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                isValiEmail: true
            });
        } else {
            setData({
                ...data,
                isValiEmail: false
            })
        }
    }

    const handleValiPassword = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                isValiPassword: true
            });
        } else {
            setData({
                ...data,
                isValiPassword: false
            })
        }
    }

    const handleValiComfirmPassword = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                isValiComfirm: true
            });
        } else {
            setData({
                ...data,
                isValiComfirm: false
            })
        }
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <TextInput
                style={styles.input}
                keyboardType='email-address'
                placeholder='Enter your email'
                autoCapitalize='none'
                onChangeText={(email) => setData({ ...data, typeEmail: email })}
                onEndEditing={(e) => handleValiEmail(e.nativeEvent.text)}
            />
            {data.isValiEmail ? null :
                <Animatable.View animation='fadeInLeft' duration={500}>
                    <Text style={{ color: '#FF0000', fontSize: 14 }}>Enter Email</Text>
                </Animatable.View>
            }
            <TextInput
                style={styles.input}
                keyboardType='default'
                placeholder='Enter your password'
                secureTextEntry={true}
                onChangeText={(pass) => setData({ ...data, typePassword: pass })}
                onEndEditing={(e) => handleValiPassword(e.nativeEvent.text)}
            />
            {data.isValiPassword ? null :
                <Animatable.View animation='fadeInLeft' duration={500}>
                    <Text style={{ color: '#FF0000', fontSize: 14 }}>Enter Password</Text>
                </Animatable.View>
            }
            <TextInput
                style={styles.input}
                keyboardType='default'
                placeholder='Comfirm password'
                secureTextEntry={true}
                onChangeText={(comfirm) => setData({ ...data, comfirmPassword: comfirm })}
                onEndEditing={(e) => handleValiComfirmPassword(e.nativeEvent.text)}
            />
            {data.isValiComfirm ? null :
                <Animatable.View animation='fadeInLeft' duration={500}>
                    <Text style={{ color: '#FF0000', fontSize: 14 }}>Comfirm Password</Text>
                </Animatable.View>
            }
            <TouchableOpacity
                style={styles.buttom}
                onPress={onSignUp}
            >
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttom}
                onPress={goSignIn}
            >
                <Text>Go To Login</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        margin: 10,
        padding: 10,
        borderWidth: 1
    },
    buttom: {
        padding: 10,
        margin: 10,
        borderRadius: 4,
        backgroundColor: 'pink'
    }
});

export default SignUp;