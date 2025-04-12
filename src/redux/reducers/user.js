import * as actionTypes from '../actionTypes/actionTypes';
const initialState = {
	userData: null,
	onScreenLodaer: false
};
const user = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.SET_USER:
			return {
				...state,
				userData: payload,
			};
		case actionTypes.SCREEN_LOADER:
			return {
				...state,
				onScreenLodaer: payload,
			};
		default:
			return state;
	}
};
export default user;