import React from 'react';
import axios from 'axios';
import { BASE_URL } from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScreenNames } from '.';
import * as RootNavigation from '../navigation/RootNavigation';
const axiosInstance = axios.create({
	baseURL: BASE_URL
});

const AxiosInterceptor = ({ children }) => {

	React.useEffect(() => {

		const resInterceptor = async (response) => {
			if (response.data == "token expired") {
				await AsyncStorage.removeItem("token")
				await AsyncStorage.removeItem("userDate")
				RootNavigation.navigate(ScreenNames.SIGNIN_SCREEN);
				return;
			}
			return response;
		}

		const errInterceptor = error => {

			if (error.response.status === 401) {
				RootNavigation.navigate(ScreenNames.SIGNIN_SCREEN);
			}

			return Promise.reject(error);
		}


		const interceptor = axiosInstance.interceptors.response.use(resInterceptor, errInterceptor);

		return () => axiosInstance.interceptors.response.eject(interceptor);

	}, [])

	return children;
}
export default axiosInstance;
export { AxiosInterceptor }
