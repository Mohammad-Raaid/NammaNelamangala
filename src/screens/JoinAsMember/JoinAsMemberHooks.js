import React from 'react'
import { ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';
import * as UserAction from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { isValidPhoneNumber } from '../../global/validation';

const JoinAsMemberHooks = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [formData, setFormData] = React.useState({
        ward: '',
        village: '',
        booth: '',
        complaintType: '',
        location: '',
        complaintDescription: ''
    })
    const [invalidFields, setInvalidFields] = React.useState([])
    const resetStackAndGoToHome = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.HOME_DRAWER, }],
    });

    const updateFormData = (key, value) => {
        const data = formData;
        data[key] = value;
        setFormData(data)
    }

    const register = async () => {
        // if (isValidPhoneNumber(mobileNumber).valid) {
        try {
            dispatch(UserAction.setOnScreenLodaer(true))
            navigation.dispatch(resetStackAndGoToHome)
            dispatch(UserAction.setOnScreenLodaer(false))
        } catch (error) {
            dispatch(UserAction.setOnScreenLodaer(false))
            console.log("register", error);

        }
    }

    React.useEffect(() => {
        setInvalidFields([])
    }, [formData])

    return {
        register,
        invalidFields,
        updateFormData,
        formData,
    }
}

export { JoinAsMemberHooks }
