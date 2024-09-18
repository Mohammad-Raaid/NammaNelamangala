import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";
export const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    scrollContainer: {
        paddingBottom: Constants.CHANGE_BY_MOBILE_DPI(30)
    },
    instructionsContainer: {
        backgroundColor: "#ECDFFD",
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        height: Constants.CHANGE_BY_MOBILE_DPI(44),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(4),
        padding: Constants.CHANGE_BY_MOBILE_DPI(8),
        justifyContent: "space-between",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(16)
    },
    instructions: {
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(8),
        color: Colors.CHINESE_BLACK
    },
    inputContainer: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(32)
    },
    fullNamePrefix: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
    fullNamePrefixText: {
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        color: Colors.GRAY_90,
        marginRight: Constants.CHANGE_BY_MOBILE_DPI(8)
    },
    inputPlaceholder: {
        fontFamily: Fonts.REGULAR
    },
    phoneCodeContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    phoneCode: {
        color: Colors.GRAY_90,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        fontFamily: Fonts.REGULAR,
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
    divider: {
        height: Constants.CHANGE_BY_MOBILE_DPI(24),
        width: Constants.CHANGE_BY_MOBILE_DPI(1),
        backgroundColor: Colors.GRAY_90,
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(14)
    },
    googleLoginContainer: {
        alignSelf: "center",
        marginVertical: Constants.CHANGE_BY_MOBILE_DPI(30)
    },
    signUpText: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(20),
        textAlign: "center",
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.REGULAR,
        color: Colors.RICH_BLACK,
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(15)
    },
    primaryText: {
        color: Colors.PRIMARY,
    },
    footerText: {
        textAlign: "center",
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(8),
        color: Colors.LIGHT_PRIMARY,
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12)
    }

})