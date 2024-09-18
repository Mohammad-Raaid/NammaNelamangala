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
import { ScreenNames } from '../../global'
const HomeHooks = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const userData = useSelector(state => state.user.userData);
    const [index, setIndex] = React.useState(0)
    const [actions, setActions] = React.useState([
        {
            name: "Suggestions",
            icon: <SuggestionsIcon />,
        },
        {
            name: "Join as community",
            icon: <JoinascommunityIcon />,
            screen: ScreenNames.JOIN_AS_COMMUNITY_SCREEN
        },
        {
            name: "Join as member",
            icon: <JoinasmemberIcon />,
            screen: ScreenNames.JOIN_AS_MEMBER_SCREEN
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
    const navigate = (item) => {
        if (item?.screen) {
            navigation.navigate(item.screen)
        }
    }
    return {
        renderBanner,
        setIndex,
        renderIndicators,
        actions,
        renderNewsAndEvents,
        navigate
    }
}

export { HomeHooks }
