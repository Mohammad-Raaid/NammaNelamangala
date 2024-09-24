import React from "react";
import { ActivityIndicator, Modal, PermissionsAndroid, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { Colors, Constants, Fonts, Server, Helper } from "../../global/index"
import GallerySvg from '../../assets/svgs/selectFromGallery.svg'
import CameraSvg from '../../assets/svgs/camera.svg'
import i18n from "../../i18n";
import ImageCropPicker from "react-native-image-crop-picker";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
const SuccessModal = ({ visibility = false, toggleVisibility = () => { }, desc, idLabel, id }) => {
    const navigation = useNavigation();
    const onShow = async () => {
    }
    const onClickOk = () => {
        toggleVisibility()
        navigation.goBack()
    }

    return (
        <Modal
            visible={visibility}
            transparent={true}
            onShow={onShow}
            animationType="slide"
        >
            <View style={styles.dropDownMainContainer}>
                <TouchableOpacity onPr style={{ flex: 1 }} />
                <View style={styles.dropDownContainer}>
                    <View>
                        <Text style={styles.title}>
                            {i18n.t("Common.Success")}
                        </Text>
                        <Text style={styles.desc}>
                            {desc}
                        </Text>
                    </View>
                    <Text style={styles.idLabel}>
                        {idLabel}: <Text style={styles.id}>{id}</Text>
                    </Text>
                    <TouchableOpacity onPress={onClickOk} style={styles.buttonContainer} >
                        <LinearGradient colors={[Colors.PRIMARY, Colors.SECONDARY]} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>
                                OK
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ flex: 1 }} />
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
        height: Constants.CHANGE_BY_MOBILE_DPI(165),
        backgroundColor: Colors.WHITE,
        borderRadius: Constants.CHANGE_BY_MOBILE_DPI(5),
        marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(24),
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: Constants.CHANGE_BY_MOBILE_DPI(20),
        overflow: "hidden"
    },
    title: {
        fontFamily: Fonts.EXTRA_BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16),
        color: Colors.CHINESE_BLACK,
        includeFontPadding: true,
        textAlign: "center"
    },
    desc: {
        fontFamily: Fonts.REGULAR,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12),
        color: Colors.CHINESE_BLACK,
        textAlign: "center"
    },
    idLabel: {
        color: Colors.BLACK,
        fontFamily: Fonts.BOLD,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(12)
    },
    id: {
        fontFamily: Fonts.REGULAR,
        color: Colors.PRIMARY
    },
    buttonContainer: {
        backgroundColor: Colors.PRIMARY,
        width: "100%",
        height: Constants.CHANGE_BY_MOBILE_DPI(48),
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontFamily: Fonts.BOLD,
        color: Colors.WHITE,
        fontSize: Constants.CHANGE_BY_MOBILE_DPI(16)
    }
})
export default SuccessModal;