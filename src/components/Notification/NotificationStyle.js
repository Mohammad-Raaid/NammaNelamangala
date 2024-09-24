import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global/index.js";
export const styles = StyleSheet.create({

    EditUserDetailTextStyle: {
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.OUTER_SPACE,
        textAlign: 'center',
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(5)
    },
    notificationTextStyle: {
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        color: Colors.CHINESE_BLACK
    },
    flexAlignmentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: Constants.CHANGE_BY_MOBILE_DPI(20)
    },
    sectionLine: {
        height: Constants.CHANGE_BY_MOBILE_DPI(1),
        backgroundColor: Colors.GAINS_BORO
    },
    lisitingMainContainer: {
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
    },
    profileImageStyle: {
        height: Constants.CHANGE_BY_MOBILE_DPI(30),
        width: Constants.CHANGE_BY_MOBILE_DPI(30),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(100)
    },
    flexDirectionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    DeleteContainer: {
    },

    flexContainer: {
        flex: 1,
    }
})
