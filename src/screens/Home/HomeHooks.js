import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as UserActions from '../../redux/actions/userAction'
import axiosInstance from '../../global/api-core'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Banner from '../../components/Banner/Banner'
import { View } from 'react-native'
import { styles } from './HomeStyle'
import SuggestionsIcon from '../../assets/svgs/SuggestionsIcon.svg'
import JoinascommunityIcon from '../../assets/svgs/JoinascommunityIcon.svg'
import JoinasmemberIcon from '../../assets/svgs/JoinasmemberIcon.svg'
import NewsAndEventsCard from '../../components/NewsAndEventsCard/NewsAndEventsCard'
const HomeHooks = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const userData = useSelector(state => state.user.userData);
    const [index, setIndex] = React.useState(0)
    const [actions, setActions] = React.useState([
        {
            name: "Suggestions",
            icon: <SuggestionsIcon />
        },
        {
            name: "Join as community",
            icon: <JoinascommunityIcon />
        },
        {
            name: "Join as member",
            icon: <JoinasmemberIcon />
        },
    ])
    const renderBanner = () => {
        return <Banner />
    }
    const renderIndicators = (item, i) => {
        return (
            <View key={JSON.stringify(item)} style={[styles.indicator, i == index ? styles.currentIndicator : {}]} />
        )
    }
    const renderNewsAndEvents = (item) => {
        return <NewsAndEventsCard key={JSON.stringify(item)} item={item} />
    }
    useFocusEffect(
        React.useCallback(() => {
            return () => {
            };
        }, [])
    );
    return {
        renderBanner,
        setIndex,
        renderIndicators,
        actions,
        renderNewsAndEvents
    }
}

export { HomeHooks }
