import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global/index";
export const styles = StyleSheet.create({
    headerMainConatiner: {
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: Constants.CHANGE_BY_MOBILE_DPI(20),
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(20),
        backgroundColor: Colors.WHITE
    },
    headerContainer: {
        flex: 1,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'flex-start',
        marginRight: Constants.CHANGE_BY_MOBILE_DPI(10),
        backgroundColor: Colors.WHITE

    },
    skip: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        fontFamily: Fonts.SEMIBOLD,
        color: Colors.RICH_BLACK,
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(20)
    },
    headerText: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        fontFamily: Fonts.SEMIBOLD,
        color: Colors.RICH_BLACK,
        marginRight: Constants.CHANGE_BY_MOBILE_DPI(10)
    }
})