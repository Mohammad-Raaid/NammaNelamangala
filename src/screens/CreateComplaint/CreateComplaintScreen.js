import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './CreateComplaintStyles'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constants } from '../../global'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import GlobalButton from '../../components/CustomButton/CustomButton'
import { CreateComplaintHooks } from './CreateComplaintHooks'
import Carousel from 'react-native-reanimated-carousel'
import Header from '../../components/Header/Header'
import CustomDropDown from '../../components/CustomDropDown/CustomDropDown'
import CustomCheckBox from '../../components/CustomCheckBox/CustomCheckBox'
import i18n from '../../i18n'
import CustomImagePicker from '../../components/CustomImagePicker/CustomImagePicker'
import SuccessModal from '../../components/SuccessModal/SuccessModal'
import { mla_constituency_id, mp_constituency_id } from '../../global/config'
import MapView, { Marker } from 'react-native-maps'
const CreateComplaintScreen = () => {
    const {
        submitComplaint,
        invalidFields,
        updateFormData,
        formData,
        visibility,
        toggleVisibility,
        region
    } = CreateComplaintHooks()

    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header headerText={i18n.t("LodgedComplaintSection.HeaderText")} headerDesc={i18n.t("LodgedComplaintSection.HeaderDesc")} />
                <View style={styles.inputContainer}>
                    <CustomDropDown
                        setState={(value) => updateFormData("ward_number_id", value)}
                        placeHolder={i18n.t("Common.Ward")}
                        endPoint={'/getOpen/ward_number'}
                        disabled={!!formData?.main_village_id}
                        dropDownSearchKey={'disp_name'}
                        body={{
                            // flag: "ward_number",
                            // group: "political",
                            // filters: [{ field: "mla_constituency_id", value: mla_constituency_id }],
                            mla_constituency_id: mla_constituency_id,
                            mp_constituency_id: mp_constituency_id
                        }}
                    />
                    <CustomDropDown
                        setState={(value) => updateFormData("main_village_id", value)}
                        placeHolder={i18n.t("Common.VillageName")}
                        endPoint={'/getOpen/main_village'}
                        dropDownSearchKey={'disp_name'}
                        disabled={!!formData?.ward_number_id}
                        body={{
                            mp_constituency_id: mp_constituency_id,
                            mla_constituency_id: mla_constituency_id,
                        }}
                    />
                    <CustomDropDown
                        setState={(value) => updateFormData("booth_number_id", value)}
                        placeHolder={i18n.t("Common.Booth")}
                        endPoint={'/getOpen/booth_number'}
                        dropDownSearchKey={'disp_name'}
                        body={{
                            mla_constituency_id: mla_constituency_id,
                            mp_constituency_id: mp_constituency_id,
                            ward_number_id: formData?.ward_number_id ? formData?.ward_number_id?.id : null,
                            main_village_id: formData?.main_village_id ? formData?.main_village_id?.id : null
                        }}
                    />
                    <CustomDropDown
                        setState={(value) => updateFormData("complaint_type_id", value)}
                        placeHolder={i18n.t("Common.Complainttype")}
                        endPoint={'/meta'}
                        dropDownSearchKey={'disp_name'}
                        body={{
                            "flag": "user_complaint_type"
                        }}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("LodgedComplaintSection.LocationAndLandmarkText")}
                        onChangeText={(value) => updateFormData("location", value)}
                        error={invalidFields.find(e => e.field == "location")}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("LodgedComplaintSection.ComplaintDescription")}
                        multiline
                        maxLength={200}
                        onChangeText={(value) => updateFormData("description", value)}
                        error={invalidFields.find(e => e.field == "description")}
                    />
                    <CustomImagePicker
                        placeholderText={i18n.t("LodgedComplaintSection.UploadImages")}
                        maxLength={4}
                        onChange={(value) => updateFormData("images", value)}
                    />
                    {region && (
                        <MapView
                            style={styles.map}
                            region={region}
                            showsUserLocation={true}
                            showsMyLocationButton={true}
                        >
                            {location && <Marker coordinate={region} />}
                        </MapView>
                    )}
                    <CustomCheckBox label={i18n.t("Common.AgreeTerms")} />
                </View>
                <GlobalButton
                    buttonPress={submitComplaint}
                    buttonText={i18n.t("Common.Submit")}
                />
                <SuccessModal visibility={visibility} toggleVisibility={toggleVisibility} desc={i18n.t("LodgedComplaintSection.SuccessMsg")} idLabel={i18n.t("ComplaintCardSection.ComplaintIdText")} id={"AAER22234D"} />
            </ScrollView>
        </View>
    )
}
export default CreateComplaintScreen

