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
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
