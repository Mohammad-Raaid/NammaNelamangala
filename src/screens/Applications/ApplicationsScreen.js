import { View } from 'react-native'
import React from 'react'
import { styles } from './ApplicationsStyle'
import { ApplicationsHooks } from './ApplicationsHooks'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors } from '../../global'
import { useSelector } from 'react-redux'
const ApplicationsScreen = () => {
    const {
    } = ApplicationsHooks();
    const userData = useSelector(state => state.user.userData)
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace barColor={Colors.SNOW} />
        </View>
    )
}

export default ApplicationsScreen
