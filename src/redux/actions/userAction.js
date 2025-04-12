import * as actionTypes from '../actionTypes/actionTypes';

export const setOnScreenLodaer = payload => ({
  type: actionTypes.SCREEN_LOADER,
  payload,
});

export const setUser = payload => ({
  type: actionTypes.SET_USER,
  payload,
});
