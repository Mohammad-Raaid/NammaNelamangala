import React from 'react'
import { ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';
import * as UserAction from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';

const SignInHooks = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [mobileNumber, setMobileNumber] = React.useState('')
    const [invalidFields, setInvalidFields] = React.useState([])
    const [bannerImages] = React.useState([
        require('../../assets/images/loginBanner/1.jpeg'),
        require('../../assets/images/loginBanner/2.jpeg'),
        require('../../assets/images/loginBanner/3.jpeg'),
        require('../../assets/images/loginBanner/4.jpeg'),
        require('../../assets/images/loginBanner/5.jpeg'),
    ])
    const resetStackAndGoToBottom = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.BOTTOM_TABS, }],
    });



    const goToOtp = async () => {
        if (mobileNumber != "") {
            try {
                dispatch(UserAction.setOnScreenLodaer(true))
            } catch (error) {
                dispatch(UserAction.setOnScreenLodaer(false))
                console.log("goToOtp", error);

            }
        } else {
            let invalidFields = []
            if (mobileNumber == "") {
                invalidFields.push({
                    field: "mobileNumber",
                    errorMessage: "This field is cannot be empty"
                })
            }
            if (password == "") {
                invalidFields.push({
                    field: "password",
                    errorMessage: "This field is cannot be empty"
                })
            }
            setInvalidFields(invalidFields)
        }

    }

    React.useEffect(() => {
        setInvalidFields([])
    }, [mobileNumber])

    return {
        setMobileNumber,
        goToOtp,
        invalidFields,
        bannerImages
    }
}

export { SignInHooks }
