import { View } from 'react-native'
import React from 'react'
import { styles } from './ContactUsStyle'
import { ContactUsHooks } from './ContactUsHooks'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors } from '../../global'
import { useSelector } from 'react-redux'
const ContactUsScreen = () => {
    const {
    } = ContactUsHooks();
    const userData = useSelector(state => state.user.userData)
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace barColor={Colors.SNOW} />
        </View>
    )
}

export default ContactUsScreen
