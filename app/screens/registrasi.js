import React, {Component} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, Image} from 'react-native';
import {RkButton, RkText, RkTextInput} from "react-native-ui-kitten";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default class Registrasi extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    login(){
        this.props.navigation.navigate('LoginScreen',{
            animationType: 'slide-up',
            overrideBackPress: true
        });
    }

    loginPage(){
        this.props.navigation.navigate('LoginScreen',{
            animationType: 'slide-up',
            overrideBackPress: true
        });
    }

    static navigationOptions = {
        title: 'Registrasi'.toUpperCase(),
    };

    //checking device ID
    //registrasi dan login sama ato idnya

    render() {
        return (
            <View style={styles.screen}>
                <KeyboardAwareScrollView>
                    <View style={styles.container}>

                        {/*<Image style={{width: 128, height: 128}}*/}
                               {/*source={require('../../app/assets/logo-BIN.png')}*/}
                        {/*/>*/}

                        <View style={styles.header}>
                            <Text style={{fontSize: 24}}>SIMPEG</Text>
                            <Text>Mobile</Text>
                        </View>

                        <RkTextInput rkType='rounded' placeholder='Masukan NIP Anda' />

                        <View style={styles.buttons}>
                            <RkButton onPress={()=>this.login()}>Registrasi</RkButton>
                        </View>
                    </View>
                    <View style={{justifyContent:'flex-end',padding:30,alignItems: 'center',}}>
                        <Text>Sudah Terdaftar ?
                            <Text style={{color: 'steelblue'}} onPress={()=>this.loginPage()}> Login Disini</Text>
                        </Text>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    },
    header: {
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 42,
        padding :16
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
