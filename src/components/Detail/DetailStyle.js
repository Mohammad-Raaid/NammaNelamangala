import { StyleSheet } from 'react-native';
import { Colors, Constants, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
export const styles = StyleSheet.create({
    mainContainer: {
        width: Constants.CHANGE_BY_MOBILE_DPI(183),
        flexDirection: "row",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(16),
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
    },
    labelIdContainer: {
        flex: 1
    },
    marginContainer: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(4)
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