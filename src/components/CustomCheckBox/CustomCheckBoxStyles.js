import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global/index";
export const styles = StyleSheet.create({
    checkboxConatiner: {
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        flexDirection: "row",
        alignItems: "center"
    },
    checkbox: {
        height: Constants.CHANGE_BY_MOBILE_DPI(16),
        width: Constants.CHANGE_BY_MOBILE_DPI(16),
        borderColor: "#0A7AFF",
        borderWidth: Constants.CHANGE_BY_MOBILE_DPI(2),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(3),
        alignItems: "center",
        justifyContent: "center"
    },
    checkboxLabel: {
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(8),
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.REGULAR,
        color: Colors.CHINESE_BLACK
    },
    headerContainer: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(10)
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
    }
})