import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global/index";
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    image: {
        width: Constants.SCREEN_WIDTH,
        height: Constants.CHANGE_BY_MOBILE_DPI(450)
    },
    indicatorContainer: {
        position: "absolute",
        bottom: Constants.CHANGE_BY_MOBILE_DPI(59),
        zIndex: 100,
        flexDirection: "row",
        alignSelf: "center",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(12),
    },
    indicator: {
        height: Constants.CHANGE_BY_MOBILE_DPI(8),
        width: Constants.CHANGE_BY_MOBILE_DPI(8),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(4),
        backgroundColor: Colors.WHITE,
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(4)
    },
    currentIndicator: {
        width: Constants.CHANGE_BY_MOBILE_DPI(24),
        backgroundColor: Colors.PRIMARY
    },
    detailsContainer: {
        backgroundColor: Colors.WHITE,
        flex: 1,
        borderTopLeftRadius: Constants.CHANGE_BY_MOBILE_DPI(20),
        borderTopRightRadius: Constants.CHANGE_BY_MOBILE_DPI(20),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(-43),
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24)
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(20)
    },
    heading: {
        color: Colors.SONIC_SILVER,
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    dot: {
        height: Constants.CHANGE_BY_MOBILE_DPI(2),
        width: Constants.CHANGE_BY_MOBILE_DPI(2),
        backgroundColor: Colors.SONIC_SILVER,
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(4)
    },
    title: {
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        color: Colors.BLACK,
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(16)
    },
    description: {
        textAlign: "justify",
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        color: Colors.BLACK,
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(8)
    }
})
