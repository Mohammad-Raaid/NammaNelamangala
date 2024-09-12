import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";
export const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: Colors.SNOW
    },
    alignCenterContainer: {
        alignItems: 'center',
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(60)
    },
    title: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(24),
        fontFamily: Fonts.SEMIBOLD,
        color: Colors.RICH_BLACK
    },
    description: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(18),
        fontFamily: Fonts.REGULAR,
        color: Colors.RICH_BLACK,
        textAlign: 'center'
    },
    otpInputContainer: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(60)
    },
    otpContainer: {
        alignment: 'center',
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(11)
    },
    textInputStyle: {
        borderWidth: Constants.CHANGE_BY_MOBILE_DPI(1),
        borderBottomWidth: Constants.CHANGE_BY_MOBILE_DPI(1),
        borderColor: Colors.GRAY_MEDIUM,
        height: Constants.CHANGE_BY_MOBILE_DPI(45),
        width: Constants.CHANGE_BY_MOBILE_DPI(40),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(4),
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(20),
        backgroundColor: Colors.WHITE
    },
    footerContainer: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(20)
    },
})