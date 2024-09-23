import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './ApplicationsStyle'
import { ApplicationsHooks } from './ApplicationsHooks'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors } from '../../global'
import { useSelector } from 'react-redux'
import MenuHeader from '../../components/MenuHeader/MenuHeader'
import PlusIcon from '../../assets/svgs/plusIcon.svg'
import i18n from '../../i18n'
const ApplicationsScreen = () => {
    const {
        renderApplications,
        goToApplicationDetail,
        goToCreateApplication
    } = ApplicationsHooks();
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace barColor={Colors.WHITE} />
            <MenuHeader />
            <Text style={styles.heading}>
                {i18n.t("ApplicationSection.HeaderText")}
            </Text>
            <TouchableOpacity onPress={goToApplicationDetail}>
                <FlatList
                    data={[{ status: "Active", id: 1 }, { status: "Active", id: 2 }, { status: "Active", id: 3 }, { status: "Closed", id: 4 }]}
                    renderItem={renderApplications}
                    keyExtractor={(item) => JSON.stringify(item)}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={goToCreateApplication} style={styles.plusIcon}>
                <PlusIcon />
            </TouchableOpacity>
        </View>
    )
}

export default ApplicationsScreen
