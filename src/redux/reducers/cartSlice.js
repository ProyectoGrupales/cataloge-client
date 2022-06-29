import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
};

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		// Accion añade productos al carrito
		addToCart: (state, action) => {
			state.products.push(action.payload);
		},
		// Accion en caso de que el usuario compre el carrito, vacía a este
		byuCart: state => {
			state.products = [];
		},
		removeProduct: (state, action) => {
			console.log('Action.payload: ', action.payload);
			const temp = state.products.filter(item => item._id !== action.payload);
			state.products = temp;
		},
	},
});

export const { addToCart, byuCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
