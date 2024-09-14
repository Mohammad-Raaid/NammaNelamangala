import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";

//global

const HEIGHT = 50;
const SPACING = 20;
const RADIUS = 20;

export const styles = StyleSheet.create({
    con: {
        backgroundColor: Colors.WHITE,
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(10),
        borderTopWidth: Constants.CHANGE_BY_MOBILE_DPI(1),
        borderColor: Colors.GRAY_85
    },
    tabBarCon: {
        flexDirection: 'row',
        height: Constants.CHANGE_BY_MOBILE_DPI(60)
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    names: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(10),
        fontFamily: Fonts.REGULAR,
        includeFontPadding: false,
    }
});