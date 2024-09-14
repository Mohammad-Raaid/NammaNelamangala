import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global/index";
export const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(16)
    },
    svgContainer: {
        flexDirection: "row",
        marginRight: Constants.CHANGE_BY_MOBILE_DPI(24)
    },
    iconsContainer: {
        marginRight: Constants.CHANGE_BY_MOBILE_DPI(16)
    },
    headerTextContainer: {
        width: Constants.CHANGE_BY_MOBILE_DPI(105),
        height: Constants.CHANGE_BY_MOBILE_DPI(22),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(5)
    },
    headerText: {
        color: Colors.PRIMARY,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        fontFamily: Fonts.EXTRA_BOLD,
    }
})