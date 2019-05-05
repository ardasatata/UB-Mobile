import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View,Dimensions, TouchableOpacity, Image} from 'react-native';
import { List, ListItem } from 'react-native-elements'

const paddingValue = 8;

const list = [
    {
        name: 'Informasi Absensi',
        nav: 'AbsensiScreen'
    },
    {
        name: 'Informasi Tunjangan Kerja',
        nav: 'TunjanganKerjaScreen'
    },
    {
        name: 'Informasi Kenaikan Pangkat',
        nav: 'KenaikanPangkatScreen'
    },
    {
        name: 'Informasi Mutasi',
        nav: 'MutasiScreen'
    },
]

export default class dataPribadiList extends Component<Props> {

    constructor(props) {
        super(props);
        const screenWidth = Dimensions.get('window').width;
        this.itemSize = {
            width: (screenWidth - (paddingValue * 6)) / 2,
            height: (screenWidth - (paddingValue * 6)) / 2,
        };
        this.state = {text: ''};
    }
    static navigationOptions = {
        title: 'Info Kepegawaian'.toUpperCase(),
    };


    render() {
        return (
            <View style={styles.container}>
                <List containerStyle={{marginBottom: 20}}>
                    {
                        list.map((l) => (
                            <ListItem
                                onPress={()=>this.props.navigation.navigate(l.nav,{
                                })}
                                style={{alignItems: 'center'}}
                                key={l.name}
                                title={<Text style={{fontSize:20,padding: 12}}>{l.name}</Text>}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});
