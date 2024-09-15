import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global/index";
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    indicatorContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(12),
    },
    indicator: {
        height: Constants.CHANGE_BY_MOBILE_DPI(8),
        width: Constants.CHANGE_BY_MOBILE_DPI(8),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(4),
        backgroundColor: Colors.LIGHT_PRIMARY,
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(4)
    },
    currentIndicator: {
        width: Constants.CHANGE_BY_MOBILE_DPI(24),
        backgroundColor: Colors.PRIMARY
    },
    actionListContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(32),
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24)
    },
    actionMainContainer: {
        alignItems: "center",
    },
    actionContainer: {
        height: Constants.CHANGE_BY_MOBILE_DPI(70),
        width: Constants.CHANGE_BY_MOBILE_DPI(70),
        backgroundColor: Colors.LIGHT_PRIMARY,
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(4),
        alignItems: "center",
        justifyContent: "center",
    },
    actionText: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(8),
        color: Colors.CHINESE_BLACK,
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
    newsAndEventsContainer: {
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(29)
    },
    headingContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(20)
    },
    headingText: {
        fontFamily: Fonts.EXTRA_BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(20),
        color: Colors.CHINESE_BLACK
    },
    viewAllContainer: {
        backgroundColor: Colors.PRIMARY,
        height: Constants.CHANGE_BY_MOBILE_DPI(28),
        width: Constants.CHANGE_BY_MOBILE_DPI(60),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(30)
    },
    viewAllText: {
        color: Colors.WHITE,
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(10)
    }
})
