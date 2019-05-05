import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View,Dimensions} from 'react-native';
import {RkButton, RkText} from "react-native-ui-kitten";
import {RkTheme} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BackHandler } from 'react-native';

const paddingValue = 8;

export default class Home extends Component<Props> {

    //notifikasi disini

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
        title: 'BRAWIJAYA MOBILE'.toUpperCase(),
    };

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick = () => {
        return true;
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.root}
                    contentContainerStyle={styles.rootContainer}>
                    <RkButton
                        rkType='square shadow'
                        style={{ ...this.itemSize }}
                        onPress={()=>this.props.navigation.navigate('ElectronicIdScreen',{
                        })}>
                        <RkText style={styles.icon} rkType='primary moon menuIcon'>
                            <Icon name="list-alt" size={48} color="#FCB62A" />
                        </RkText>
                        <RkText style={styles.iconText}>Study Plan</RkText>
                    </RkButton>
                    <RkButton
                        rkType='square shadow'
                        style={{ ...this.itemSize }}
                        onPress={()=>this.props.navigation.navigate('StudyProgressScreen',{
                        })}>
                        <RkText style={styles.icon} rkType='primary moon menuIcon'>
                            <Icon name="line-chart" size={48} color="#FCB62A" />
                        </RkText>
                        <RkText style={styles.iconText}>Study Progress</RkText>
                    </RkButton>
                    <RkButton
                        rkType='square shadow'
                        style={{ ...this.itemSize }}
                        onPress={()=>this.props.navigation.navigate('ElectronicIdScreen',{
                        })}>
                        <RkText style={styles.icon} rkType='primary moon menuIcon'>
                            <Icon name="qrcode" size={48} color="#FCB62A" />
                        </RkText>
                        <RkText style={styles.iconText}>e-KTM</RkText>
                    </RkButton>
                    <RkButton
                        rkType='square shadow'
                        style={{ ...this.itemSize }}
                        onPress={()=>this.props.navigation.navigate('DosenListScreen',{
                        })}>
                        <RkText style={styles.icon} rkType='primary moon menuIcon'>
                            <Icon name="users" size={48} color="#FCB62A" />
                        </RkText>
                        <RkText style={styles.iconText}>Dosen</RkText>
                    </RkButton>
                    <RkButton
                        rkType='square shadow'
                        style={{ ...this.itemSize }}
                        onPress={()=>this.props.navigation.navigate('DataPribadiScreen',{
                        })}>
                        <RkText style={styles.icon} rkType='primary moon menuIcon'>
                            <Icon name="user" size={48} color="#FCB62A" />
                        </RkText>
                        <RkText style={styles.iconText}>Profil Mahasiswa</RkText>
                    </RkButton>
                    <RkButton
                        rkType='square shadow'
                        style={{ ...this.itemSize }}
                        onPress={()=>this.props.navigation.navigate('IzinCutiScreen',{
                        })}>
                        <RkText style={styles.icon} rkType='primary moon menuIcon'>
                            <Icon name="table" size={48} color="#FCB62A" />
                        </RkText>
                        <RkText style={styles.iconText}>Absensi</RkText>
                    </RkButton>
                    <RkButton
                        rkType='square shadow'
                        style={{ ...this.itemSize }}
                        onPress={()=>this.props.navigation.navigate('NotifikasiScreen',{
                        })}>
                        <RkText style={styles.icon} rkType='primary moon menuIcon'>
                            <Icon name="bell-o" size={48} color="#FCB62A" />
                        </RkText>
                        <RkText style={styles.iconText}>Notifikasi</RkText>
                    </RkButton>
                    <RkButton
                        rkType='square shadow'
                        style={{ ...this.itemSize }}
                        onPress={()=>this.props.navigation.navigate('BeritaKepegawaianScreen',{
                        })}>
                        <RkText style={styles.icon} rkType='primary moon menuIcon'>
                            <Icon name="newspaper-o" size={48} color="#FCB62A" />
                        </RkText>
                        <RkText style={styles.iconText} >Berita</RkText>
                    </RkButton>
                </ScrollView>
            </View>
        );
    }
}

RkTheme.setType('RkButton', 'square', {
    borderRadius: 3,
    backgroundColor: '#F0F0F0',
    container: {
        flexDirection: 'column',
        margin: 8,
    },
});

const styles = StyleSheet.create({
    iconText: {
        fontWeight:'bold',
        fontSize:18,
        textAlign: 'center'
    },
    root: {
        padding: paddingValue,
    },
    icon: {
        marginBottom: 16,
    },
    rootContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
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
