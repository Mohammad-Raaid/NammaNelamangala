import React from 'react'
import { ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';
import * as UserAction from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { isValidPhoneNumber } from '../../global/validation';
import i18n from '../../i18n';
import axiosInstance from '../../global/api-core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as UserActions from '../../redux/actions/userAction'
import { mla_constituency_id, mp_constituency_id } from '../../global/config';
const RegisterHooks = () => {
    const validationRegExp = {
        pincode: /^[0-9]{6}$/,
        voter_id_number: /^[a-zA-Z]{3}[0-9]{7}$/,
        mobile_number: /^[6-9][0-9]{9}$/,
        aadhaar_number: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
        disp_name: /^[a-zA-Z ]{3,50}$/,
        email:
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        mapSlNo: /^[1-9][0-9]{0,4}(\/[1-9][0-9]{0,1})?$/,
    }
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [formData, setFormData] = React.useState({
        namePrefix: 'Mr',
        full_name: '',
        gender: null,
        aadhaar_number: '',
        ward_number_id: null,
        main_village_id: null,
        booth_number_id: null,
        is_voter: null,
        voter_id_number: '',
        contact_number: '',
        email: '',
        dob: '',
        full_address: '',
        pincode: ''
    })
    const [invalidFields, setInvalidFields] = React.useState([])
    const [modalVisibility, setModalVisibility] = React.useState(false)
    const [rerender, setRerender] = React.useState(false)

    const toggleModalVisibility = () => setModalVisibility(!modalVisibility)
    const resetStackAndGoToHome = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.HOME_DRAWER, }],
    });

    const updateFormData = (key, value) => {
        const data = formData;
        setInvalidFields([])
        if (key == "is_voter") {
            setRerender(!rerender)
        }
        data[key] = value;
        setFormData(data)
    }

    const register = async () => {
        if (
            isValidPhoneNumber(formData?.contact_number).valid
            && formData?.gender != null
            && validationRegExp.aadhaar_number.test(formData?.aadhaar_number)
            && validationRegExp.email.test(formData?.email)
            && formData.full_name != ''
            && (formData?.ward_number_id != null || formData?.main_village_id != null)
            && formData?.booth_number_id != null
            && formData?.is_voter != null
            && (formData?.is_voter?.value == "1" ? validationRegExp.voter_id_number.test(formData?.voter_id_number) : true)
            && formData?.full_address != ''
            && validationRegExp.pincode.test(formData?.pincode)
        ) {
            try {
                let data = { ...formData }
                data = {
                    ...formData,
                    ward_number_id: formData?.ward_number_id?.id,
                    booth_number_id: formData?.booth_number_id?.id,
                    is_voter: formData?.is_voter?.value,
                    gender: formData?.gender?.id,
                    mla_constituency_id: mla_constituency_id,
                    mp_constituency_id: mp_constituency_id
                }
                const response = await axiosInstance.post(`user/public-register`, data)
                if (response?.data?.success === true) {
                    await AsyncStorage.setItem('userData', JSON.stringify(response.data.user))
                    await AsyncStorage.setItem('token', response.data.token)
                    axiosInstance.defaults.headers['Authorization'] = `Bearer ${response.data.token}`
                    dispatch(UserActions.setUser(response.data.user))
                    navigation.dispatch(resetStackAndGoToHome)
                }
                dispatch(UserAction.setOnScreenLodaer(true))
                dispatch(UserAction.setOnScreenLodaer(false))
            } catch (error) {
                dispatch(UserAction.setOnScreenLodaer(false))
                console.log("register", error);

            }
        } else {
            let invalidFields = []
            if (!isValidPhoneNumber(formData?.contact_number).valid) {
                invalidFields.push({
                    field: "contact_number",
                    errorMessage: isValidPhoneNumber(formData?.contact_number).message
                })
            }
            if (formData?.email == '' && !validationRegExp.email.test(formData?.email)) {
                invalidFields.push({
                    field: "email",
                    errorMessage: i18n.t("Validation.Valid", { name: i18n.t("RegisterSection.EmailIdText") })
                })
            }
            if (formData?.gender == null) {
                invalidFields.push({
                    field: "gender",
                    errorMessage: i18n.t("Validation.ValidSelect", { name: i18n.t("RegisterSection.SelectGender") })
                })
            }
            if (formData?.ward_number_id == null && formData?.main_village_id == null) {
                invalidFields.push({
                    field: "ward_number_id",
                    errorMessage: i18n.t("Validation.ValidSelect", { name: i18n.t("Common.Ward") })
                })
                invalidFields.push({
                    field: "main_village_id",
                    errorMessage: i18n.t("Validation.ValidSelect", { name: i18n.t("Common.VillageName") })
                })
            }
            if (formData?.booth_number_id == null) {
                invalidFields.push({
                    field: "booth_number_id",
                    errorMessage: i18n.t("Validation.ValidSelect", { name: i18n.t("Common.Booth") })
                })
            }
            if (formData?.is_voter == null) {
                invalidFields.push({
                    field: "is_voter",
                    errorMessage: i18n.t("Validation.ValidSelect", { name: i18n.t("RegisterSection.VoterValidation") })
                })
            }
            if (formData?.is_voter?.value == "1" && formData?.voter_id_number == '' && !validationRegExp.voter_id_number.test(formData?.voter_id_number)) {
                invalidFields.push({
                    field: "is_voter",
                    errorMessage: i18n.t("Validation.Valid", { name: i18n.t("Common.CheckVoterId") })
                })
            }
            if (formData?.full_name == '') {
                invalidFields.push({
                    field: "full_name",
                    errorMessage: i18n.t("Validation.Valid", { name: i18n.t("Common.FullName") })
                })
            }
            if (formData?.full_address == '') {
                invalidFields.push({
                    field: "full_address",
                    errorMessage: i18n.t("Validation.Valid", { name: i18n.t("RegisterSection.RegisterAddress") })
                })
            }
            if (formData?.aadhaar_number == '' && !validationRegExp.aadhaar_number.test(formData?.aadhaar_number)) {
                invalidFields.push({
                    field: "aadhaar_number",
                    errorMessage: i18n.t("Validation.Valid", { name: i18n.t("Common.AadharNo") })
                })
            }
            if (formData?.pincode == '' && !validationRegExp.pincode.test(formData?.pincode)) {
                invalidFields.push({
                    field: "pincode",
                    errorMessage: i18n.t("Validation.Valid", { name: i18n.t("Common.pincode") })
                })
            }
            setInvalidFields(invalidFields)
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
        modalVisibility,
        toggleModalVisibility
    }
}

export { RegisterHooks }
