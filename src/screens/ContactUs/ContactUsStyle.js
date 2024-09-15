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
    description: {
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        textAlign: 'center',
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(10),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(8),
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(24)
    },
    container: {
        backgroundColor: Colors.WHITE,
        borderWidth: Constants.CHANGE_BY_MOBILE_DPI(0.2),
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(10),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(4),
        paddingVertical: Constants.CHANGE_BY_MOBILE_DPI(16),
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(20),
        borderColor: Colors.GRAY_85,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(6)
    },
    titleText: {
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(8),
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        color: Colors.BLACK
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    detailsText: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.REGULAR,
        color: Colors.BLACK
    },
    footerText: {
        textAlign: "center",
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(8),
        color: Colors.LIGHT_PRIMARY,
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12)
    }
})
