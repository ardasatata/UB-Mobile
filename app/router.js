import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import {
    StackNavigator,
    createStackNavigator,
    createBottomTabNavigator,
    withNavigation,
    TabNavigator
} from 'react-navigation';

let screen = Dimensions.get('window');

import Registrasi from './screens/registrasi'

import Login from './screens/login'
import Home from './screens/home'
import adminAuth from './screens/adminAuth'
import electronicID from './screens/electronicID'
import beritaKepegawaianList from './screens/beritaKepegawaianList'
import detailBerita from './screens/detailBerita'

import izinCuti from './screens/izinCuti'

import dataPribadiList from './screens/dataPribadiList'

import infoKepegawaianList from './screens/infoKepegawaianList'
import absensi from './screens/infoKepegawaian/absensi'
import kenaikanPangkat from './screens/infoKepegawaian/kenaikanPangkat'
import mutasi from './screens/infoKepegawaian/mutasi'
import tunjanganKerja from './screens/infoKepegawaian/tunjanganKerja'

import notifikasi from './screens/notifikasi'
import dosen from './screens/dosenList'
import studyProgress from './screens/studyProgress'

// export const RegistrasiScreen = createStackNavigator({
//     LoginUI: {
//         screen: Registrasi,
//         navigationOptions: ({navigation}) => ({
//             header: {
//                 visible: false,
//             },
//             gesturesEnabled: false,
//         }),
//     },
// });

export const LoginScreen = createStackNavigator({
    LoginUI: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const HomeScreen = createStackNavigator({
    HomeUI: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const AdminAuthScreen = createStackNavigator({
    AdminAuthUI: {
        screen: adminAuth,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const ElectronicIdScreen = createStackNavigator({
    AdminAuthUI: {
        screen: electronicID,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const BeritaKepegawaianScreen = createStackNavigator({
    AdminAuthUI: {
        screen: beritaKepegawaianList,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const DetailBeritaScreen = createStackNavigator({
    AdminAuthUI: {
        screen: detailBerita,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const DataPribadiScreen = createStackNavigator({
    AdminAuthUI: {
        screen: dataPribadiList,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const IzinCutiScreen = createStackNavigator({
    AdminAuthUI: {
        screen: izinCuti,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const InfoKepegawaianListScreen = createStackNavigator({
    AdminAuthUI: {
        screen: infoKepegawaianList,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const TunjanganKerjaScreen = createStackNavigator({
    LoginUI: {
        screen: tunjanganKerja,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const MutasiScreen = createStackNavigator({
    LoginUI: {
        screen: mutasi,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const KenaikanPangkatScreen = createStackNavigator({
    LoginUI: {
        screen: kenaikanPangkat,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const AbsensiScreen = createStackNavigator({
    LoginUI: {
        screen: absensi,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const NotifikasiScreen = createStackNavigator({
    LoginUI: {
        screen: notifikasi,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const DosenListScreen = createStackNavigator({
    LoginUI: {
        screen: dosen,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const StudyProgressScreen = createStackNavigator({
    LoginUI: {
        screen: studyProgress,
        navigationOptions: ({navigation}) => ({
            header: {
                visible: false,
            },
            gesturesEnabled: false,
        }),
    },
});

export const createRootNavigator = () => {
    return createStackNavigator(
        {
            // RegistrasiScreen: {
            //     screen: Registrasi,
            //     navigationOptions: {
            //         tabBarVisible: false,
            //         gesturesEnabled: false,
            //         headerLeft: null
            //
            //     }
            // },
            LoginScreen: {
                screen: Login,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                    headerLeft: null
                }
            },
            HomeScreen: {
                screen: Home,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                    headerLeft: null
                }
            },
            AdminAuthScreen: {
                screen: adminAuth,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            ElectronicIdScreen: {
                screen: electronicID,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            BeritaKepegawaianScreen: {
                screen: beritaKepegawaianList,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            DetailBeritaScreen: {
                screen: detailBerita,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            DataPribadiScreen: {
                screen: dataPribadiList,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            IzinCutiScreen: {
                screen: izinCuti,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            InfoKepegawaianListScreen: {
                screen: infoKepegawaianList,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            AbsensiScreen: {
                screen: absensi,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            KenaikanPangkatScreen: {
                screen: kenaikanPangkat,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            MutasiScreen: {
                screen: mutasi,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            TunjanganKerjaScreen: {
                screen: tunjanganKerja,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            NotifikasiScreen: {
                screen: notifikasi,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            DosenListScreen: {
                screen: dosen,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
                }
            },
            StudyProgressScreen: {
                screen: studyProgress,
                navigationOptions: {
                    tabBarVisible: false,
                    gesturesEnabled: false,
        }
    },
        },

    );
};
