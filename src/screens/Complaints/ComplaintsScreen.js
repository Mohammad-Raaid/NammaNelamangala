import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './ComplaintsStyle'
import { ComplaintsHooks } from './ComplaintsHooks'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors } from '../../global'
import { useSelector } from 'react-redux'
import MenuHeader from '../../components/MenuHeader/MenuHeader'
import DeleteTabIcon from '../../assets/svgs/deletedTab.svg'
import DeleteTabPrimaryIcon from '../../assets/svgs/deletedTabPrimary.svg'
import PlusIcon from '../../assets/svgs/plusIcon.svg'
import i18n from '../../i18n'
const ComplaintsScreen = () => {
    const {
        selectedTab,
        setSelectedTab,
        renderComplaints,
        goToCreateComplaint
    } = ComplaintsHooks();

    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace barColor={Colors.WHITE} />
            <MenuHeader />
            <Text style={styles.heading}>
                {i18n.t("ComplaintCardSection.ComplaintHeader")}
            </Text>
            <View style={styles.tabs}>
                <View style={styles.tabContainer}>
                    {
                        [{ name: i18n.t("Common.Active"), value: "Active" }, { name: i18n.t("Common.Resolved"), value: "Resolved" }].map((item) => {
                            return (
                                <TouchableOpacity key={item.name} onPress={() => setSelectedTab(item.value)} style={{ ...styles.tab, backgroundColor: selectedTab == item.value ? Colors.PRIMARY : null }}>
                                    <Text style={styles.tabText}>
                                        {item.name}
                                    </Text>
                                    <View style={styles.countContainer}>
                                        <Text style={{ ...styles.count, color: selectedTab == item.value ? Colors.PRIMARY : Colors.LIGHT_PRIMARY }}>
                                            99
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <TouchableOpacity onPress={() => setSelectedTab("Deleted")}>
                    <View style={[styles.deletedCount, selectedTab == "Deleted" ? styles.deletedCountSelected : {}]}>
                        <Text style={{ ...styles.tabText, color: selectedTab == "Deleted" ? Colors.DELETE : Colors.WHITE }}>
                            99
                        </Text>
                    </View>
                    {
                        selectedTab == "Deleted"
                            ?
                            <DeleteTabPrimaryIcon />
                            :
                            <DeleteTabIcon />
                    }
                </TouchableOpacity>
            </View>
            <FlatList
                data={[{ status: "pending" }, { status: "resolved" }, { status: "wip" }, { status: "deleted" }]}
                renderItem={renderComplaints}
                keyExtractor={(item) => JSON.stringify(item)}
            />
            {
                selectedTab == "Active"
                &&
                <TouchableOpacity onPress={goToCreateComplaint} style={styles.plusIcon}>
                    <PlusIcon />
                </TouchableOpacity>
            }
        </View>
    )
}

export default ComplaintsScreen
