import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";

//global

const HEIGHT = 50;
const SPACING = 20;
const RADIUS = 20;

export const styles = StyleSheet.create({
    con: {
        backgroundColor: Colors.SNOW,
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    tabBarCon: {
        flexDirection: 'row',
        height: Constants.CHANGE_BY_MOBILE_DPI(60)
    },
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancerTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    names: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(10),
        fontFamily: Fonts.SEMIBOLD,
        includeFontPadding: false,
    }
});