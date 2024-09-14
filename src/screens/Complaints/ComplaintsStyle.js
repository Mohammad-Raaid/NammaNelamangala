import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global/index";
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    heading: {
        textAlign: 'center',
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(20),
        fontFamily: Fonts.EXTRA_BOLD,
        color: Colors.CHINESE_BLACK
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(16),
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(24)
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: Colors.LIGHT_PRIMARY,
        height: Constants.CHANGE_BY_MOBILE_DPI(36),
        width: Constants.CHANGE_BY_MOBILE_DPI(246),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(18)
    },
    tab: {
        flex: 1,
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(18),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    tabText: {
        color: Colors.WHITE,
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    countContainer: {
        height: Constants.CHANGE_BY_MOBILE_DPI(18),
        width: Constants.CHANGE_BY_MOBILE_DPI(18),
        backgroundColor: Colors.WHITE,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(9),
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(4)
    },
    count: {
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(8)
    },
    deletedCount: {
        height: Constants.CHANGE_BY_MOBILE_DPI(18),
        width: Constants.CHANGE_BY_MOBILE_DPI(18),
        borderColor: Colors.WHITE,
        borderWidth: Constants.CHANGE_BY_MOBILE_DPI(1),
        backgroundColor: Colors.GRAY_85,
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(9),
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: Constants.CHANGE_BY_MOBILE_DPI(-2),
        top: Constants.CHANGE_BY_MOBILE_DPI(-3),
        zIndex: 100
    },
    deletedCountSelected: {
        backgroundColor: Colors.WHITE,
        borderColor: Colors.DELETE,
    },
    plusIcon: {
        backgroundColor: Colors.PRIMARY,
        height: Constants.CHANGE_BY_MOBILE_DPI(48),
        width: Constants.CHANGE_BY_MOBILE_DPI(48),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(24),
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: Constants.CHANGE_BY_MOBILE_DPI(29),
        right: Constants.CHANGE_BY_MOBILE_DPI(24)
    }
})
