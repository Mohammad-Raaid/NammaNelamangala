import * as actionTypes from '../actionTypes/actionTypes';

export const setOnScreenLodaer = payload => ({
  type: actionTypes.SCREEN_LOADER,
  payload,
});

export const setUserData = payload => ({
  type: actionTypes.SET_USER_DATA,
  payload,
});
