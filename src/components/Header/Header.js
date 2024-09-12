import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './HeaderStyles'
import { Constants, ScreenNames } from '../../global'
const Header = ({ backIcon = false, headerText = "", externalHeaderContainer, profileDataFlag, rightButton = false, profileNavigationFlag = false, ScreenName = '' }) => {
    const navigation = useNavigation()
    const onpress = () => {
        if (profileNavigationFlag) {
            ScreenName != '' && navigation.navigate(ScreenName)
        } else {
            if (backIcon) {
                navigation.goBack()
            }
        }
    }
    const goToProfile = () => {
        navigation.navigate(ScreenNames.PROFILE_SCREEN)
    }
    return (
        <View style={styles.headerMainConatiner}>
            {
                backIcon &&
                <TouchableOpacity activeOpacity={0.3} hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }} onPress={onpress}>
                </TouchableOpacity>
            }
            {
                headerText &&
                <View style={[styles.headerContainer, externalHeaderContainer]}>
                    <Text style={styles.headerText}>{headerText}</Text>
                </View>
            }

            {
                rightButton &&
                <View style={{ position: 'absolute', top: Constants.CHANGE_BY_MOBILE_DPI(20), right: Constants.CHANGE_BY_MOBILE_DPI(10) }}>
                    <TouchableOpacity onPress={goToProfile} style={[styles.headerContainer, externalHeaderContainer]}>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default Header

