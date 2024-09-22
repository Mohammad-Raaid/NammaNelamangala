import React from "react";
import { Text, View } from "react-native";
import { styles } from "./ApplicationCardStyle";
import { Constants } from "../../global";
import RightIcon from '../../assets/svgs/rightIcon.svg'
import i18n from "../../i18n";
const ApplicationCard = ({ item }) => {
    const statusColor = {
        Active: "#4AD028",
        Closed: '#EA0202'
    }

    return (
        <View style={styles.container}>
            <Text style={styles.complaintId}>
                {i18n.t("AppiliationCardSection.AppiliationIdText")} <Text style={styles.value}>AAER22234D</Text>
            </Text>
            <Text style={styles.details}>
                {i18n.t("Common.ComplaintType")}<Text style={styles.value}>Type2</Text>
            </Text>
            <View style={styles.flexContainer}>
                <Text style={{ ...styles.details, marginTop: Constants.CHANGE_BY_MOBILE_DPI(0) }}>
                    {i18n.t("Common.ComplaintIssued")} <Text style={styles.value}>Aug 23, 2024</Text>
                </Text>
                <View style={styles.statusMainContainer}>
                    <Text style={styles.statusLabel}>
                        {item.status == "resolved" ? i18n.t("Common.ComplaintResolvedText") : item.status == "deleted" ? i18n.t("Common.ComplaintDeletedText") : i18n.t("Common.ComplaintStatusText")}
                    </Text>
                    <View style={{ ...styles.statusContainer, backgroundColor: statusColor[item.status] }}>
                        <Text style={styles.statusText}>
                            {item.status}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightIcon}>
                <RightIcon />
            </View>
        </View>
    )
}
export default ApplicationCard;