import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { styles } from './SignInStyles'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constants } from '../../global'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import GlobalButton from '../../components/CustomButton/CustomButton'
import { SignInHooks } from './SignInHooks'
import Carousel from 'react-native-reanimated-carousel'

const SignInScreen = () => {
    const {
        setMobileNumber,
        goToOtp,
        invalidFields,
        bannerImages
    } = SignInHooks()
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
                    <View style={styles.imageBorder}>
                        <Image
                            resizeMode="cover"
                            source={require('../../assets/images/logo-2.png')}
                        />
                    </View>
                </View>
                <Carousel
                    loop
                    width={Constants.SCREEN_WIDTH}
                    height={Constants.SCREEN_WIDTH / 1.6}
                    autoPlay={true}
                    style={{ marginTop: Constants.CHANGE_BY_MOBILE_DPI(36) }}
                    data={bannerImages}
                    scrollAnimationDuration={3000}
                    renderItem={({ item }) => (
                        <Image
                            resizeMode="cover"
                            style={styles.bannerImage}
                            source={item}
                        />
                    )}
                />
                <View style={styles.alignCenterContainer}>
                    <Text style={styles.title}>ನಮ್ಮ ನೆಲಮಂಗಲ</Text>
                    <Text style={styles.description}>Login to be a part of our local improvement</Text>
                </View>
                <View style={styles.inputContainer}>
                    <CustomTextInput
                        placeholderText='Enter phone number to recieve an OTP'
                        onChangeText={setMobileNumber}
                        maxLength={10}
                        Prefix={() => {
                            return (
                                <View style={styles.phoneCodeContainer}>
                                    <Text style={styles.phoneCode}>
                                        +91
                                    </Text>
                                    <View style={styles.divider} />
                                </View>
                            )
                        }}
                        placeholderStyle={styles.inputPlaceholder}
                        error={invalidFields.find(e => e.field == "mobileNumber")}
                    />
                </View>
                <GlobalButton
                    buttonPress={goToOtp}
                    buttonText='Continue'
                />
            </ScrollView>
            <Text style={styles.footerText}>
                Ravikumar Foundation®
            </Text>
        </View>
    )
}
export default SignInScreen

