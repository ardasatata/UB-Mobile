import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View,Dimensions, TouchableOpacity, Image} from 'react-native';
import {RkButton, RkCard, RkStyleSheet, RkText} from "react-native-ui-kitten";

const paddingValue = 8;

export default class mutasi extends Component<Props> {

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
        title: 'Berita Kepegawaian'.toUpperCase(),
    };

    render() {
        return (
            <ScrollView style={styles.root}>
                <RkCard rkType='article'>
                    <Image rkCardImg source={require('../../assets/1200-mahasiswa-baru-uksw-disebar-ke-empat-kegiatan-pengabdian_20150828_173336.jpg')} />
                    <View rkCardHeader>
                        <View>
                            <RkText style={styles.title} rkType='header4'>Warga Kemayoran Guyub Lakukan Kerja Bakti</RkText>
                            <RkText rkType='header4'>23 Oktober 2018</RkText>
                        </View>
                    </View>
                    <View rkCardContent>
                        <View>
                            <RkText rkType='primary3 bigLine'>Kerja bakti di lingkungan RW 03 Kelurahan Utan Panjang, Kemayoran, Jakarta Pusat, dilaksanakan secara bergotong-royong melibatkan 100 personil.
                                Wakil Camat Kemayoran, Asih Sumaretmi saat memimpin kegiatan tersebut mengatakan, kerjabakti massal di RW 03, Utanpanjang ini melibatkan RT/RW, LMK, FKDM, Karang taruna, tokoh masyarakat, Sosial, Pemadam Kebakaran (Damkar) Jakpus dan warga dari 15 RT.
                                “Kerja bakti massal kali ini, kita melibatkan petugas damkar dengan satu unit kendaraan dan 2 truk kebersihan, 1 ambulan dari puskesmas dibagi di 6 titik,” ucap Asih.
                            </RkText>
                        </View>
                    </View>
                    <View rkCardFooter>
                    </View>
                </RkCard>
            </ScrollView>
        );
    }
}

const styles = RkStyleSheet.create(theme => ({
    root: {
        backgroundColor: '#FFFFFF',
    },
    title: {
        marginBottom: 5,
        fontWeight: 'bold'
    },
}));
