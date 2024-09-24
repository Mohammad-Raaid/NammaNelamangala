import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './HeaderStyles'
import BackIcon from '../../assets/svgs/BackIcon.svg'
import DeleteSvg from '../../assets/svgs/deleteIcon'
import ShareDetailSvg from '../../assets/svgs/shareDetail'
import ConformationModal from '../ConformationModal/ConformationModal'
import i18n from '../../i18n'
const Header = ({ headerText = "", externalHeaderContainer, headerDesc = "", rightActions = false, desc, idLabel, id }) => {
    const [visibility, setVisibility] = React.useState(false)
    const toggleVisibility = () => setVisibility(!visibility)
    const navigation = useNavigation()
    const onpress = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.headerMainConatiner}>
            <View style={styles.iconView} hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }} >
                <TouchableOpacity onPress={onpress}>
                    <BackIcon />
                </TouchableOpacity>
                {
                    rightActions
                    &&
                    <View style={styles.iconContainer}>
                        <View style={styles.shareIcon}>
                            <ShareDetailSvg />
                        </View>
                        <TouchableOpacity onPress={toggleVisibility}>
                            <DeleteSvg />
                        </TouchableOpacity>
                    </View>
                }
            </View>
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
                            {i18n.t("Common.Status")}:
                        </Text>
                        <View style={styles.pendingView}>
                            <Text style={styles.pending}>
                                Pending
                            </Text>
                        </View>
                    </View>}
            </View>
            <ConformationModal visibility={visibility} toggleVisibility={toggleVisibility} desc={desc} id={id} idLabel={idLabel} />
        </View>
    )
}

export default Header

