import { Platform, StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";
export const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: CHANGE_BY_MOBILE_DPI(24),
        marginBottom: CHANGE_BY_MOBILE_DPI(16)
    },
    inputMainContainer: {
        borderStyle: "dashed",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        height: CHANGE_BY_MOBILE_DPI(48),
        borderWidth: CHANGE_BY_MOBILE_DPI(2),
        borderColor: Colors.GRAY_85,
        borderRadius: CHANGE_BY_MOBILE_DPI(5),
        backgroundColor: Colors.WHITE,
    },
    internalPlaceholder: {
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.GRAY_85,
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(8)
    },
    error: {
        borderColor: Colors.RED + "90",
    },
    lengthText: {
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(8),
        color: Colors.SONIC_SILVER,
        textAlign: "right",
        marginTop: CHANGE_BY_MOBILE_DPI(8)
    },
    selectedImageContainer: {
        flexDirection: "row",
        marginTop: CHANGE_BY_MOBILE_DPI(12)
    },
    selectedImage: {
        height: CHANGE_BY_MOBILE_DPI(32),
        width: CHANGE_BY_MOBILE_DPI(32)
    },
    detailsContainer: {
        marginLeft: CHANGE_BY_MOBILE_DPI(8),
        justifyContent: "space-between"
    },
    fileName: {
        fontFamily: Fonts.BOLD,
        fontSize: CHANGE_BY_MOBILE_DPI(12),
        color: Colors.CHINESE_BLACK
    },
    sizeText: {
        fontFamily: Fonts.REGULAR,
        fontSize: CHANGE_BY_MOBILE_DPI(12),
        color: Colors.SONIC_SILVER
    },
    crossContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    errorText: {
        color: Colors.RED,
        fontFamily: Fonts.REGULAR,
        fontSize: CHANGE_BY_MOBILE_DPI(12),
        marginLeft: CHANGE_BY_MOBILE_DPI(24),
        marginTop: CHANGE_BY_MOBILE_DPI(4)
    },
    textContainer: {
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK,
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        marginBottom: CHANGE_BY_MOBILE_DPI(8)
    },
    starContainer: {
        fontFamily: Fonts.MEDIUM,
        color: Colors.RED,
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(5)
    },
    svgContainer: {
        height: CHANGE_BY_MOBILE_DPI(18),
        width: CHANGE_BY_MOBILE_DPI(22),
        alignItems: "center",
        justifyContent: "center",
        marginRight: CHANGE_BY_MOBILE_DPI(6)
    },
    flexContainer: {
        flex: 1
    },
    inputStyle: {
        marginLeft: CHANGE_BY_MOBILE_DPI(6),
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        fontFamily: Fonts.REGULAR,
        color: Colors.GRAY_90,
        includeFontPadding: false
    }
})
