import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";
export const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    bannerImage: {
        height: "100%",
        width: "100%"
    },
    alignCenterContainer: {
        alignItems: 'center',
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(60)
    },
    title: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(24),
        fontFamily: Fonts.SEMIBOLD,
        color: Colors.RICH_BLACK,
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(20),
        includeFontPadding: true
    },
    description: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(18),
        fontFamily: Fonts.REGULAR,
        color: Colors.RICH_BLACK,
        textAlign: 'center'
    },
    inputContainer: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(100)
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

})