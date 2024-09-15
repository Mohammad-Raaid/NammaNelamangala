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
                        placeholderText='Full name'
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
                        placeHolder={"Gender"}
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
                        placeholderText='Aadhar no.'
                        maxLength={12}
                        keyboardType='number-pad'
                        onChangeText={(value) => updateFormData("aadharNo", value)}
                        error={invalidFields.find(e => e.field == "aadharNo")}
                    />
                    <CustomTextInput
                        placeholderText='Ward / Hobli'
                        onChangeText={(value) => updateFormData("ward", value)}
                        error={invalidFields.find(e => e.field == "ward")}
                    />
                    <CustomTextInput
                        placeholderText='Village / Ward'
                        onChangeText={(value) => updateFormData("village", value)}
                        error={invalidFields.find(e => e.field == "village")}
                    />
                    <CustomTextInput
                        placeholderText='Booth'
                        onChangeText={(value) => updateFormData("booth", value)}
                        error={invalidFields.find(e => e.field == "booth")}
                    />
                    <CustomDropDown
                        setState={(value) => updateFormData("isVoter", value)}
                        placeHolder={"Are you a Voter / Non Voter?"}
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
                        placeholderText='Voter ID'
                        onChangeText={(value) => updateFormData("voterId", value)}
                        error={invalidFields.find(e => e.field == "voterId")}
                    />
                    <CustomTextInput
                        placeholderText='Mobile number'
                        onChangeText={(value) => updateFormData("mobileNumber", value)}
                        keyboardType='number-pad'
                        maxLength={10}
                        error={invalidFields.find(e => e.field == "mobileNumber")}
                    />
                    <CustomTextInput
                        placeholderText='Email ID'
                        keyboardType='email-address'
                        onChangeText={(value) => updateFormData("emailId", value)}
                        error={invalidFields.find(e => e.field == "emailId")}
                    />
                    <CustomDatePicker
                        placeHolder={"DOB"}
                        setState={(value) => updateFormData("dob", value)}
                    />
                    <CustomTextInput
                        placeholderText='Address'
                        multiline
                        maxLength={200}
                        onChangeText={(value) => updateFormData("aadharNo", value)}
                        error={invalidFields.find(e => e.field == "aadharNo")}
                    />
                    <CustomTextInput
                        placeholderText='Pincode'
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

