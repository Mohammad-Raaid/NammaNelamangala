import React from 'react'
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { ScreenNames } from '../../global';
import * as UserActions from '../../redux/actions/userAction';
const OtpHooks = () => {

    const navigation = useNavigation()
    const otpInput = React.useRef(null);

    const route = useRoute()
    const dispatch = useDispatch();

    // state
    const [confirm, setConfirm] = React.useState(null);
    const [code, setCode] = React.useState('');
    const [countdown, setCountdown] = React.useState(60);
    const [canResend, setCanResend] = React.useState(false);
    // function
    const resetStackAndGoToHome = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.HOME_DRAWER }],
    });
    const resetStackAndGoToRegister = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.REGISTER_SCREEN }],
    });

    const goToHome = async (autoVerified = false) => {
        dispatch(UserActions.setOnScreenLodaer(true))
        if (!autoVerified) {
            try {
                // if (confirm) {
                //     await confirm.confirm(code)
                // }
            } catch (error) {
                dispatch(UserActions.setOnScreenLodaer(false))
                console.log('goToHome_error', error.message)
                return;
            }
        }
        try {
            navigation.dispatch(resetStackAndGoToRegister)
            // navigation.dispatch(resetStackAndGoToHome)
            dispatch(UserActions.setOnScreenLodaer(false))
        } catch (error) {
            dispatch(UserActions.setOnScreenLodaer(false))
            console.log('goToHome_error', error.message)
        }
    }

    const resendOtp = () => {
        setCountdown(60)
    }
    // const sendOtptoFirebase = async () => {
    //     try {
    //         const result = auth().currentUser
    //         console.log(result);
    //         if (result) {
    //             await auth().signOut()
    //         }
    //         setTimeout(() => {
    //         }, 10000)
    //         const confirmation = await auth().signInWithPhoneNumber(`+91${route.params.userData.mobileNumber}`, Platform.select({ android: true, ios: false }));
    //         setConfirm(confirmation);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // // useEffect
    // React.useEffect(() => {
    //     sendOtptoFirebase()
    // }, [])

    // React.useEffect(() => {
    //     startOtpListener(message => {
    //         if (message && message != "Timeout Error.") {
    //             const otp = /(\d{6})/g.exec(message)[1];
    //             otpInput.current.setValue(otp);
    //             setCode(otp)
    //             setTimeout(() => {
    //                 goToHome(true)
    //             }, 1000);
    //         }
    //     });
    //     return () => removeListener();
    // }, []);

    React.useEffect(() => {
        let interval;
        if (countdown > 0) {
            interval = setInterval(() => {
                let num = countdown - 1;
                if (num < 10) {
                    setCountdown(`0${num}`);
                } else {
                    setCountdown(num);
                }
            }, 1000);
        } else {
            setCanResend(true);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [countdown]);
    return {
        goToHome,
        setCode,
        code,
        otpInput,
        countdown,
        resendOtp
    }
}

export { OtpHooks }
