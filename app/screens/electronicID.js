import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Barcode from 'react-native-barcode-builder';

import QRCode from 'react-native-qrcode';

export default class electronicID extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    static navigationOptions = {
        title: 'ID Card',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.infoContainer}>
                        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems:'center',padding:4}}>
                            <Image style={{width: 36, height: 36}}
                                   source={require('../../app/assets/ubpng.png')}
                            />
                            <View style={{padding:4}}>
                                <Text style={{fontWeight: 'bold', fontSize:12,backgroundColor:'F3F3F3',fontFamily: 'Cochin'}}>UNIVERSITAS </Text>
                                <Text style={{fontWeight: 'bold', fontSize:24,backgroundColor:'F3F3F3',fontFamily: 'Cochin'}}>BRAWIJAYA</Text>
                            </View>
                        </View>
                        <Image style={{width: 128, height: 128}}
                            source={require('../../app/assets/jasper-500x500.jpg')}
                        />
                        <Text style={{fontWeight: 'bold', fontSize:24}}>Joni Iskandar</Text>
                        <Text style={{fontWeight: '', fontSize:18}}>Jakarta, 12 Mei 1998</Text>
                        <Text style={{fontWeight: '', fontSize:18}}>155150200111201</Text>
                        <Text style={{fontWeight: '', fontSize:18}}>Teknik Informatika</Text>
                    </View>
                    <View style={styles.barcode}>
                        <Text style={{padding:12}}>Barcode</Text>
                        <Barcode value="155150200111216" format="CODE128" background='F3F3F3'/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    barcode: {
        flex: 0.5,
        padding: 5,
        paddingBottom: 15,
        justifyContent: 'flex-end',
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
        borderRadius: 10
    },
    container: {
        flex: 1,
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
    navBar: {
        backgroundColor: 'transparent',
    },
});
