import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global/index";
export const styles = StyleSheet.create({
    headerMainConatiner: {
        paddingTop: Constants.CHANGE_BY_MOBILE_DPI(16),
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(14),
        backgroundColor: Colors.WHITE
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
    }
})