import React from "react";
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { Colors, ScreenNames } from "../global";
import SplashScreen from "../screens/Splash/SplashScreen";
import { ActivityIndicator, View } from "react-native";
import SignInScreen from "../screens/SignIn/SignInScreen";
import OtpScreen from "../screens/Otp/OtpScreen";
import { isReadyRef, navigationRef } from "./RootNavigation";
import { useSelector } from "react-redux";
import HomeDrawer from "./Drawer/HomeDrawer";
import RegisterScreen from "../screens/Register/RegisterScreen";
import CreateComplaintScreen from "../screens/CreateComplaint/CreateComplaintScreen";
import CreateApplicationScreen from "../screens/CreateApplication/CreateApplicationScreen";
import ComplaintDetailScreen from "../screens/ComplaintDetail/ComplaintDetailScreen";
import ApplicationDetailScreen from "../screens/ApplicationDetail/ApplicationDetailScreen";
import GalleryDetailsScreen from "../screens/GalleryDetails/GalleryDetailsScreen";
import JoinAsMemberScreen from "../screens/JoinAsMember/JoinAsMemberScreen";
import JoinAsCommunityScreen from "../screens/JoinAsCommunity/JoinAsCommunityScreen";
import ChooseLanguage from "../screens/ChooseLanguage/ChooseLanguage";
import NotificationScreen from "../screens/Notification/NotificationScreen";
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
                    <Stack.Screen name={ScreenNames.REGISTER_SCREEN} component={RegisterScreen} />
                    <Stack.Screen name={ScreenNames.HOME_DRAWER} component={HomeDrawer} />
                    <Stack.Screen name={ScreenNames.CREATE_COMPLAINTS_SCREEN} component={CreateComplaintScreen} />
                    <Stack.Screen name={ScreenNames.CREATE_APPLICATIONS_SCREEN} component={CreateApplicationScreen} />
                    <Stack.Screen name={ScreenNames.COMPLAINT_DETAIL_SCREEN} component={ComplaintDetailScreen} />
                    <Stack.Screen name={ScreenNames.APPLICATION_DETAIL_SCREEN} component={ApplicationDetailScreen} />
                    <Stack.Screen name={ScreenNames.GALLERY_DETAILS_SCREEN} component={GalleryDetailsScreen} />
                    <Stack.Screen name={ScreenNames.JOIN_AS_MEMBER_SCREEN} component={JoinAsMemberScreen} />
                    <Stack.Screen name={ScreenNames.JOIN_AS_COMMUNITY_SCREEN} component={JoinAsCommunityScreen} />
                    <Stack.Screen name={ScreenNames.CHOOSE_LANGUAGE_SCREEN} component={ChooseLanguage} />
                    <Stack.Screen name={ScreenNames.NOTIFICATION_SCREEN} component={NotificationScreen} />
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