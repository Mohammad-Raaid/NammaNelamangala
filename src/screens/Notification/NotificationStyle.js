import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global/index";
export const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    subContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    skeletonStyle: {
        height: Constants.CHANGE_BY_MOBILE_DPI(70),
        width: Constants.SCREEN_WIDTH,
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(20)
    },
    emptyListTextStyle: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        fontFamily: Fonts.MEDIUM,
        color: Colors.GRAY_MEDIUM
    },
    centerAlign: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(50)
    }
})
