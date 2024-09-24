import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    title: {
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(24),
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.CHINESE_BLACK,
        fontFamily: Fonts.BOLD
    },
    highlightedTitle: {
        color: Colors.PRIMARY,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
    },
    selectedImageContainer: {
        flexDirection: "row",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(12),
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24)
    },
    detailsContainer: {
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(8),
        justifyContent: "space-between"
    },
    fileName: {
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.CHINESE_BLACK
    },
    sizeText: {
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.SONIC_SILVER
    },
    showCompleteDetails: {
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(24),
        color: Colors.PRIMARY,
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        textDecorationLine: "underline"
    }
})