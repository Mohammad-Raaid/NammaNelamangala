import React from 'react'
import { ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';
import * as UserAction from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { isValidPhoneNumber } from '../../global/validation';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axiosInstance from '../../global/api-core';
const CreateComplaintHooks = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [formData, setFormData] = React.useState({
        ward_number_id: null,
        main_village_id: null,
        booth_number_id: null,
        complaint_type_id: null,
        location: '',
        description: '',
        images: []
    })
    const [visibility, setVisibility] = React.useState(false)
    const [invalidFields, setInvalidFields] = React.useState([])
    const [rerender, setRerender] = React.useState(false)
    const [region, setRegion] = React.useState(null);

    const toggleVisibility = () => setVisibility(!visibility)
    const updateFormData = (key, value) => {
        const data = formData;
        data[key] = value;
        if (key == "ward_number_id" || key == "main_village_id") {
            setRerender(!rerender)
        }
        setFormData(data)
    }

    const submitComplaint = async () => {
        // if (isValidPhoneNumber(mobileNumber).valid) {
        try {
            const data = new FormData();
            if (formData?.ward_number_id) {
                data.append('ward_number_id', formData?.ward_number_id?.id)
            }
            if (formData?.main_village_id) {
                data.append('ward_number_id', formData?.main_village_id?.id)
            }
            if (formData?.booth_number_id) {
                data.append('ward_number_id', formData?.booth_number_id?.id)
            }
            if (formData?.complaint_type_id) {
                data.append('ward_number_id', formData?.complaint_type_id?.id)
            }
            data.append('ward_number_id', formData?.location)
            data.append('description', formData?.description)
            data.append('latitude', region?.latitude)
            data.append('longitude', region?.longitude)
            for (let i = 0; i < formData?.images.length; i++) {
                data.append('images[]', formData?.images[i])
            }
            dispatch(UserAction.setOnScreenLodaer(true))
            const response = await axiosInstance.post(`user-complaint/new`, data)
            if (response.status == 200 || response.status == 201) {
                toggleVisibility()
            }
            dispatch(UserAction.setOnScreenLodaer(false))
        } catch (error) {
            dispatch(UserAction.setOnScreenLodaer(false))
            console.log("submitComplaint", error);

        }
    }

    const requestLocationPermission = async () => {
        try {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
                if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Location permission denied');
                    return;
                }
            }
            Geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    // setRegion({
                    //     latitude,
                    //     longitude,
                    //     latitudeDelta: 0.01,
                    //     longitudeDelta: 0.01,
                    // });
                },
                (error) => {
                    console.error(error);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        } catch (err) {
            console.warn(err);
        }
    };
    React.useEffect(() => {
        setInvalidFields([])
        // requestLocationPermission();
    }, [formData])

    return {
        submitComplaint,
        invalidFields,
        updateFormData,
        formData,
        visibility,
        toggleVisibility,
        region
    }
}

export { CreateComplaintHooks }
