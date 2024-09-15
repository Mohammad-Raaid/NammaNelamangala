import React from 'react'
import { ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';
import * as UserAction from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { isValidPhoneNumber } from '../../global/validation';

const CreateApplicationHooks = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [step, setStep] = React.useState(1)
    const [formData, setFormData] = React.useState({
        applicationType: '',
        benefits: '',
        personDetails: '',
        description: '',
        mlaConstituency: '',
        location: '',
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

    const onClickNext = () => {
        setStep(step + 1)
    }

    React.useEffect(() => {
        setInvalidFields([])
    }, [formData])

    return {
        register,
        invalidFields,
        updateFormData,
        formData,
        step,
        onClickNext
    }
}

export { CreateApplicationHooks }
