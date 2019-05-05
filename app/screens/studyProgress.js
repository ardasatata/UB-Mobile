import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView,FlatList} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import {LineChart} from 'react-native-chart-kit'

import { Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width

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
        semester: '1',
        sks:'18',
        ips: '3.00',
        status: 'Normal',
    },
    {
        semester: '2',
        sks:'18',
        ips: '2.90',
        status: 'Normal',
    },
    {
        semester: '3',
        sks:'18',
        ips: '3.25',
        status: 'Normal',
    },
    {
        semester: '4',
        sks:'24',
        ips: '3.50',
        status: 'Normal',
    },
    {
        semester: '5',
        sks:'24',
        ips: '3.60',
        status: 'Normal',
    },
    {
        semester: '6',
        sks:'24',
        ips: '3.70',
        status: 'Normal',
    },
    {
        semester: '7',
        sks:'18',
        ips: '3.90',
        status: 'Normal',
    }
]

const data = {
    labels: ['1', '2', '3', '4', '5', '6','7'],
    datasets: [{
        data: [ 3.00, 2.90, 3.25, 3.50, 3.60, 3.70, 3.90 ]
    }]
}

const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 65, 110, ${opacity})`
}

export default class izinCuti extends Component<Props> {

    //card vide izin cuti sakit

    constructor(props) {
        super(props);
        this.state = {bulan: ''};
    }

    static navigationOptions = {
        title: 'Informasi Studi',
    };

    renderItem = ({ item }) => (
        <View style={{padding:8}}>
            <View style={styles.infoContainer}>
                <View style={{flex:1,padding:4}}>
                    <Text style={{fontSize:18,fontWeight: 'bold'}}>Semester {item.semester}</Text>
                    <Text style={{fontSize:12}}>Status : {item.status}</Text>
                </View>
                <View style={{flexDirection: 'row',padding:4}}>
                        <Text style={{fontSize:12,fontWeight: 'bold'}}>SKS : {item.sks} </Text>
                        <Text style={{fontSize:12,fontWeight: 'bold'}}>IPS : {item.ips} </Text>
                </View>
            </View>
        </View>
    );

    extractItemKey = (item) => `${item.id}`;

    render() {
        return (
            <View style={styles.container}>
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                />
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
