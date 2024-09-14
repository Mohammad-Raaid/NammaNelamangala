import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";
export const styles = StyleSheet.create({
    buttonMainContainer: {
        height: Constants.CHANGE_BY_MOBILE_DPI(48),
        backgroundColor: Colors.PRIMARY,
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(5),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24)
    },
    buttonFontStyle: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        fontFamily: Fonts.BOLD,
        color: Colors.WHITE
    }
})