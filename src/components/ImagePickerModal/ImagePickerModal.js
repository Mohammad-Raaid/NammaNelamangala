import React from "react";
import { ActivityIndicator, Modal, PermissionsAndroid, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { Colors, Constants, Fonts, Server, Helper } from "../../global/index"
import GallerySvg from '../../assets/svgs/selectFromGallery.svg'
import CameraSvg from '../../assets/svgs/camera.svg'
import i18n from "../../i18n";
import ImageCropPicker from "react-native-image-crop-picker";
const ImagePickerModal = ({ visibility = false, toggleVisibility = () => { }, onRequestClose = () => { }, setState, state }) => {

    const openCamera = async () => {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            ImageCropPicker.openCamera({
                width: Constants.SCREEN_WIDTH,
                height: Constants.SCREEN_WIDTH,
                cropping: true
            }).then(image => {
                setState(image);
                toggleVisibility()
            });
        }
    }
    const openGallery = () => {
        ImageCropPicker.openPicker({
            width: Constants.SCREEN_WIDTH,
            height: Constants.SCREEN_WIDTH,
            cropping: true
        }).then(image => {
            setState(image);
            toggleVisibility()
        });
    }

    const onShow = async () => {
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
                <TouchableOpacity onPress={toggleVisibility} style={{ flex: 1 }} />
                <View style={styles.dropDownContainer}>
                    <TouchableOpacity onPress={openGallery} style={styles.selectionContainer}>
                        <GallerySvg />
                        <Text style={styles.text}>
                            {i18n.t("LodgedComplaintSection.Uploadfromgallery")}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openCamera} style={styles.selectionContainer}>
                        <CameraSvg />
                        <Text style={styles.text}>
                            {i18n.t("LodgedComplaintSection.Opencamera")}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={toggleVisibility} style={{ flex: 1 }} />
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    dropDownMainContainer: {
        flex: 1,
        backgroundColor: "#524B4560",
        justifyContent: "center",
    },
    dropDownContainer: {
        height: Constants.CHANGE_BY_MOBILE_DPI(148),
        backgroundColor: Colors.WHITE,
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(5),
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        justifyContent: "space-between"
    },
    selectionContainer: {
        width: Constants.CHANGE_BY_MOBILE_DPI(120),
        height: Constants.CHANGE_BY_MOBILE_DPI(102),
        borderWidth: Constants.CHANGE_BY_MOBILE_DPI(2),
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(5),
        borderStyle: "dashed",
        borderColor: Colors.LIGHT_PRIMARY,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: Colors.BLACK,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        fontFamily: Fonts.REGULAR,
        marginTop: Constants.CHANGE_BY_MOBILE_DPI(16)
    }
})
export default ImagePickerModal;