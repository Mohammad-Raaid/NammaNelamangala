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
        color: Colors.CHINESE_BLACK,
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(24)
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
