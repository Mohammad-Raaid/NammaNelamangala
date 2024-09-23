import { StyleSheet } from 'react-native';
import { Colors, Constants, Fonts } from '../../global';
export const styles = StyleSheet.create({
    mainContainer: {
        width: Constants.SCREEN_WIDTH - Constants.CHANGE_BY_MOBILE_DPI(48),
        flexDirection: "row",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(16),
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        minWidth: Constants.CHANGE_BY_MOBILE_DPI(183)
    },
    labelIdContainer: {
        flex: 1
    },
    col: {
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.CHINESE_BLACK
    },
    marginContainer: {
        flex: 1
    },
    label: {
        fontFamily: Fonts.BOLD,
        color: Colors.CHINESE_BLACK,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
    value: {
        fontFamily: Fonts.REGULAR,
        color: Colors.CHINESE_BLACK,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12)
    }
})