import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";
export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(16),
    },
    image: {
        width: Constants.CHANGE_BY_MOBILE_DPI(80),
        height: Constants.CHANGE_BY_MOBILE_DPI(60),
        justifyContent: "flex-end",
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24)
    },
    detailsConatiner: {
        flex: 1,
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(14),
        height: Constants.CHANGE_BY_MOBILE_DPI(56),
        justifyContent: "space-between"
    },
    title: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        color: Colors.BLACK,
        fontFamily: Fonts.BOLD
    },
    dateText: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(10),
        color: Colors.SONIC_SILVER,
        fontFamily: Fonts.REGULAR
    },
    shareIcon: {
        position: "absolute",
        right: 0,
        bottom: 0
    }
})