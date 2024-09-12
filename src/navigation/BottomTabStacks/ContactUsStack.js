import React from 'react';
import { ScreenNames } from '../../global/index';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import ContactUsScreen from '../../screens/ContactUs/ContactUsScreen';
enableScreens();
const Stack = createStackNavigator();
const ContactUsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={ScreenNames.CONTACT_US_SCREEN}>
            <Stack.Screen name={ScreenNames.CONTACT_US_SCREEN} component={ContactUsScreen} />
        </Stack.Navigator>
    );
};
export default ContactUsStack;