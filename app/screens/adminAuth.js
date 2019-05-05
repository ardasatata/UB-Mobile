import React, {Component} from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import {RkButton, RkTextInput} from "react-native-ui-kitten";
import QRCodeScanner from "react-native-qrcode-scanner";

export default class adminAuth extends Component<Props> {

    //checking device id

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    login(){
        this.props.navigation.navigate('HomeScreen',{
        });
    }

    onSuccess(e) {
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error occured', err));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                   Scan QR-Code Di Browser Anda
                </Text>
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text}
                </Text>
                <QRCodeScanner
                    onRead={this.state.text}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20
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
