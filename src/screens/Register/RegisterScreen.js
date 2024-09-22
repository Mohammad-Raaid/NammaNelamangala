import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './RegisterStyles'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constants } from '../../global'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import GlobalButton from '../../components/CustomButton/CustomButton'
import { RegisterHooks } from './RegisterHooks'
import Carousel from 'react-native-reanimated-carousel'
import Header from '../../components/Header/Header'
import CustomDropDown from '../../components/CustomDropDown/CustomDropDown'
import DropDownModal from '../../components/DropDownModal/DropDownModal'
import DownArrow from '../../assets/svgs/DropDownIcon.svg'
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker'
import i18n from '../../i18n'
const RegisterScreen = () => {
    const {
        register,
        invalidFields,
        updateFormData,
        formData,
        modalVisibility,
        toggleModalVisibility
    } = RegisterHooks()
    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header headerText="Register" />
                <View style={styles.inputContainer}>
                    <CustomTextInput
                        placeholderText={i18n.t("Common.FullName")}
                        onChangeText={(value) => updateFormData("fullName", value)}
                        Prefix={() => {
                            return (
                                <TouchableOpacity onPress={toggleModalVisibility} style={styles.fullNamePrefix}>
                                    <Text style={styles.fullNamePrefixText}>
                                        {formData?.namePrefix}
                                    </Text>
                                    <DownArrow fill={Colors.GRAY_90} />
                                </TouchableOpacity>
                            )
                        }}
                        error={invalidFields.find(e => e.field == "fullName")}
                    />
                    <CustomDropDown
                        setState={(value) => updateFormData("gender", value)}
                        placeHolder={i18n.t("RegisterSection.SelectGender")}
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
                    <CustomTextInput
                        placeholderText={i18n.t("Common.AadharNumber")}
                        maxLength={12}
                        keyboardType='number-pad'
                        onChangeText={(value) => updateFormData("aadharNo", value)}
                        error={invalidFields.find(e => e.field == "aadharNo")}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("Common.Ward") + "/ " + i18n.t("Common.Hobli")}
                        onChangeText={(value) => updateFormData("ward", value)}
                        error={invalidFields.find(e => e.field == "ward")}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("Common.VillageName") + "/ " + i18n.t("Common.Ward")}
                        onChangeText={(value) => updateFormData("village", value)}
                        error={invalidFields.find(e => e.field == "village")}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("Common.Booth")}
                        onChangeText={(value) => updateFormData("booth", value)}
                        error={invalidFields.find(e => e.field == "booth")}
                    />
                    <CustomDropDown
                        setState={(value) => updateFormData("isVoter", value)}
                        placeHolder={i18n.t("RegisterSection.VoterValidation")}
                        dropDownList={[
                            {
                                name: 'Yes',
                                value: 'Yes'
                            },
                            {
                                name: 'No',
                                value: 'No'
                            },
                        ]}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("Common.CheckVoterId")}
                        onChangeText={(value) => updateFormData("voterId", value)}
                        error={invalidFields.find(e => e.field == "voterId")}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("RegisterSection.MobileNumber")}
                        onChangeText={(value) => updateFormData("mobileNumber", value)}
                        keyboardType='number-pad'
                        maxLength={10}
                        error={invalidFields.find(e => e.field == "mobileNumber")}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("RegisterSection.EmailIdText")}
                        keyboardType='email-address'
                        onChangeText={(value) => updateFormData("emailId", value)}
                        error={invalidFields.find(e => e.field == "emailId")}
                    />
                    <CustomDatePicker
                        placeHolder={i18n.t("RegisterSection.DOB")}
                        setState={(value) => updateFormData("dob", value)}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("RegisterSection.RegisterAddress")}
                        multiline
                        maxLength={200}
                        onChangeText={(value) => updateFormData("aadharNo", value)}
                        error={invalidFields.find(e => e.field == "aadharNo")}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("RegisterSection.RegisterPinCode")}
                        keyboardType='number-pad'
                        maxLength={6}
                        onChangeText={(value) => updateFormData("aadharNo", value)}
                        error={invalidFields.find(e => e.field == "aadharNo")}
                    />
                </View>
                <GlobalButton
                    buttonPress={register}
                    buttonText='Register'
                />
                <DropDownModal visibility={modalVisibility} toggleVisibility={toggleModalVisibility} dropDownList={[
                    {
                        name: 'Mr',
                        value: 'Mr'
                    },
                    {
                        name: 'Ms',
                        value: 'Ms'
                    },
                    {
                        name: 'Mrs',
                        value: 'Mrs'
                    },
                ]} setState={(value) => updateFormData("namePrefix", value.name)} state={formData?.namePrefix} />
            </ScrollView>
        </View>
    )
}
export default RegisterScreen

