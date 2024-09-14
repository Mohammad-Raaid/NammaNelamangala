import React from 'react'
import { ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';
import * as UserAction from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { isValidPhoneNumber } from '../../global/validation';

const RegisterHooks = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [formData, setFormData] = React.useState({
        namePrefix: 'Mr',
        fullName: '',
        gender: '',
        aadharNo: '',
        ward: '',
        village: '',
        booth: '',
        isVoter: '',
        voterId: '',
        mobileNumber: '',
        emailId: '',
        dob: '',
        address: '',
        pincode: ''
    })
    const [invalidFields, setInvalidFields] = React.useState([])
    const [modalVisibility, setModalVisibility] = React.useState(false)
    const toggleModalVisibility = () => setModalVisibility(!modalVisibility)
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
        // } else {
        //     let invalidFields = []
        //     if (!isValidPhoneNumber(mobileNumber).valid) {
        //         invalidFields.push({
        //             field: "mobileNumber",
        //             errorMessage: isValidPhoneNumber(mobileNumber).message
        //         })
        //     }
        //     setInvalidFields(invalidFields)
        // }

    }

    React.useEffect(() => {
        setInvalidFields([])
    }, [formData])

    return {
        register,
        invalidFields,
        updateFormData,
        formData,
        modalVisibility,
        toggleModalVisibility
    }
}

export { RegisterHooks }
