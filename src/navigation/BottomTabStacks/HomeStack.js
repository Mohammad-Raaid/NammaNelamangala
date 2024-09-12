import React from 'react';
import { ScreenNames } from '../../global/index';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Home/HomeScreen';


enableScreens();
const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={ScreenNames.HOME_SCREEN}>
            <Stack.Screen name={ScreenNames.HOME_SCREEN} component={HomeScreen} />
        </Stack.Navigator>
    );
};
export default HomeStack;