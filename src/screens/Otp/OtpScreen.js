import React from 'react'
import { Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constants } from '../../global/index'
import GlobalButton from '../../components/CustomButton/CustomButton'
import { styles } from './OtpStyles'
import { OtpHooks } from './OtpHooks'
import OTPTextInput from 'react-native-otp-textinput';
import i18n from '../../i18n'
const OtpScreen = () => {
    const {
        goToHome,
        code,
        setCode,
        otpInput,
        countdown,
        resendOtp
    } = OtpHooks()
    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <ScrollView>
                <View style={styles.images}>
                    <View style={styles.imageBorder}>
                        <Image
                            resizeMode="contain"
                            style={styles.image}
                            source={require('../../assets/images/logo.png')}
                        />
                    </View>
                    <Text style={styles.headerText}>
                        ನಮ್ಮ ನೆಲಮಂಗಲ
                    </Text>
                    <View style={styles.imageBorder}>
                        <Image
                            resizeMode="cover"
                            source={require('../../assets/images/logo-2.png')}
                        />
                    </View>
                </View>
                <View style={styles.alignCenterContainer}>
                    <Text style={styles.title}>{i18n.t("OtpSection.VerifyText")}</Text>
                    <Text style={styles.description}>{i18n.t("OtpSection.OtpText")}</Text>
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
                        tintColor={Colors.PRIMARY}
                        offTintColor={Colors.GRAY_85}
                        containerStyle={styles.otpContainer}
                        textInputStyle={styles.textInputStyle}
                    />
                </View>
                <GlobalButton
                    buttonPress={() => {
                        if (code.length == 6) {
                            goToHome()
                        } else {
                            // setToastMsgData({
                            //     isOpen: true,
                            //     errorMessage: "Please Enter Otp"
                            // })
                        }
                    }}
                    externalButtonContainerStyle={styles.buttonContainer}
                    buttonText={i18n.t("Common.ContinueButtonText")}
                />
                <Text style={styles.resendOtp} onPress={resendOtp}>
                    {i18n.t("OtpSection.ResendOtpText")}{countdown != 0 ? ` in 00:${countdown}` : ``}
                </Text>
            </ScrollView>
            <Text style={styles.footerText}>
                Ravikumar Foundation®
            </Text>
        </View>
    )
}
export default OtpScreen;