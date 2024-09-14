import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { styles } from './SignInStyles'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constants } from '../../global'
import GlobalTextInput from '../../components/GlobalTextInput/GlobalTextInput'
import GlobalButton from '../../components/GlobalButton/GlobalButton'
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
                <Carousel
                    loop
                    width={Constants.SCREEN_WIDTH}
                    height={Constants.SCREEN_WIDTH / 1.6}
                    autoPlay={true}
                    style={{ marginTop: Constants.CHANGE_BY_MOBILE_DPI(20) }}
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

