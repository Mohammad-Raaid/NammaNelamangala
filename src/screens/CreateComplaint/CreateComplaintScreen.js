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
const CreateComplaintScreen = () => {
    const {
        submitComplaint,
        invalidFields,
        updateFormData,
        formData,
        visibility,
        toggleVisibility
    } = CreateComplaintHooks()
    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header headerText={i18n.t("LodgedComplaintSection.HeaderText")} headerDesc={i18n.t("LodgedComplaintSection.HeaderDesc")} />
                <View style={styles.inputContainer}>
                    <CustomDropDown
                        setState={(value) => updateFormData("ward", value)}
                        placeHolder={i18n.t("Common.Ward")}
                        dropDownList={[
                            {
                                name: 'Ward1',
                                value: 'Ward1'
                            },
                            {
                                name: 'Ward2',
                                value: 'Ward2'
                            },
                        ]}
                    />
                    <CustomDropDown
                        setState={(value) => updateFormData("village", value)}
                        placeHolder={i18n.t("Common.VillageName")}
                        dropDownList={[
                            {
                                name: 'Village1',
                                value: 'Village1'
                            },
                            {
                                name: 'Village2',
                                value: 'Village2'
                            },
                        ]}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("Common.Booth")}
                        onChangeText={(value) => updateFormData("booth", value)}
                        error={invalidFields.find(e => e.field == "booth")}
                    />
                    <CustomDropDown
                        setState={(value) => updateFormData("complaintType", value)}
                        placeHolder={i18n.t("Common.Complainttype")}
                        dropDownList={[
                            {
                                name: 'Type1',
                                value: 'Type1'
                            },
                            {
                                name: 'Type2',
                                value: 'Type2'
                            },
                        ]}
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
                        onChangeText={(value) => updateFormData("complaintDescription", value)}
                        error={invalidFields.find(e => e.field == "complaintDescription")}
                    />
                    <CustomImagePicker
                        placeholderText={i18n.t("LodgedComplaintSection.UploadImages")}
                        maxLength={4}
                    />
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

