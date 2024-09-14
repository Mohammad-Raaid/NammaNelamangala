import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Constants, Colors, Fonts } from "../../global/index"
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
const CustomDatePicker = ({ placeHolder, containerStyle = {}, setState, disabled = false, defaultValue = '', maximumDate = null, minimumDate = null }) => {

    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(defaultValue)
    const [borderColor, setBorderColor] = React.useState(Colors.BLACK)
    const [placeHolderColor, setPlaceHolderColor] = React.useState(
        Colors.GRAY_90,
    );
    const selectDateFromPicker = (d, date) => {
        if (Platform.OS === "android") {
            if (d.type === 'set') {
                setShowDatePicker(false)
                setCurrentDate(date)
                setState(date)
                setSelectedDate(date)
                setBorderColor(Colors.PRIMARY)
                setPlaceHolderColor(Colors.BLACK)
            } else {
                setShowDatePicker(false)
            }
        } else {
            setSelectedDate(date)
            setCurrentDate(date)
            setState(date)
        }
    }
    return (
        <View style={{ flex: 1, marginHorizontal: CHANGE_BY_MOBILE_DPI(24), marginBottom: CHANGE_BY_MOBILE_DPI(16), ...containerStyle }}>
            {
                placeHolder != ""
                &&
                <Text style={styles.textContainer}>
                    {placeHolder}
                </Text>
            }
            <TouchableOpacity disabled={disabled} onPress={() => setShowDatePicker(true)} style={[styles.container,]}>
                <Text style={[styles.placeHolderText, { color: placeHolderColor }]}>
                    {selectedDate ? moment(selectedDate).format("DD-MM-YYYY") : 'DD / MM / YYYY'}
                </Text>
                {
                    showDatePicker
                    &&
                    <>
                        {Platform.OS === 'android'
                            ?
                            <DateTimePicker
                                value={currentDate}
                                mode='date'
                                maximumDate={maximumDate}
                                minimumDate={minimumDate}
                                display='calendar'
                                onChange={selectDateFromPicker}
                            />
                            :
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: CHANGE_BY_MOBILE_DPI(20), paddingVertical: CHANGE_BY_MOBILE_DPI(20) }}>
                                    <TouchableOpacity onPress={() => {
                                        setShowDatePicker(false)
                                    }}>
                                        <Text style={{ fontFamily: Fonts.MEDIUM, fontSize: CHANGE_BY_MOBILE_DPI(14), color: Colors.PRIMARY }}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        setShowDatePicker(false)
                                    }}>
                                        <Text style={{ fontFamily: Fonts.MEDIUM, fontSize: CHANGE_BY_MOBILE_DPI(14), color: Colors.PRIMARY }}>Ok</Text>
                                    </TouchableOpacity>
                                </View>
                                <DateTimePicker
                                    value={currentDate}
                                    mode='date'
                                    minimumDate={new Date()}
                                    display='spinner'
                                    onChange={selectDateFromPicker}
                                />
                            </View>
                        }
                    </>
                }
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: Constants.CHANGE_BY_MOBILE_DPI(2),
        backgroundColor: Colors.WHITE,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
        height: Constants.CHANGE_BY_MOBILE_DPI(48),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(5),
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(10),
        borderColor: Colors.GRAY_85
    },
    textContainer: {
        fontFamily: Fonts.EXTRA_BOLD,
        color: Colors.BLACK,
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(8)
    },
    starContainer: {
        fontFamily: Fonts.MEDIUM,
        color: Colors.RED,
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(5)
    },
    placeHolderText: {
        fontSize: CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.MEDIUM,
        color: Colors.RICH_BLACK_30,
    },
})
export default CustomDatePicker;