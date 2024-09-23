import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './CreateApplicationStyles'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constants } from '../../global'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import GlobalButton from '../../components/CustomButton/CustomButton'
import { CreateApplicationHooks } from './CreateApplicationHooks'
import Carousel from 'react-native-reanimated-carousel'
import Header from '../../components/Header/Header'
import CustomDropDown from '../../components/CustomDropDown/CustomDropDown'
import DropDownModal from '../../components/DropDownModal/DropDownModal'
import DownArrow from '../../assets/svgs/DropDownIcon.svg'
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker'
import CustomCheckBox from '../../components/CustomCheckBox/CustomCheckBox'
import i18n from '../../i18n'
const Step1 = ({ updateFormData, invalidFields }) => {
    return (
        <View style={styles.inputContainer}>
            <CustomDropDown
                setState={(value) => updateFormData("applicationType", value)}
                placeHolder={i18n.t("CreateApplication.TypeOfApplication")}
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
            <CustomDropDown
                setState={(value) => updateFormData("benefits", value)}
                placeHolder={i18n.t("CreateApplication.Benefits")}
                dropDownList={[
                    {
                        name: 'Benefit1',
                        value: 'Benefit1'
                    },
                    {
                        name: 'Benefit2',
                        value: 'Benefit2'
                    },
                ]}
            />
            <CustomDropDown
                setState={(value) => updateFormData("personDetails", value)}
                placeHolder={i18n.t("CreateApplication.PersonDetails")}
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
                placeholderText={i18n.t("CreateApplication.Description")}
                multiline
                maxLength={200}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
        </View>
    )
}
const Step2 = ({ updateFormData, invalidFields }) => {
    return (
        <View style={styles.inputContainer}>
            <CustomDropDown
                setState={(value) => updateFormData("applicationType", value)}
                placeHolder={i18n.t("Common.MLAConstituency")}
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
            <CustomDropDown
                setState={(value) => updateFormData("benefits", value)}
                placeHolder={i18n.t("CreateApplication.WardName")}
                dropDownList={[
                    {
                        name: 'Benefit1',
                        value: 'Benefit1'
                    },
                    {
                        name: 'Benefit2',
                        value: 'Benefit2'
                    },
                ]}
            />
            <CustomDropDown
                setState={(value) => updateFormData("personDetails", value)}
                placeHolder={i18n.t("CreateApplication.VillageName")}
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
                placeholderText={i18n.t("Common.Booth")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText={i18n.t("CreateApplication.DoorNumber")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText={i18n.t("CreateApplication.Floor")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText={i18n.t("CreateApplication.BuildingName")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText={i18n.t("CreateApplication.OwnershipType")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText={i18n.t("CreateApplication.Cross")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText={i18n.t("CreateApplication.Main")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText={i18n.t("CreateApplication.Locality")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText={i18n.t("Common.PinCode")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
        </View>
    )
}
const Step3 = ({ updateFormData, invalidFields }) => {
    return (
        <View style={styles.inputContainer}>
            <CustomTextInput
                placeholderText={i18n.t("Common.FullName")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText={i18n.t("Common.Mobile")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText={i18n.t("Common.E-mail")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText={i18n.t("Common.CheckVoterId")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText={i18n.t("Common.AadharNumber")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomDatePicker
                placeHolder={i18n.t("CreateApplication.DOB")}
            />
            <CustomTextInput
                placeholderText={i18n.t("CreateApplication.Age")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomDropDown
                setState={(value) => updateFormData("gender", value)}
                placeHolder={i18n.t("CreateApplication.Gender")}
                dropDownList={[
                    {
                        name: 'Male',
                        value: 'Male'
                    },
                    {
                        name: 'Female',
                        value: 'Female'
                    },
                ]}
            />
            <CustomDropDown
                setState={(value) => updateFormData("benefits", value)}
                placeHolder={i18n.t("CreateApplication.Relationtype")}
                dropDownList={[
                    {
                        name: 'Benefit1',
                        value: 'Benefit1'
                    },
                    {
                        name: 'Benefit2',
                        value: 'Benefit2'
                    },
                ]}
            />
            <CustomDropDown
                setState={(value) => updateFormData("personDetails", value)}
                placeHolder={i18n.t("CreateApplication.Disabilities")}
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
            <CustomDropDown
                setState={(value) => updateFormData("personDetails", value)}
                placeHolder={i18n.t("CreateApplication.Areyouawidow")}
                dropDownList={[
                    {
                        name: 'Yes',
                        value: 'Yes'
                    },
                    {
                        name: 'No',
                        value: 'No  '
                    },
                ]}
            />
            <CustomDropDown
                setState={(value) => updateFormData("personDetails", value)}
                placeHolder={i18n.t("CreateApplication.Education")}
                dropDownList={[
                    {
                        name: 'Yes',
                        value: 'Yes'
                    },
                    {
                        name: 'No',
                        value: 'No  '
                    },
                ]}
            />
            <CustomDropDown
                setState={(value) => updateFormData("personDetails", value)}
                placeHolder={i18n.t("CreateApplication.Employment")}
                dropDownList={[
                    {
                        name: 'Yes',
                        value: 'Yes'
                    },
                    {
                        name: 'No',
                        value: 'No  '
                    },
                ]}
            />
        </View>
    )
}
const Step4 = ({ updateFormData, invalidFields }) => {
    return (
        <View style={styles.inputContainer}>
            <CustomTextInput
                placeholderText={i18n.t("Common.FullName")}
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
        </View>
    )
}
const CreateApplicationScreen = () => {
    const {
        register,
        invalidFields,
        updateFormData,
        formData,
        step,
        onClickNext
    } = CreateApplicationHooks()
    let stepsName = {
        1: i18n.t("CreateApplication.ApplicationDetails"),
        2: i18n.t("CreateApplication.ConstituencyDetails"),
        3: i18n.t("CreateApplication.PersonalDetails"),
        4: i18n.t("CreateApplication.DocumentsUpload")
    }

    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header headerText={i18n.t("CreateApplication.HeaderText")} />
                <Text style={styles.stepText}>
                    {i18n.t("CreateApplication.Step")} {step}/4: {stepsName[step]}
                </Text>
                <View style={styles.instructionsContainer}>
                    <Text style={styles.instructions}>
                        {i18n.t("CreateApplication.Instructon1")}
                    </Text>
                    <Text style={styles.instructions}>
                        {i18n.t("CreateApplication.Instructon2-1")} (<Text style={{ color: "#CB1517" }}>*</Text>) {i18n.t("CreateApplication.Instructon2-2")}
                    </Text>
                </View>
                {
                    step == 1
                        ?
                        <Step1 updateFormData={updateFormData} invalidFields={invalidFields} />
                        :
                        step == 2
                            ?
                            <Step2 updateFormData={updateFormData} invalidFields={invalidFields} />
                            :
                            step == 3
                                ?
                                <Step3 updateFormData={updateFormData} invalidFields={invalidFields} />
                                :
                                <Step4 updateFormData={updateFormData} invalidFields={invalidFields} />
                }
                {
                    step == 4
                    &&
                    <CustomCheckBox label={i18n.t("Common.AgreeTerms")} />
                }
                <GlobalButton
                    buttonPress={onClickNext}
                    externalButtonContainerStyle={{ marginTop: Constants.CHANGE_BY_MOBILE_DPI(20) }}
                    buttonText={step == 4 ? i18n.t("Common.Finish") : i18n.t("Common.Next")}
                />
            </ScrollView>
        </View>
    )
}
export default CreateApplicationScreen

