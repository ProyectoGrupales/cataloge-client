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
			// Elimina el primer elemento que coincida con el id
			// Se lo hace de esta manera debido a que indexOf() no funciona con el estado en redux
			let flag = false;
			state.products.forEach((product, firstIndex) => {
				if (!flag && product._id === action.payload) {
					flag = true;

					state.products = state.products.filter(
						(item, secondIndex) => secondIndex !== firstIndex
					);
				}
			});
		},
	},
});

export const { addToCart, byuCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
