import React, {Component} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, Image, Alert} from 'react-native';
import {RkButton, RkText, RkTextInput} from "react-native-ui-kitten";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Config from 'react-native-config';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';


export default class Login extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false
        };
        //console.log(Config.API_URL);
    }

    showAlert(){
        return Alert.alert(
            'Error',
            'Username atau ID salah!',
            [
                {text: 'OK', onPress: () =>
                        this.setState({
                            isLoading: false
                        })},
            ],
            { cancelable: false }
        )
    }

    login(user,pass){
        this.props.navigation.navigate('HomeScreen',{ //masuk ke home screen tinggal simpan token UID,
            animationType: 'slide-up',
            overrideBackPress: true
        });
    }

    registrasiPage(){
        this.props.navigation.navigate('RegistrasiScreen',{
            animationType: 'slide-up',
            overrideBackPress: true
        });
    }

    //checking device ID
    //registrasi dan login sama ato idnya

    render() {
        return (
            <View style={styles.screen}>
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
                <KeyboardAwareScrollView>
                    <View style={styles.container}>
                        <Image style={{width: 128, height: 128}}
                               source={require('../../app/assets/Frame-UB-BT-ala-Jpg.jpg')}
                        />
                        <View style={styles.header}>
                        <Text style={{fontSize: 24}}>BRAWIJAYA</Text>
                        <Text>Mobile</Text>
                        </View>
                        <Text style={{padding: 10, fontSize: 42}}>
                            {this.state.text}
                        </Text>
                        <RkTextInput rkType='rounded' placeholder='Username' onChangeText={(username) => this.setState({username:username})}/>
                        <RkTextInput rkType='rounded' placeholder='Password' onChangeText={(password) => this.setState({password:password})} secureTextEntry />
                        <View style={styles.buttons}>
                            <RkButton onPress={()=>this.login(this.state.username,this.state.password)}>Login</RkButton>
                        </View>
                    </View>
                    <View style={{justifyContent:'flex-end',padding:10,alignItems: 'center',}}>
                        {/*<Text>Belum Terdaftar ?*/}
                            {/*<Text style={{color: 'steelblue'}} onPress={()=>this.registrasiPage()}> Registrasi Disini</Text>*/}
                        {/*</Text>*/}
                    </View>
                </KeyboardAwareScrollView>
                </View>
        );
    }
}

function loginAPI() {
    // return fetch("http://192.168.1.20:8888/lkhpn_api/index.php/rest/generate", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: JSON.stringify({
    //         username : "Admin",
    //         password : "123"
    //     })})
    //     .then((response) => response.json())
    //     .then((response) => {
    //         console.log(response);
    //         return response;
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
}

function getMoviesFromApiAsync() {
    return fetch('http://192.168.1.20:8888/lkhpn_api/index.php/pegawai/2088')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
    },
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    },
    header: {
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 42,
        padding :8
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20
    },
    buttons: {
        flexDirection: 'row',
        paddingTop: 10,
        marginHorizontal: 24,
        justifyContent: 'space-around',
    },
    content:{
        justifyContent: 'center',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    navBar: {
        backgroundColor: 'transparent',
    },
});
