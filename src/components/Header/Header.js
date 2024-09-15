import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './HeaderStyles'
import { Constants, ScreenNames } from '../../global'
import BackIcon from '../../assets/svgs/BackIcon.svg'
const Header = ({ headerText = "", externalHeaderContainer, headerDesc = "" }) => {
    const navigation = useNavigation()
    const onpress = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.headerMainConatiner}>
            <TouchableOpacity hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }} onPress={onpress}>
                <BackIcon />
            </TouchableOpacity>
            <View style={[styles.headerContainer, externalHeaderContainer]}>
                <Text style={styles.headerText}>{headerText}</Text>
                {
                    headerDesc != ""
                    &&
                    <Text style={styles.headerDesc}>{headerDesc}</Text>
                }
            </View>
        </View>
    )
}

export default Header

