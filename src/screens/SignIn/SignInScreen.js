import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './SignInStyles'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors } from '../../global'
import GlobalTextInput from '../../components/GlobalTextInput/GlobalTextInput'
import GlobalButton from '../../components/GlobalButton/GlobalButton'
import { SignInHooks } from './SignInHooks'

const SignInScreen = () => {
    const {
        setMobileNumber,
        goToOtp,
        invalidFields
    } = SignInHooks()
    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.SNOW} isLightBar={false} isTopSpace={true} />
            <ScrollView>
                <View style={styles.alignCenterContainer}>
                    <Text style={styles.title}>Welcome back!</Text>
                    <Text style={styles.description}>Namaste,{'\n'}Kindly log in to proceed further.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <GlobalTextInput
                        externalPlaceholder='Username or mobile number'
                        required
                        setValue={setMobileNumber}
                        error={invalidFields.find(e => e.field == "mobileNumber")}
                        placeholderText={'Enter Username or mobile number'}
                    />
                </View>
                <GlobalButton
                    buttonPress={goToOtp}
                    buttonText='Get OTP'
                />
            </ScrollView>
        </View>
    )
}
export default SignInScreen

