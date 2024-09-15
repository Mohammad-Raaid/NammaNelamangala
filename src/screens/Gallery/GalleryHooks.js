import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as UserActions from '../../redux/actions/userAction'
import axiosInstance from '../../global/api-core'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
const GalleryHooks = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const userData = useSelector(state => state.user.userData);

    const renderGallery = ({ item }) => {
        return <GalleryCard item={item} />
    }
    useFocusEffect(
        React.useCallback(() => {
            return () => {
            };
        }, [])
    );
    return {
        renderGallery
    }
}

export { GalleryHooks }
