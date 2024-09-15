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
const Step1 = ({ updateFormData, invalidFields }) => {
    return (
        <View style={styles.inputContainer}>
            <CustomDropDown
                setState={(value) => updateFormData("applicationType", value)}
                placeHolder={"Application type"}
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
                placeHolder={"Benefits / Schemes"}
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
                placeHolder={"Person details"}
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
                placeholderText='Description'
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
                placeHolder={"MLA Constituency"}
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
                placeHolder={"Ward name"}
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
                placeHolder={"Village name"}
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
                placeholderText='Booth'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='Door number'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='Floor'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='Building name'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='Ownership Type'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='Cross'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='Main'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='Locality'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='Pincode'
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
                placeholderText='Full name'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='Mobile'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='E-mail'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='Voter ID'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='Aadhar number'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomTextInput
                placeholderText='Age'
                onChangeText={(value) => updateFormData("complaintDescription", value)}
                error={invalidFields.find(e => e.field == "complaintDescription")}
            />
            <CustomDatePicker
                placeHolder={"DOB"}
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
            <CustomDropDown
                setState={(value) => updateFormData("benefits", value)}
                placeHolder={"Relation type"}
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
                placeHolder={"Disabilities"}
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
                placeHolder={"Are you a widow?"}
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
                placeHolder={"Education"}
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
                placeHolder={"Employment"}
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
        1: 'Application details',
        2: 'Constituency Details',
        3: 'Personal details',
        4: 'Documents upload'
    }

    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header headerText="Create application" />
                <Text style={styles.stepText}>
                    Step {step}/4: {stepsName[step]}
                </Text>
                <View style={styles.instructionsContainer}>
                    <Text style={styles.instructions}>
                        1. Make sure you enter the details properly
                    </Text>
                    <Text style={styles.instructions}>
                        2. Fields marked with an asterisk (<Text style={{ color: "#CB1517" }}>*</Text>) are mandatory to fill
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
                                null
                }
                {
                    step == 4
                    &&
                    <CustomCheckBox label={'I Agree that the details provided by me are correct'} />
                }
                <GlobalButton
                    buttonPress={onClickNext}
                    buttonText={step == 4 ? 'Finish' : 'Next'}
                />
            </ScrollView>
        </View>
    )
}
export default CreateApplicationScreen

