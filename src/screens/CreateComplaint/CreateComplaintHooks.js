import React from 'react'
import { ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';
import * as UserAction from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { isValidPhoneNumber } from '../../global/validation';

const CreateComplaintHooks = () => {

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
    const [visibility, setVisibility] = React.useState(false)
    const [invalidFields, setInvalidFields] = React.useState([])

    const toggleVisibility = () => setVisibility(!visibility)
    const updateFormData = (key, value) => {
        const data = formData;
        data[key] = value;
        setFormData(data)
    }

    const submitComplaint = async () => {
        // if (isValidPhoneNumber(mobileNumber).valid) {
        try {
            dispatch(UserAction.setOnScreenLodaer(true))
            toggleVisibility()
            dispatch(UserAction.setOnScreenLodaer(false))
        } catch (error) {
            dispatch(UserAction.setOnScreenLodaer(false))
            console.log("submitComplaint", error);

        }
    }

    React.useEffect(() => {
        setInvalidFields([])
    }, [formData])

    return {
        submitComplaint,
        invalidFields,
        updateFormData,
        formData,
        visibility,
        toggleVisibility
    }
}

export { CreateComplaintHooks }
