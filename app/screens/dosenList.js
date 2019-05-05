import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView,FlatList} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {RkTextInput} from "react-native-ui-kitten";

let notif = [
    {
        namaDosen: 'Joni Black',
        NIP: '11221354984894',
        ruang:'F 4.1',
        Status:'Hadir',
    },
    {
        namaDosen: 'Kasim M. Top',
        NIP: '12312341241232',
        ruang:'F 5.2',
        Status:'Hadir',
    },
    {
        namaDosen: 'Coki Iskandar',
        NIP: '15221323123334',
        ruang:'F 5.3',
        Status:'Tidak Hadir',
    },
    {
        namaDosen: 'Sony Kazawa',
        NIP: '13412435123122',
        ruang:'A 1.3.1',
        Status:'Hadir',
    },
    {
        namaDosen: 'Tony Blank',
        NIP: '14123124124123',
        ruang:'C 1.6',
        Status:'Hadir',
    }
]

export default class dosenList extends Component<Props> {

    //card vide izin cuti sakit

    constructor(props) {
        super(props);
        this.state = {bulan: ''};
    }

    static navigationOptions = {
        title: 'Informasi Dosen',
    };

    renderItem = ({ item }) => (
        <View style={{padding:8}}>
            <View style={styles.infoContainer}>
                <View style={{flex:2,padding:4,flexDirection: 'column'}}>
                    <Text style={{fontSize:18,fontWeight: 'bold'}}>{item.namaDosen} </Text>
                    <Text style={{fontSize:18,fontWeight: ''}}>{item.NIP}</Text>
                </View>
                <View style={{flex:1,padding:4,justifyContent: 'flex-end',}}>
                    <Text style={{fontSize:18,fontWeight: ''}}>{item.ruang}</Text>
                    <Text style={{fontSize:18,fontWeight: ''}}>{item.Status}</Text>
                </View>
            </View>
        </View>
    );

    extractItemKey = (item) => `${item.id}`;

    render() {
        return (
            <View style={styles.container}>
                <View style={{padding: 8,flexDirection: 'row',flex:0.15}}>
                    <View style={{flex:0.5,alignItems: 'center',justifyContent: 'center'}}>
                        <Text style={{fontSize:18}}>Cari Dosen</Text>
                    </View>
                    <View style={{flex:1,alignItems: 'stretch',justifyContent: 'center',padding:2}}>
                        <RkTextInput rkType='' placeholder='masukan nama dosen'/>
                    </View>

                </View>
                <FlatList
                    data={notif}
                    renderItem={this.renderItem}
                    style={{flex:1}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        flex: 3,
        justifyContent: 'space-around',
        padding: 8,
        flexDirection: 'row',
        backgroundColor: '#ffe9b9'
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
    },
    col1:{
        flex:0.6,
        margin: 2,
        textAlign: 'left'
    },
    col2:{
        flex:1,
        margin: 2,
        textAlign: 'left'
    }
});
