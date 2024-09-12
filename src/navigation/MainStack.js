import React from "react";
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { Colors, ScreenNames } from "../global";
import SplashScreen from "../screens/Splash/SplashScreen";
import { ActivityIndicator, View } from "react-native";
import SignInScreen from "../screens/SignIn/SignInScreen";
import OtpScreen from "../screens/Otp/OtpScreen";
import BottomTabs from "./BottomTabs/BottomTabs";
import { isReadyRef, navigationRef } from "./RootNavigation";
import { useSelector } from "react-redux";
enableScreens();
const Stack = createStackNavigator();

const MainStack = () => {
    const onScreenLoader = useSelector(state => state?.user?.onScreenLodaer);
    return (
        <>
            <NavigationContainer
                ref={navigationRef}
                onReady={() => {
                    isReadyRef.current = true;
                }}
            >
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName={ScreenNames.SPLASH_SCREEN}>
                    <Stack.Screen name={ScreenNames.SPLASH_SCREEN} component={SplashScreen} />
                    <Stack.Screen name={ScreenNames.SIGNIN_SCREEN} component={SignInScreen} />
                    <Stack.Screen name={ScreenNames.OTP_SCREEN} component={OtpScreen} />
                    <Stack.Screen name={ScreenNames.BOTTOM_TABS} component={BottomTabs} />
                </Stack.Navigator>
            </NavigationContainer>

            {
                onScreenLoader &&
                <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#00000020', alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator
                        size={50}
                        color={Colors.PRIMARY}
                    />
                </View>
            }
        </>
    )
}
export default MainStack;