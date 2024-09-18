import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";
export const styles = StyleSheet.create({
    container: {
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(16),
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24)
    },
    title: {
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        color: Colors.BLACK
    },
    description: {
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(10),
        color: Colors.BLACK,
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(4)
    },
    galleryImages: {
        flexDirection: "row",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    largeImage: {
        height: Constants.CHANGE_BY_MOBILE_DPI(100),
        width: Constants.CHANGE_BY_MOBILE_DPI(213),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(2),
        marginRight: Constants.CHANGE_BY_MOBILE_DPI(3)
    },
    smallImage: {
        height: Constants.CHANGE_BY_MOBILE_DPI(48),
        width: Constants.CHANGE_BY_MOBILE_DPI(96),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(2)
    },
    thirdImage: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(4)
    },
    extraImageLayer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.GRAY_85 + "99",
        zIndex: 100,
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(2)
    },
    countText: {
        color: Colors.SONIC_SILVER,
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    dateText: {
        color: Colors.SONIC_SILVER,
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(10),
        marginRight: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
    shareIcon: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    }
})