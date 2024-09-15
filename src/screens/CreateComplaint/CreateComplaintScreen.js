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
import DropDownModal from '../../components/DropDownModal/DropDownModal'
import DownArrow from '../../assets/svgs/DropDownIcon.svg'
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker'
import CustomCheckBox from '../../components/CustomCheckBox/CustomCheckBox'
const CreateComplaintScreen = () => {
    const {
        register,
        invalidFields,
        updateFormData,
        formData
    } = CreateComplaintHooks()
    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header headerText="Lodge a complaint" headerDesc='Make sure you enter the details properly' />
                <View style={styles.inputContainer}>
                    <CustomDropDown
                        setState={(value) => updateFormData("ward", value)}
                        placeHolder={"Ward"}
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
                        placeHolder={"Village"}
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
                        placeholderText='Booth'
                        onChangeText={(value) => updateFormData("booth", value)}
                        error={invalidFields.find(e => e.field == "booth")}
                    />
                    <CustomDropDown
                        setState={(value) => updateFormData("complaintType", value)}
                        placeHolder={"Complaint type"}
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
                        placeholderText='Location / Landmark'
                        onChangeText={(value) => updateFormData("location", value)}
                        error={invalidFields.find(e => e.field == "location")}
                    />
                    <CustomTextInput
                        placeholderText='Complaint description'
                        multiline
                        maxLength={200}
                        onChangeText={(value) => updateFormData("complaintDescription", value)}
                        error={invalidFields.find(e => e.field == "complaintDescription")}
                    />
                    <CustomCheckBox label={'I Agree that the details provided by me are correct'} />
                </View>
                <GlobalButton
                    buttonPress={register}
                    buttonText='Submit'
                />
            </ScrollView>
        </View>
    )
}
export default CreateComplaintScreen

