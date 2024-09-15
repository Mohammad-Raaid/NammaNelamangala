import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './JoinAsMemberStyles'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constants } from '../../global'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import GlobalButton from '../../components/CustomButton/CustomButton'
import { JoinAsMemberHooks } from './JoinAsMemberHooks'
import Carousel from 'react-native-reanimated-carousel'
import Header from '../../components/Header/Header'
import CustomDropDown from '../../components/CustomDropDown/CustomDropDown'
import DropDownModal from '../../components/DropDownModal/DropDownModal'
import DownArrow from '../../assets/svgs/DropDownIcon.svg'
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker'
import CustomCheckBox from '../../components/CustomCheckBox/CustomCheckBox'
const JoinAsMemberScreen = () => {
    const {
        register,
        invalidFields,
        updateFormData,
        formData
    } = JoinAsMemberHooks()
    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header headerText="Join as member" />
                <View style={styles.instructionsContainer}>
                    <Text style={styles.instructions}>
                        1. Make sure you enter the details properly
                    </Text>
                    <Text style={styles.instructions}>
                        2. Fields marked with an asterisk (<Text style={{ color: "#CB1517" }}>*</Text>) are mandatory to fill
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <CustomDropDown
                        setState={(value) => updateFormData("ward", value)}
                        placeHolder={"Type of Membership"}
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
                    <CustomTextInput
                        placeholderText='Instagram / Other social links'
                        onChangeText={(value) => updateFormData("booth", value)}
                        error={invalidFields.find(e => e.field == "booth")}
                    />
                    <CustomTextInput
                        placeholderText='Whatsapp number'
                        onChangeText={(value) => updateFormData("location", value)}
                        error={invalidFields.find(e => e.field == "location")}
                    />
                    <CustomTextInput
                        placeholderText='Voter ID'
                        onChangeText={(value) => updateFormData("location", value)}
                        error={invalidFields.find(e => e.field == "location")}
                    />
                    <CustomTextInput
                        placeholderText='Education'
                        onChangeText={(value) => updateFormData("location", value)}
                        error={invalidFields.find(e => e.field == "location")}
                    />
                    <CustomTextInput
                        placeholderText='Total family members'
                        onChangeText={(value) => updateFormData("location", value)}
                        error={invalidFields.find(e => e.field == "location")}
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
                    <CustomDropDown
                        setState={(value) => updateFormData("personDetails", value)}
                        placeHolder={"Residence type"}
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
                    <CustomCheckBox label={'I Agree that the details provided by me are correct'} />
                </View>
                <GlobalButton
                    buttonPress={register}
                    buttonText='Done'
                />
            </ScrollView>
        </View>
    )
}
export default JoinAsMemberScreen

