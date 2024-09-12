import React from 'react';
import { ScreenNames } from '../../global/index';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import ApplicationsScreen from '../../screens/Applications/ApplicationsScreen';
enableScreens();
const Stack = createStackNavigator();
const ApplicationsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={ScreenNames.APPLICATIONS_SCREEN}>
            <Stack.Screen name={ScreenNames.APPLICATIONS_SCREEN} component={ApplicationsScreen} />
        </Stack.Navigator>
    );
};
export default ApplicationsStack;