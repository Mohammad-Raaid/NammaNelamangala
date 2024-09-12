import React from 'react';
import { ScreenNames } from '../../global/index';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import ComplaintsScreen from '../../screens/Complaints/ComplaintsScreen';
enableScreens();
const Stack = createStackNavigator();
const ComplaintsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={ScreenNames.COMPLAINTS_SCREEN}>
            <Stack.Screen name={ScreenNames.COMPLAINTS_SCREEN} component={ComplaintsScreen} />
        </Stack.Navigator>
    );
};
export default ComplaintsStack;