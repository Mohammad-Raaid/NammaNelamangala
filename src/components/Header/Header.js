import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './HeaderStyles'
import { Constants, ScreenNames } from '../../global'
import BackIcon from '../../assets/svgs/BackIcon.svg'
import DeleteSvg from '../../assets/svgs/deleteIcon'
import ShareDetailSvg from '../../assets/svgs/shareDetail'
const Header = ({ headerText = "", externalHeaderContainer, headerDesc = "", rightActions = false }) => {
    const navigation = useNavigation()
    const onpress = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.headerMainConatiner}>
            <TouchableOpacity style={styles.iconView} hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }} onPress={onpress}>
                <BackIcon />
                {
                    rightActions
                    &&
                    <View style={styles.iconContainer}>
                        <View style={styles.shareIcon}>
                            <ShareDetailSvg />
                        </View>
                        <DeleteSvg />
                    </View>
                }
            </TouchableOpacity>
            <View style={[styles.headerContainer, externalHeaderContainer]}>
                <View>
                    <Text style={styles.headerText}>{headerText}</Text>
                    {
                        headerDesc != ""
                        &&
                        <Text style={styles.headerDesc}>{headerDesc}</Text>
                    }
                </View>
                {
                    rightActions
                    &&
                    <View style={styles.status}>
                        <Text style={styles.statusText}>
                            Status:
                        </Text>
                        <View style={styles.pendingView}>
                            <Text style={styles.pending}>
                                Pending
                            </Text>
                        </View>
                    </View>}
            </View>


        </View>
    )
}

export default Header

