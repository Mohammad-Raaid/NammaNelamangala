import { View } from 'react-native'
import React from 'react'
import { styles } from './ComplaintsStyle'
import { ComplaintsHooks } from './ComplaintsHooks'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors } from '../../global'
import { useSelector } from 'react-redux'
const ComplaintsScreen = () => {
    const {
    } = ComplaintsHooks();
    const userData = useSelector(state => state.user.userData)
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace barColor={Colors.SNOW} />
        </View>
    )
}

export default ComplaintsScreen
