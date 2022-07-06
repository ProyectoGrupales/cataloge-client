import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userData: {},
	fetching: false,
	error: null,
};

const fetchUserReducer = createSlice({
	name: 'userData',
	initialState,
	reducers: {
		fetchingData: state => {
			state.fetching = true;
		},
		fetchSuccess: (state, action) => {
			state.fetching = false;
			state.userData = action.payload;
		},
		fetchError: (state, action) => {
			state.fetching = false;
			state.user = {};
			state.error = action.payload;
		},
	},
});

// Importamos las acciones
export const { fetchingData, fetchSuccess, fetchError } =
	fetchUserReducer.actions;

// Importamos este reducer para incorporarlo en el store
export default fetchUserReducer.reducer;
