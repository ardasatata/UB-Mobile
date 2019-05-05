import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View,Dimensions, TouchableOpacity, Image} from 'react-native';
import {RkButton, RkCard, RkStyleSheet, RkText} from "react-native-ui-kitten";

const paddingValue = 8;

export default class beritaKepegawaianList extends Component<Props> {

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
        title: 'Berita'.toUpperCase(),
    };

    render() {
        return (
                <ScrollView>
                    <TouchableOpacity
                        delayPressIn={70}
                        activeOpacity={0.8}
                        onPress={()=>this.props.navigation.navigate('DetailBeritaScreen',{})}
                        >
                        <RkCard rkType='blog' style={styles.card}>
                            <Image rkCardImg source={require('../../app/assets/1200-mahasiswa-baru-uksw-disebar-ke-empat-kegiatan-pengabdian_20150828_173336.jpg')} />
                            <View rkCardHeader style={{}}>
                                <RkText style={{fontWeight: 'bold'}} rkType='header4'>Warga Kemayoran Guyub Lakukan Kerja Bakti</RkText>
                            </View>
                            <View rkCardContent>
                                <View>
                                    <RkText rkType='primary3 mediumLine' numberOfLines={2}>Mahasiswa melakukan kerja bakti
                                        dalam rangka dies natalis UB, dilaksanakan secara bergotong-royong melibatkan 100 pers....</RkText>
                                </View>
                            </View>
                            <View rkCardFooter>
                                <View style={styles.userInfo}>
                                    <RkText rkType='header6'>23 Oktober 2018</RkText>
                                </View>
                            </View>
                        </RkCard>
                    </TouchableOpacity>
                    <TouchableOpacity
                        delayPressIn={70}
                        activeOpacity={0.8}
                        //onPress={() => this.onItemPressed(item)}
                    >
                        <RkCard rkType='blog' style={styles.card}>
                            <Image rkCardImg source={require('../../app/assets/beritabmtitqan-b-5.jpg')} />
                            <View rkCardHeader style={{}}>
                                <RkText style={{fontWeight: 'bold'}} rkType='header4'>Rapat Kerja Tahun Ini Ricuh</RkText>
                            </View>
                            <View rkCardContent>
                                <View>
                                    <RkText rkType='primary3 mediumLine' numberOfLines={2}>Dalam organisasi pasti tidak akan terlepas dari istilah manajemen.
                                        Salah satu manajemen dalam  organisasi itu adalah manajemen perencanaan atau strategi.
                                    </RkText>
                                </View>
                            </View>
                            <View rkCardFooter>
                                <View style={styles.userInfo}>
                                    <RkText rkType='header6'>20 Oktober 2018</RkText>
                                </View>
                            </View>
                        </RkCard>
                    </TouchableOpacity>
                </ScrollView>
        );
    }
}

const styles = RkStyleSheet.create(theme => ({
    container: {
        backgroundColor: theme.colors.screen.scroll,
        paddingVertical: 8,
        paddingHorizontal: 14,
    },
    card: {
        marginVertical: 8,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 17,
    },
}));
