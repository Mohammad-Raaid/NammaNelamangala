import { CommonActions } from '@react-navigation/native';
import * as React from 'react';
import { ScreenNames } from '../global';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();
// dispatch navigation
const resetStackAndGoToWelcome = CommonActions.reset({
    index: 0,
    routes: [{ name: ScreenNames.SIGNIN_SCREEN }],
});
export function navigate(name, params) {
    if (isReadyRef.current && navigationRef.current) {
        // Perform navigation if the app has mounted
        navigationRef.current.dispatch(resetStackAndGoToWelcome);
    } else {
        // You can decide what to do if the app hasn't mounted
        // You can ignore this, or add these actions to a queue you can call later
    }
}