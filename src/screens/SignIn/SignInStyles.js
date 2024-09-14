import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";
export const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    images: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(20),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(32)
    },
    imageBorder: {
        borderWidth: Constants.CHANGE_BY_MOBILE_DPI(2.5),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(25),
        height: Constants.CHANGE_BY_MOBILE_DPI(50),
        width: Constants.CHANGE_BY_MOBILE_DPI(50),
        justifyContent: "center",
        alignItems: "center",
        borderColor: Colors.GRAY_85,
        overflow: "hidden"
    },
    bannerImage: {
        height: "100%",
        width: "100%"
    },
    image: {
        width: Constants.CHANGE_BY_MOBILE_DPI(37),
        height: Constants.CHANGE_BY_MOBILE_DPI(37),
    },
    alignCenterContainer: {
        alignItems: 'center',
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    title: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(32),
        fontFamily: Fonts.EXTRA_BOLD,
        color: Colors.PRIMARY,
        includeFontPadding: true
    },
    description: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        fontFamily: Fonts.REGULAR,
        color: Colors.BLACK,
        textAlign: 'center'
    },
    inputContainer: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(58)
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
        color: "#DFC9FB",
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12)
    }

})