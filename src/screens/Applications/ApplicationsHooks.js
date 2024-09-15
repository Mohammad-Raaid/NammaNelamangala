import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as UserActions from '../../redux/actions/userAction'
import axiosInstance from '../../global/api-core'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import ApplicationCard from '../../components/ApplicationCard/ApplicationCard'
import { ScreenNames } from '../../global'
const ApplicationsHooks = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const renderApplications = ({ item }) => {
        return <ApplicationCard item={item} />
    }
    const goToCreateApplication = () => {
        navigation.navigate(ScreenNames.CREATE_APPLICATIONS_SCREEN)
    }
    useFocusEffect(
        React.useCallback(() => {
            return () => {
            };
        }, [])
    );
    return {
        renderApplications,
        goToCreateApplication
    }
}

export { ApplicationsHooks }
