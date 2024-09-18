import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global/index";
export const styles = StyleSheet.create({
    headerMainConatiner: {
        paddingTop: Constants.CHANGE_BY_MOBILE_DPI(16),
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(14),
        backgroundColor: Colors.WHITE
    },
    iconView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconContainer: {
        flexDirection: "row",
    },
    shareIcon: {
        marginRight: Constants.CHANGE_BY_MOBILE_DPI(16)
    },
    headerContainer: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(10),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    skip: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        fontFamily: Fonts.SEMIBOLD,
        color: Colors.RICH_BLACK,
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(20)
    },
    headerText: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(20),
        fontFamily: Fonts.EXTRA_BOLD,
        color: Colors.CHINESE_BLACK
    },
    headerDesc: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.REGULAR,
        color: Colors.BLACK
    },
    status: {
        flexDirection: "row",
        alignItems: "center",

    },
    pendingView: {
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
    statusText: {
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(11)
    },
    pending: {
        backgroundColor: "#E8EC23",
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(20),
        paddingVertical: Constants.CHANGE_BY_MOBILE_DPI(3),
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(10),
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(10)
    }
})