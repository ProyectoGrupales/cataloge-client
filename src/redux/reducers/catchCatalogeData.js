import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	catalogeData: {},
	fetching: false,
	error: null,
};

const catalogeSlice = createSlice({
	name: 'catalogeSlice',
	initialState,
	reducers: {
		fetchingData: state => {
			state.fetching = true;
		},
		fetchSuccess: (state, action) => {
			state.fetching = false;
			state.catalogeData = action.payload;
			state.error = null;
		},
		fetchError: (state, action) => {
			state.fetching = false;
			state.error = true;
		},
	},
});

export const { fetchError, fetchSuccess, fetchingData } = catalogeSlice.actions;

export default catalogeSlice.reducer;
