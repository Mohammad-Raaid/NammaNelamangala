import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as UserActions from '../../redux/actions/userAction'
import axiosInstance from '../../global/api-core'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
const HomeHooks = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const userData = useSelector(state => state.user.userData);

    useFocusEffect(
        React.useCallback(() => {
            return () => {
            };
        }, [])
    );
    return {
    }
}

export { HomeHooks }
