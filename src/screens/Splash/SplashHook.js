import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../global/api-core';
import * as UserActions from '../../redux/actions/userAction'
//import messaging from '@react-native-firebase/messaging';

const SplashHook = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const NammaNelamangalaOpacity = React.useRef(new Animated.Value(1)).current;

    // dispatch navigation
    const resetStackAndGoToSignIn = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.SIGNIN_SCREEN, }],
    });
    const resetStackAndGoToBottom = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.BOTTOM_TABS, }],
    });

    // Api
    const checkUserExistOrNot = async () => {
        // const messagingToken = await messaging().getToken();
        let token = await AsyncStorage.getItem('token')
        if (token) {
            const userData = await AsyncStorage.getItem('userData')
            axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + token;
            console.log(JSON.parse(userData).userId);

            const response = await axiosInstance.get(`users/${JSON.parse(userData).userId}`);
            await AsyncStorage.setItem('userData', JSON.stringify(response.data));
            dispatch(UserActions.setUserData(response.data))
            navigation.dispatch(resetStackAndGoToBottom);
        } else {
            navigation.dispatch(resetStackAndGoToSignIn);
        }
    }

    const onLoad = async () => {
        Animated.timing(NammaNelamangalaOpacity, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
        }).start(async ({ finished }) => {
            if (finished) {
                checkUserExistOrNot()
            }
        })
    }
    React.useEffect(() => {
        onLoad()
    }, [])
    return {
        onLoad
    }
}

export { SplashHook }
