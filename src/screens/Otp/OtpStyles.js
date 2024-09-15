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
        alignItems: "center",
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(20),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(32)
    },
    image: {
        width: Constants.CHANGE_BY_MOBILE_DPI(37),
        height: Constants.CHANGE_BY_MOBILE_DPI(37)
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
    headerText: {
        color: Colors.PRIMARY,
        includeFontPadding: true,
        fontFamily: Fonts.EXTRA_BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16)
    },
    alignCenterContainer: {
        alignItems: 'center',
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(45)
    },
    title: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(32),
        fontFamily: Fonts.EXTRA_BOLD,
        color: Colors.PRIMARY
    },
    description: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        fontFamily: Fonts.REGULAR,
        color: Colors.BLACK,
        textAlign: 'center',
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    otpInputContainer: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(19)
    },
    otpContainer: {
        alignment: 'center',
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(11)
    },
    textInputStyle: {
        borderWidth: Constants.CHANGE_BY_MOBILE_DPI(1),
        borderBottomWidth: Constants.CHANGE_BY_MOBILE_DPI(1),
        borderColor: Colors.GRAY_85,
        height: Constants.CHANGE_BY_MOBILE_DPI(45),
        width: Constants.CHANGE_BY_MOBILE_DPI(40),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(4),
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(20),
        backgroundColor: Colors.WHITE
    },
    buttonContainer: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(29)
    },
    resendOtp: {
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        color: Colors.BLACK,
        textAlign: "center",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(18)
    },
    footerText: {
        textAlign: "center",
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(8),
        color: Colors.LIGHT_PRIMARY,
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12)
    }
})