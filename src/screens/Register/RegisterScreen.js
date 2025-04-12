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
import { mla_constituency_id, mp_constituency_id } from '../../global/config'
const RegisterScreen = () => {
    const {
        register,
        invalidFields,
        updateFormData,
        formData,
        modalVisibility,
        toggleModalVisibility
    } = RegisterHooks()
    console.log(invalidFields);

    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header headerText="Register" />
                <View style={styles.inputContainer}>
                    <CustomTextInput
                        placeholderText={i18n.t("Common.FullName")}
                        onChangeText={(value) => updateFormData("full_name", value)}
                        error={invalidFields.find(e => e.field == "full_name")}
                    />
                    <CustomDropDown
                        setState={(value) => updateFormData("gender", value)}
                        placeHolder={i18n.t("RegisterSection.SelectGender")}
                        endPoint={'getOpen/gender'}
                        body={{}}
                        dropDownSearchKey={'disp_name'}
                        error={invalidFields.find(e => e.field == "gender")}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("Common.AadharNo")}
                        maxLength={12}
                        keyboardType='number-pad'
                        onChangeText={(value) => updateFormData("aadhaar_number", value)}
                        error={invalidFields.find(e => e.field == "aadhaar_number")}
                    />
                    <CustomDropDown
                        placeHolder={i18n.t("Common.Ward")}
                        endPoint={'/getOpen/ward_number'}
                        body={{
                            mla_constituency_id: mla_constituency_id,
                            mp_constituency_id: mp_constituency_id
                        }}
                        dropDownSearchKey={'disp_name'}
                        setState={(value) => updateFormData("ward_number_id", value)}
                        error={invalidFields.find(e => e.field == "ward_number_id")}
                    />
                    <CustomDropDown
                        placeHolder={i18n.t("Common.VillageName")}
                        endPoint={'/getOpen/main_village'}
                        body={{
                            mla_constituency_id: mla_constituency_id,
                            mp_constituency_id: mp_constituency_id
                        }}
                        dropDownSearchKey={'disp_name'}
                        setState={(value) => updateFormData("main_village_id", value)}
                        error={invalidFields.find(e => e.field == "main_village_id")}
                    />
                    {/* Convert to Dropdown */}
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
                        error={invalidFields.find(e => e.field == "booth_number_id")}
                    />
                    <CustomDropDown
                        setState={(value) => updateFormData("is_voter", value)}
                        placeHolder={i18n.t("RegisterSection.VoterValidation")}
                        dropDownSearchKey={'name'}
                        dropDownList={[
                            {
                                name: 'Yes',
                                value: '1'
                            },
                            {
                                name: 'No',
                                value: '0'
                            },
                        ]}
                        error={invalidFields.find(e => e.field == "is_voter")}
                    />
                    {
                        formData?.is_voter == "1"
                        &&
                        <CustomTextInput
                            placeholderText={i18n.t("Common.CheckVoterId")}
                            onChangeText={(value) => updateFormData("voter_id_number", value)}
                            error={invalidFields.find(e => e.field == "voter_id_number")}
                        />
                    }
                    <CustomTextInput
                        placeholderText={i18n.t("RegisterSection.MobileNumber")}
                        onChangeText={(value) => updateFormData("contact_number", value)}
                        keyboardType='number-pad'
                        maxLength={10}
                        error={invalidFields.find(e => e.field == "contact_number")}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("RegisterSection.EmailIdText")}
                        keyboardType='email-address'
                        onChangeText={(value) => updateFormData("email", value)}
                        error={invalidFields.find(e => e.field == "email")}
                    />
                    <CustomDatePicker
                        placeHolder={i18n.t("RegisterSection.DOB")}
                        setState={(value) => updateFormData("date_of_birth", value)}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("RegisterSection.RegisterAddress")}
                        multiline
                        maxLength={200}
                        onChangeText={(value) => updateFormData("full_address", value)}
                        error={invalidFields.find(e => e.field == "full_address")}
                    />
                    <CustomTextInput
                        placeholderText={i18n.t("Common.PinCode")}
                        keyboardType='number-pad'
                        maxLength={6}
                        onChangeText={(value) => updateFormData("pincode", value)}
                        error={invalidFields.find(e => e.field == "pincode")}
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

