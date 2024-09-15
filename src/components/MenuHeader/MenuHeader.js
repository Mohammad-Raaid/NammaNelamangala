import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './MenuHeaderStyle';
import MenuSvg from '../../assets/svgs/menu'
import NotificationSvg from '../../assets/svgs/notification'
import LanguageSvg from '../../assets/svgs/language'
import { DrawerActions, useNavigation } from '@react-navigation/native';
const MenuHeader = () => {
    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
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
                <View style={styles.iconsContainer}>
                    <LanguageSvg />
                </View>
                <NotificationSvg />
            </View>
        </View>

    )
}
export default MenuHeader;