import { View } from 'react-native'
import React from 'react'
import { styles } from './GalleryStyle'
import { GalleryHooks } from './GalleryHooks'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors } from '../../global'
import { useSelector } from 'react-redux'
const GalleryScreen = () => {
    const {
    } = GalleryHooks();
    const userData = useSelector(state => state.user.userData)
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace barColor={Colors.SNOW} />
        </View>
    )
}

export default GalleryScreen
