import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './HeaderStyles'
import { Constants, ScreenNames } from '../../global'
import BackIcon from '../../assets/svgs/BackIcon.svg'
const Header = ({ backIcon = false, headerText = "", externalHeaderContainer, profileDataFlag, rightButton = false, profileNavigationFlag = false, ScreenName = '' }) => {
    const navigation = useNavigation()
    const onpress = () => {
        if (profileNavigationFlag) {
            ScreenName != '' && navigation.navigate(ScreenName)
        } else {
            navigation.goBack()
        }
    }
    const goToProfile = () => {
        navigation.navigate(ScreenNames.PROFILE_SCREEN)
    }
    return (
        <View style={styles.headerMainConatiner}>
            <TouchableOpacity hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }} onPress={onpress}>
                <BackIcon />
            </TouchableOpacity>
            <View style={[styles.headerContainer, externalHeaderContainer]}>
                <Text style={styles.headerText}>{headerText}</Text>
            </View>
        </View>
    )
}

export default Header

