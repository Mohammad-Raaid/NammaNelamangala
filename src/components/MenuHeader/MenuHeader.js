import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './MenuHeaderStyle';
import MenuSvg from '../../assets/svgs/menu'
import NotificationSvg from '../../assets/svgs/notification'
import LanguageSvg from '../../assets/svgs/language'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../global';
const MenuHeader = () => {
    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    }
    const openLanguageChange = () => {
        navigation.navigate(ScreenNames.CHOOSE_LANGUAGE_SCREEN)
    }
    const openNotification = () => {
        navigation.navigate(ScreenNames.NOTIFICATION_SCREEN)
    }
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={openDrawer}>
                <MenuSvg />
            </TouchableOpacity>
            <Text style={styles.headerText}>
                ನಮ್ಮ ನೆಲಮಂಗಲ
            </Text>
            <View style={styles.svgContainer}>
                <TouchableOpacity onPress={openLanguageChange} style={styles.iconsContainer}>
                    <LanguageSvg />
                </TouchableOpacity>
                <TouchableOpacity onPress={openNotification}>
                    <NotificationSvg />
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default MenuHeader;