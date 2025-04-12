import React from "react";
import { ActivityIndicator, Modal, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { Colors, Constants, Fonts, Server, Helper } from "../../global/index"
import axiosInstance from "../../global/api-core";
import CustomTextInput from "../CustomTextInput/CustomTextInput";
const DropDownModal = ({ dropDownList, visibility = false, toggleVisibility = () => { }, onRequestClose = () => { }, setState, state, endPoint, body, dropDownSearchKey }) => {
    const loadingLoader = <ActivityIndicator size="small" color="#988F8A" />
    const [searchText, setSearchText] = React.useState("");
    const [searchList, setSearchList] = React.useState(dropDownList);
    const [dataList, setDataList] = React.useState(dropDownList);


    const searchData = (text) => {
        setSearchText(text)
        const response = dataList.filter(item => (item[dropDownSearchKey].toString().toUpperCase()).includes(text.toString().toUpperCase()))
        setSearchList(response);
    }

    const selectContent = (item) => {
        setState(item)
        toggleVisibility()
    }
    const renderSearchItem = (item) => {
        return (
            <TouchableOpacity onPress={() => selectContent(item)} key={JSON.stringify(item)} style={styles.searchItemContainer} >
                <Text style={{ ...styles.searchItemText, color: state[dropDownSearchKey] == item[dropDownSearchKey] ? Colors.PRIMARY : "#988F8A" }}>
                    {item[dropDownSearchKey]}
                </Text>
            </TouchableOpacity >
        )
    }

    const onShow = async () => {
        if (endPoint != '') {
            try {
                setSearchList(null)
                setDataList(null)
                console.log(endPoint, body);

                const response = await axiosInstance.post(endPoint, body)
                console.log(response.data.data);

                setDataList(response.data.data)
                setSearchList(response.data.data)
            } catch (error) {

            }
        } else {
            setDataList(dropDownList)
            setSearchList(dropDownList)
        }
    }

    return (
        <Modal
            visible={visibility}
            onRequestClose={onRequestClose}
            transparent={true}
            onShow={onShow}
            animationType="slide"
        >
            <View style={styles.dropDownMainContainer}>
                <TouchableOpacity onPress={toggleVisibility} style={{ flex: .35 }} />
                <View style={styles.dropDownContainer}>
                    <Text style={styles.dropDownTitle}>
                    </Text>
                    <CustomTextInput
                        onChangeText={searchData}
                        autoCapitalize={'none'}
                        placeholderText="Search here"
                    />
                    {/* dropDownTitle */}
                    {
                        dataList == null
                            ?
                            <View style={styles.topSpace}>
                                {loadingLoader}
                            </View>
                            :
                            <ScrollView contentContainerStyle={styles.dropDownListContainer}>
                                {
                                    searchList && searchList.map(renderSearchItem)
                                }
                            </ScrollView>
                    }
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    dropDownMainContainer: {
        flex: 1,
        backgroundColor: "#524B4560",
        justifyContent: "flex-end",
    },
    dropDownContainer: {
        flex: .65,
        backgroundColor: Colors.WHITE,
        borderTopRightRadius: Constants.CHANGE_BY_MOBILE_DPI(15),
        borderTopLeftRadius: Constants.CHANGE_BY_MOBILE_DPI(15)
    },
    dropDownTitle: {
        color: Colors.TEXT_COLOR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(18),
        fontFamily: Fonts.SEMIBOLD,
        textAlign: "center",
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(16),
        marginBottom: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    dropDownListContainer: {
        paddingBottom: Constants.CHANGE_BY_MOBILE_DPI(20)
    },
    searchItemContainer: {
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(30),
        paddingVertical: Constants.CHANGE_BY_MOBILE_DPI(10),
        borderBottomWidth: 1,
        borderColor: "#F0EFFE"
    },
    searchItemText: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.BOLD,
        color: Colors.TEXT_COLOR,
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(4)
    },
    mapsiContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(25),
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(10),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(5),
        borderWidth: 1,
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(10)
    },
    saveContainer: {
        marginLeft: Constants.CHANGE_BY_MOBILE_DPI(5)
    },
    saveFont: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.REGULAR,
        color: Colors.PRIMARY,

    },
    errorMessage: {
        color: Colors.ALERT,
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(30)
    },
    inputStyle: {
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.REGULAR,
        color: Colors.BLACK,
    },
    topSpace: {
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(20)
    }
})
export default DropDownModal;