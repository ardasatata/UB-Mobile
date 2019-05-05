import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView,FlatList} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

let notif = [
    {
        tanggal: '19 Februari 2018',
        jam: '12.31',
        desc:'Praproposal anda telah disetujui harap mengambil di loket akademik',
    },
    {
        tanggal: '2 Februari 2018',
        jam: '14.30',
        desc:'Proposal anda telah disetujui',
    },
    {
        tanggal: '31 Januari 2018',
        jam: '12.31',
        desc:'Praproposal anda telah disetujui harap mengambil di loket akademik',
    },
    {
        tanggal: '28 Januari 2018',
        jam: '10.00',
        desc:'Kelas Induksi Riset B Dibatalkan, harap ketua kelas mencari jadwal pengganti',
    },
    {
        tanggal: '12 Januari 2018',
        jam: '08.00',
        desc:'Jadwal UAS dapat dilihat pada bagian jadwal',
    }
]

export default class notifikasi extends Component<Props> {

    //card vide izin cuti sakit

    constructor(props) {
        super(props);
        this.state = {bulan: ''};
    }

    static navigationOptions = {
        title: 'Notifikasi',
    };

    renderItem = ({ item }) => (
        <View style={{padding:8}}>
            <View style={styles.infoContainer}>
                <View style={{flex:1,padding:4,flexDirection: 'row'}}>
                    <Text style={{fontSize:18,fontWeight: ''}}>{item.tanggal} </Text>
                    <Text style={{fontSize:18,fontWeight: ''}}>{item.jam}</Text>
                </View>
                <View style={{flex:1,padding:4}}>
                    <Text style={{fontSize:24,fontWeight: 'bold',        alignItems: 'center',}}>{item.desc}</Text>
                </View>
            </View>
        </View>
    );

    extractItemKey = (item) => `${item.id}`;

    render() {
        return (
            <View style={styles.container}>
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
