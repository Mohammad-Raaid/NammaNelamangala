import React from 'react'
import { ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';
import * as UserAction from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { isValidPhoneNumber } from '../../global/validation';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axiosInstance from '../../global/api-core';
import { mla_constituency_id, mp_constituency_id } from '../../global/config';
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
    const [successId, setSuccessId] = React.useState(null)
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
                data.append('main_village_id', formData?.main_village_id?.id)
            } else {
                data.append('main_village_id', 0)
            }
            if (formData?.booth_number_id) {
                data.append('booth_number_id', formData?.booth_number_id?.id)
            }
            if (formData?.complaint_type_id) {
                data.append('complaint_type_id', formData?.complaint_type_id?.id)
            }
            data.append('location', formData?.location)
            data.append('description', formData?.description)
            data.append('latitude', region?.latitude)
            data.append('longitude', region?.longitude)
            data.append('mp_constituency_id', mp_constituency_id)
            data.append('mla_constituency_id', mla_constituency_id)
            for (let i = 0; i < formData?.images.length; i++) {
                data.append('images[]', { uri: formData?.images[i].path, name: 'photo.png', filename: 'imageName.png', type: 'image/png' });
            }
            dispatch(UserAction.setOnScreenLodaer(true))
            fetch(axiosInstance.getUri() + '/user-complaint/new', {
                method: 'POST', headers: {
                    "Authorization": axiosInstance.defaults.headers.Authorization,
                    "Content-Type": "multipart/form-data",
                    "otherHeader": "foo",
                }, body: data
            }).then(async (res) => {
                const response = await res.json()
                setSuccessId(response.data.id)
                toggleVisibility()
            }).catch((error) => {
                console.log(error);
            })

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
                    setRegion({
                        latitude,
                        longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    });
                },
                (error) => {
                    console.error(error);
                },
                { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
            );
        } catch (err) {
            console.warn(err);
        }
    };
    React.useEffect(() => {
        setInvalidFields([])
        requestLocationPermission();
    }, [formData])

    return {
        submitComplaint,
        invalidFields,
        updateFormData,
        formData,
        visibility,
        toggleVisibility,
        region,
        successId
    }
}

export { CreateComplaintHooks }
