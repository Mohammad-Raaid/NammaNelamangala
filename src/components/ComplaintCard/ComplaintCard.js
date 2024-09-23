import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ComplaintCardStyle";
import LinearGradient from "react-native-linear-gradient";
import { Colors, Constants, ScreenNames } from "../../global";
import ShareIcon from '../../assets/svgs/newsShareIcon.svg'
import RightIcon from '../../assets/svgs/rightIcon.svg'
import { DrawerActions, useNavigation } from "@react-navigation/native";
import i18n from "../../i18n";
const ComplaintCard = ({ item }) => {
    const statusColor = {
        pending: "#E8EC23",
        wip: "#EB9F0D",
        resolved: "#4AD028",
        deleted: '#EA0202'
    }
    const statusTextColor = {
        pending: "#8D8F20",
        wip: "#FFE1A8",
        resolved: Colors.WHITE,
        deleted: Colors.WHITE
    }
    const navigation = useNavigation();
    const openComplaintScreen = () => {
        navigation.navigate(ScreenNames.COMPLAINT_DETAIL_SCREEN);
    }
    return (
        <TouchableOpacity onPress={openComplaintScreen}>
            <View style={styles.container}>
                <Text style={styles.complaintId}>
                    {i18n.t("ComplaintCardSection.ComplaintIdText")}: <Text style={styles.value}>AAER22234D</Text>
                </Text>
                <Text style={styles.details}>
                    {i18n.t("Common.Type")}: <Text style={styles.value}>Type2</Text>
                </Text>
                <View style={styles.flexContainer}>
                    <Text style={{ ...styles.details, marginTop: Constants.CHANGE_BY_MOBILE_DPI(0) }}>
                        {i18n.t("Common.Issued")}: <Text style={styles.value}>Aug 23, 2024</Text>
                    </Text>
                    <View style={styles.statusMainContainer}>
                        <Text style={styles.statusLabel}>
                            {item.status == "resolved" ? i18n.t("Common.ResolvedOn") : item.status == "deleted" ? i18n.t("Common.DeletedOn") : i18n.t("Common.Status")}:
                        </Text>
                        <View style={{ ...styles.statusContainer, backgroundColor: statusColor[item.status] }}>
                            <Text style={{ ...styles.statusText, color: statusTextColor[item.status] }}>
                                {item.status == "resolved" || item.status == "deleted" ? '27/07/2024' : item.status}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rightIcon}>
                    <RightIcon />
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default ComplaintCard;