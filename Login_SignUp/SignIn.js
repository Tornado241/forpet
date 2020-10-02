import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';

//Redux
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/index';

//firebase
import auth from '@react-native-firebase/auth';

const SignIn = ({ navigation }) => {

    /* constructor(props) {
        super(props);
        this.state = {
            typeEmail: '',
            typePassword: '',
            isValiEmail: true,
            isValiPassword: true
        }
    } */

    const [data, setData] = React.useState({
        typeEmail: '',
        typePassword: '',
        isValeEmail: true,
        isValiPassword: true
    })

    const handleValiEmail = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                isValeEmail: true
            });
        } else {
            setData({
                ...data,
                isValeEmail: false
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

    const onLogin = () => {
        if (data.typeEmail === '' || data.typePassword === '') {
            Alert.alert("Enter Email/Password")
        } else {
            auth().signInWithEmailAndPassword(data.typeEmail, data.typePassword)
                .then(() => {
                    navigation.navigate("Main");
                })
                .catch((error) => {
                    console.log(`Login fail with error: ${error}`);
                })
        }
    }

    const goSignUp = () => {
        navigation.navigate("SignUp");
    }

    const goForgotPassword = () => {
        navigation.navigate("ForgotPassword");
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontSize: 60 }}>Sign In</Text>
            </View>
            <KeyboardAvoidingView behavior='padding' style={styles.downContainer}>
                <TouchableWithoutFeedback style={styles.downContainer} onPress={Keyboard.dismiss}>
                    <View style={styles.downContainer}>
                        <TextInput style={styles.textInput}
                            placeholder="Email"
                            keyboardType='email-address'
                            returnKeyType='next'
                            autoCorrect={false}
                            onChangeText={(email) => setData({ ...data, typeEmail: email })}
                            onEndEditing={(e) => handleValiEmail(e.nativeEvent.text)}
                        />
                        {data.isValeEmail ? null :
                            <Animatable.View animation='fadeInLeft' duration={500}>
                                <Text style={{ color: '#FF0000', fontSize: 14 }}>Enter Email</Text>
                            </Animatable.View>
                        }
                        <TextInput style={styles.textInput}
                            placeholder="Password"
                            secureTextEntry
                            autoCorrect={false}
                            onChangeText={(pass) => setData({ ...data, typePassword: pass })}
                            onEndEditing={(e) => handleValiPassword(e.nativeEvent.text)}
                        />
                        {data.isValiPassword ? null :
                            <Animatable.View animation='fadeInLeft' duration={500}>
                                <Text style={{ color: '#FF0000', fontSize: 14 }}>Enter Password</Text>
                            </Animatable.View>
                        }
                        <View style={{ alignItems: 'flex-end', }}>
                            <TouchableOpacity onPress={goForgotPassword}>
                                <Text>Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', paddingTop: 80 }}>
                            <TouchableOpacity style={styles.button}
                                onPress={onLogin}>
                                <Text style={{ textAlign: 'center', fontSize: 40, }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', paddingTop: 160 }}>
                            <Text>Don't have an account</Text>
                            <TouchableOpacity onPress={goSignUp}>
                                <Text>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    downContainer: {
        flex: 2,
        paddingHorizontal: 16,
        //backgroundColor: '#ff0000'
    },
    textInput: {
        paddingHorizontal: 20,
        margin: 5,
        backgroundColor: '#b3b3cc'
    },
    buttonForgot: {

        paddingVertical: 15
    },
    button: {
        width: 120,
        height: 50,
        backgroundColor: '#b3b3cc',

    }
});

export default SignIn;

/*const mapStateToProps = (state) => {
    return{
        isLoggedIn: state.authReducer ? state.authReducer : false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => {
            dispatch(loginAction(username, password));
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(SignIn);*/