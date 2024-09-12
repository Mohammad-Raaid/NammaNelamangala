import React from 'react';
import { ScreenNames } from '../../global/index';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from '../../screens/Gallery/GalleryScreen';
enableScreens();
const Stack = createStackNavigator();
const GalleryStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={ScreenNames.GALLERY_SCREEN}>
            <Stack.Screen name={ScreenNames.GALLERY_SCREEN} component={GalleryScreen} />
        </Stack.Navigator>
    );
};
export default GalleryStack;