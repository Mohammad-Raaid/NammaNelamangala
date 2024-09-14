import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";
export const styles = StyleSheet.create({
    image: {
        width: Constants.SCREEN_WIDTH,
        height: Constants.CHANGE_BY_MOBILE_DPI(450),
        justifyContent: "flex-end",
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24)
    },
    gradient: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    title: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        color: Colors.WHITE,
        fontFamily: Fonts.BOLD
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(24),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    dateText: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        color: Colors.SONIC_SILVER,
        fontFamily: Fonts.REGULAR
    }
})