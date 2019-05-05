import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Barcode from 'react-native-barcode-builder';

export default class dataPribadi extends Component<Props> {

    //dikasi list data pegawai
    //list per tab/ item

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    static navigationOptions = {
        title: 'Data Pribadi',
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.infoContainer}>
                        <Image style={{width: 128, height: 128}}
                            source={require('../../app/assets/jasper-500x500.jpg')}
                        />
                        <Text style={{fontWeight: 'bold', fontSize:18,paddingBottom: 4}}>NIP : 191255008796</Text>
                        <Text style={{fontWeight: 'bold', fontSize:18}}>Nama : Joni Iskandar</Text>
                        <Text style={{fontWeight: 'bold', fontSize:18}}>Tanggal Lahir : 19/02/1987</Text>
                        <Text style={{fontWeight: 'bold', fontSize:18}}>FIELD : VALUE</Text>
                        <Text style={{fontWeight: 'bold', fontSize:18}}>FIELD : VALUE</Text>
                        <Text style={{fontWeight: 'bold', fontSize:18}}>FIELD : VALUE</Text>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20
    },
});
