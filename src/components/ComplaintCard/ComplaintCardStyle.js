import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";
export const styles = StyleSheet.create({
    container: {
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(12),
        paddingBottom: Constants.CHANGE_BY_MOBILE_DPI(12),
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        borderBottomWidth: Constants.CHANGE_BY_MOBILE_DPI(0.5),
        borderColor: Colors.GRAY_85
    },
    complaintId: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK
    },
    details: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.REGULAR,
        color: Colors.SONIC_SILVER,
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    value: {
        fontFamily: Fonts.REGULAR,
        color: Colors.CHINESE_BLACK
    },
    rightIcon: {
        position: "absolute",
        right: 0,
        top: 0,
    },
    flexContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(8)
    },
    statusMainContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    statusLabel: {
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(11),
        color: Colors.BLACK,
    },
    statusContainer: {
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(14),
        height: Constants.CHANGE_BY_MOBILE_DPI(16),
        minWidth: Constants.CHANGE_BY_MOBILE_DPI(58),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(8),
        alignItems: "center",
        justifyContent: "center",
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(8)
    },
    statusText: {
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(10),
    }
})