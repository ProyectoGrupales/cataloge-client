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
		},
		fetchError: (state, action) => {
			state.fetching = false;
			state.catalogeData = action.payload;
		},
	},
});

export const { fetchError, fetchSuccess, fetchingData } = catalogeSlice.actions;

export default catalogeSlice.reducer;
