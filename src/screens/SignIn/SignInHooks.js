import React from 'react';
import {ScreenNames} from '../../global/index';
import {CommonActions, useNavigation} from '@react-navigation/native';
import * as UserAction from '../../redux/actions/userAction';
import {useDispatch} from 'react-redux';
import {isValidPhoneNumber} from '../../global/validation';
import axiosInstance from '../../global/api-core';

const SignInHooks = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [invalidFields, setInvalidFields] = React.useState([]);
  const [bannerImages] = React.useState([
    require('../../assets/images/loginBanner/rajajinagar1.webp'),
    require('../../assets/images/loginBanner/rajajinagar2.jpg'),
    require('../../assets/images/loginBanner/rajajinagar3.jpg'),
    require('../../assets/images/loginBanner/rajajinagar4.jpg'),
    require('../../assets/images/loginBanner/rajajinagar5.jpeg'),
    require('../../assets/images/loginBanner/rajajinagar6.jpg'),
  ]);
  const resetStackAndGoToBottom = CommonActions.reset({
    index: 0,
    routes: [{name: ScreenNames.BOTTOM_TABS}],
  });

  const goToOtp = async () => {
    if (isValidPhoneNumber(mobileNumber).valid) {
      try {
        dispatch(UserAction.setOnScreenLodaer(true));
        const payload = {
            username: mobileNumber,
            type: 'login_otp',
        }

        const response = await axiosInstance.post('/send-otp', payload)
        console.log('ssssss',response.data);
        if (response?.data?.success === true) {
          dispatch(UserAction.setOnScreenLodaer(false));
          navigation.navigate(ScreenNames.OTP_SCREEN, {
            mobileNumber: mobileNumber,
          });
        } else {
          dispatch(UserAction.setOnScreenLodaer(false));
          setInvalidFields([...invalidFields, 'Invalid Mobile Number']);
        }
       
      } catch (error) {
        dispatch(UserAction.setOnScreenLodaer(false));
        console.log('goToOtp', error);
      }
    } else {
      let invalidFields = [];
      if (!isValidPhoneNumber(mobileNumber).valid) {
        invalidFields.push({
          field: 'mobileNumber',
          errorMessage: isValidPhoneNumber(mobileNumber).message,
        });
      }
      setInvalidFields(invalidFields);
    }
  };

  React.useEffect(() => {
    setInvalidFields([]);
  }, [mobileNumber]);

  return {
    setMobileNumber,
    goToOtp,
    invalidFields,
    bannerImages,
  };
};

export {SignInHooks};
