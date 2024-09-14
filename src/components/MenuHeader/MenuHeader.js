import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './MenuHeaderStyle';
import MenuSvg from '../../assets/svgs/menu'
import NotificationSvg from '../../assets/svgs/notification'
import LanguageSvg from '../../assets/svgs/language'
const MenuHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <MenuSvg />
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>
                    ನಮ್ಮ ನೆಲಮಂಗಲ
                </Text>
            </View>
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