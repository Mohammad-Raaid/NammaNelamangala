import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    title: {
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.CHINESE_BLACK,
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(24)
    },
    imagesContainer: {
        flexDirection: "row",
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    smallImageContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(6)
    },
    largeImage: {
        height: Constants.CHANGE_BY_MOBILE_DPI(90),
        width: Constants.CHANGE_BY_MOBILE_DPI(140),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(2)
    },
    smallImage: {
        height: Constants.CHANGE_BY_MOBILE_DPI(67),
        width: Constants.CHANGE_BY_MOBILE_DPI(80),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(2),
    },
    moreText: {
        textAlign: "center",
        textAlignVertical: "bottom",
        flex: 1,
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.SONIC_SILVER + "44"
    }
})