import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView,FlatList} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

let bulan = [
    {
        value: 'Januari',
    },
    {
        value: 'Februari',
    },
    {
        value: 'Maret',
    },
    {
        value: 'April',
    },
    {
        value: 'Mei',
    },
    {
        value: 'Juni',
    },
    {
        value: 'Juli',
    },
    {
        value: 'Agustus',
    },
    {
        value: 'September',
    },
    {
        value: 'Oktober',
    },
    {
        value: 'November',
    },
    {
        value: 'Desember',
    }
];

let semester = [
    {
        value: '1',
    },
    {
        value: '2',
    },
    {
        value: '3',
    },
    {
        value: '4',
    },
    {
        value: '5',
    },
    {
        value: '6',
    },
    {
        value: '7',
    },
];

let absen = [
    {
        kodeMK: 'CIF61673',
        namaMK:'Augmented Dan Virtual Reality',
        kelas: 'B',
        alpha: '0',
        ijin: '1',
        sakit: '0',
        hadir:'9',
        tatap:'9',
        prosentase:'88'
    },
    {
        kodeMK: 'CIF61675',
        namaMK:'Desain Kreatif Aplikasi & Game',
        kelas: 'A',
        alpha: '0',
        ijin: '0',
        sakit: '0',
        hadir:'9',
        tatap:'9',
        prosentase:'100'
    },
    {
        kodeMK: 'COM60062',
        namaMK:'Etika Profesi',
        kelas: 'G',
        alpha: '0',
        ijin: '0',
        sakit: '0',
        hadir:'9',
        tatap:'9',
        prosentase:'100'
    },
    {
        kodeMK: 'CIF61671',
        namaMK:'Pemrograman Game',
        kelas: 'B',
        alpha: '0',
        ijin: '0',
        sakit: '0',
        hadir:'9',
        tatap:'9',
        prosentase:'100'
    }
]

export default class izinCuti extends Component<Props> {

    //card vide izin cuti sakit

    constructor(props) {
        super(props);
        this.state = {bulan: ''};
    }

    static navigationOptions = {
        title: 'Informasi Izin/Cuti',
    };

    renderItem = ({ item }) => (
        <View style={{padding:8}}>
            <View style={styles.infoContainer}>
                <View style={{flex:1,padding:4}}>
                    <Text style={{fontSize:18,fontWeight: 'bold'}}>{item.namaMK}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.col1} >
                        <Text style={{fontSize:12,fontWeight: 'bold'}}>{item.kodeMK}</Text>
                        <Text style={{fontSize:12,fontWeight: 'bold'}}>Kelas : {item.kelas}</Text>
                    </View>
                    <View style={styles.col2} >
                        <Text style={{fontSize:12}}>Alpha : {item.alpha}</Text>
                        <Text style={{fontSize:12}}>Ijin : {item.ijin}</Text>
                        <Text style={{fontSize:12}}>Sakit : {item.sakit}</Text>
                    </View>
                    <View style={styles.col2} >
                        <Text style={{fontSize:12}}>Hadir : {item.hadir}</Text>
                        <Text style={{fontSize:12}}>Tatap Muka :{item.tatap}</Text>
                        <Text style={{fontSize:12}}>Prosentase :{item.prosentase}</Text>
                    </View>
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
                        <Text style={{fontSize:24}}>Absensi Semester</Text>
                    </View>
                    <View style={{flex:1,alignItems: 'stretch',justifyContent: 'center',padding:2}}>
                        <Dropdown
                            label='Pilih Semester'
                            data={semester}
                        />
                    </View>

                </View>
                <View style={{padding: 8,flexDirection: 'row',flex:0.15}}>
                    <View style={styles.infoContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.col1} >
                                <Text style={{fontSize:18}}>Jumlah Izin</Text>
                                <Text style={{fontSize:18}}>Jumlah Sakit</Text>
                            </View>
                            <View style={styles.col2} >
                                <Text style={{fontWeight: 'bold',fontSize:18}}>: 1</Text>
                                <Text style={{fontWeight: 'bold',fontSize:18}}>: 0</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <FlatList
                    data={absen}
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
        alignItems: 'center',
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
