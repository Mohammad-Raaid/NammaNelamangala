import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Constants, Colors, Fonts } from "../../global/index"
import DownArrow from '../../assets/svgs/DropDownIcon.svg'
import DropDownModal from "../DropDownModal/DropDownModal";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";
const CustomDropDown = ({ placeHolder, containerStyle = {}, dropDownList, setState, defaultValue = null, disabled = false, externalPlaceholder = '', required = false }) => {
    const [selectedValue, setSelectedValue] = React.useState(null)
    const [borderColor, setBorderColor] = React.useState(Colors.BLACK)
    const [placeHolderColor, setPlaceHolderColor] = React.useState(
        Colors.RICH_BLACK + "33",
    );
    const [modalVisibility, setModalVisibility] = React.useState(false)
    const toggleModalVisibility = () => setModalVisibility(!modalVisibility)
    const setValue = (data) => {
        setBorderColor(Colors.PRIMARY)
        setPlaceHolderColor(Colors.BLACK)
        setState(data.value)
        setSelectedValue(data)
    }
    React.useEffect(() => {
        if (defaultValue) {
            setSelectedValue(dropDownList.filter(d => d.value === defaultValue)[0])
        }
    }, [])
    console.log(selectedValue);
    return (
        <View style={{ marginBottom: CHANGE_BY_MOBILE_DPI(20), flex: 1, ...containerStyle, }}>
            {
                externalPlaceholder != ""
                &&
                <Text style={styles.textContainer}>
                    {externalPlaceholder}{required ? <Text style={styles.starContainer}> *</Text> : null}
                </Text>
            }
            <TouchableOpacity disabled={disabled} onPress={toggleModalVisibility} style={[styles.container,]}>
                <Text style={[styles.placeHolderText, { color: placeHolderColor }]}>
                    {selectedValue ? selectedValue.name : placeHolder}
                </Text>
                <DownArrow />
                <DropDownModal dropDownTitle={"Select Area"} visibility={modalVisibility} toggleVisibility={toggleModalVisibility} dropDownList={dropDownList} setState={setValue} state={selectedValue} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: Constants.CHANGE_BY_MOBILE_DPI(1.5),
        backgroundColor: Colors.WHITE,
        includeFontPadding: false,
        fontFamily: Fonts.MEDIUM,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        height: Constants.CHANGE_BY_MOBILE_DPI(40),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(5),
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(10),
        color: Colors.BLACK,
        borderColor: Colors.RICH_BLACK + "66",
        flex: 1,
        justifyContent: "space-between",
    },
    textContainer: {
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK,
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(5)
    },
    starContainer: {
        fontFamily: Fonts.MEDIUM,
        color: Colors.RED,
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(5)
    },
    placeHolderText: {
        fontSize: CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK
    },
    flexContainer: {
        flex: 1,
        flexDirection: 'row',

    },
})
export default CustomDropDown;