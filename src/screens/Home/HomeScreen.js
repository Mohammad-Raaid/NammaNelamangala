import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './HomeStyle'
import { HomeHooks } from './HomeHooks'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors } from '../../global'
import { useSelector } from 'react-redux'
import MenuHeader from '../../components/MenuHeader/MenuHeader'

const HomeScreen = () => {
    const {
    } = HomeHooks();
    const userData = useSelector(state => state.user.userData)
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace barColor={Colors.WHITE} />
            <MenuHeader />
        </View>
    )
}

export default HomeScreen
