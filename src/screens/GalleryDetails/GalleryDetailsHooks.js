import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as UserActions from '../../redux/actions/userAction'
import axiosInstance from '../../global/api-core'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
import { styles } from './GalleryDetailsStyle'
import { Image, View } from 'react-native'
const GalleryDetailsHooks = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [index, setIndex] = React.useState(0)

    const renderBanner = () => {
        return <Image source={require('../../assets/images/homeBanner.png')} style={styles.image} />
    }
    const renderIndicators = (item, i) => {
        return (
            <View key={JSON.stringify(item)} style={[styles.indicator, i == index ? styles.currentIndicator : {}]} />
        )
    }

    const goBack = () => {
        navigation.goBack();
    }

    useFocusEffect(
        React.useCallback(() => {
            return () => {
            };
        }, [])
    );
    return {
        setIndex,
        renderBanner,
        renderIndicators,
        goBack
    }
}

export { GalleryDetailsHooks }
