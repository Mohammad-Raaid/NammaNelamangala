import React from 'react'
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constants } from '../../global/index'
import GlobalButton from '../../components/CustomButton/CustomButton'
import { styles } from './OtpStyles'
import { OtpHooks } from './OtpHooks'
import OTPTextInput from 'react-native-otp-textinput';
const OtpScreen = () => {
    const {
        goToHome,
        code,
        setCode,
        otpInput
    } = OtpHooks()
    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.SNOW} isLightBar={false} isTopSpace={true} />
            <View style={styles.alignCenterContainer}>
                <Text style={styles.title}>Enter OTP</Text>
                <Text style={styles.description}>Enter Unique verification code{'\n'} which you have received on your{'\n'} phone number.</Text>
            </View>
            <View style={styles.otpInputContainer}>
                <OTPTextInput
                    handleTextChange={(item) => {
                        setCode(item);
                        if (item.length == 6) {
                            Keyboard.dismiss();
                        }
                    }}
                    underlineColorAndroid='transparent'
                    ref={otpInput}
                    inputCount={6}
                    tintColor={Colors.RICH_BLACK_30}
                    offTintColor={Colors.GRAY_MEDIUM}
                    containerStyle={styles.otpContainer}
                    textInputStyle={styles.textInputStyle}
                />
            </View>
            <View style={styles.footerContainer}>
                <GlobalButton
                    buttonPress={() => {
                        if (code.length == 6) {
                            goToHome()
                        } else {
                            setToastMsgData({
                                isOpen: true,
                                errorMessage: "Please Enter Otp"
                            })
                        }
                    }}
                    buttonText='Submit'
                />
            </View>
        </View>
    )
}
export default OtpScreen