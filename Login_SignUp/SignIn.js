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


export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontSize: 60 }}>Sign In</Text>
            </View>
            <KeyboardAvoidingView behavior='padding' style={styles.downContainer}>
                <TouchableWithoutFeedback style={styles.downContainer} onPress={Keyboard.dismiss}>
                    <View style={styles.downContainer}>
                        <TextInput style={styles.textInput}
                            placeholder="Username"
                            keyboardType='email-address'
                            returnKeyType='next'
                            autoCorrect={false}
                           // value={username}
                            onChangeText={(user) => this.setState({ username: user})}
                        />
                        <TextInput style={styles.textInput}
                            placeholder="Password"
                            secureTextEntry
                            autoCorrect={false}
                           // value={password}
                            onChangeText={(pass) => this.setState({ password: pass})}
                        />
                        <View style={{ alignItems: 'flex-end', }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.buttonForgot}>
                                <Text>Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', paddingTop: 80 }}>
                            <TouchableOpacity style={styles.button}
                                onPress={() => {
                                    if(this.state.username == '' || this.state.password == ''){
                                        Alert.alert("Enter your username or password !");
                                    }
                                    this.props.onLogin(this.props.username, this.props.password)
                                }}>
                                <Text style={{ textAlign: 'center', fontSize: 40, }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', paddingTop: 160 }}>
                            <Text>Don't have an account</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
    }
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
        backgroundColor: '#ff0000'
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

