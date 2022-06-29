import { createSlice } from '@reduxjs/toolkit';

// Este estado contiene todos los productos, el precio total de estos, y la configuracion de compra escogida por el usuario
const initialState = {
	products: [],
	total: 0,
	config: {},
};

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		// Añade productos al carrito
		addToCart: (state, action) => {
			state.products.push(action.payload);
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
		// Añade el precio del carrito que está por comprar
		addTotal: (state, action) => {
			state.total = action.payload;
		},
		// Añade las opciones de compra escogidas por el usuario
		addConfig: (state, action) => {
			state.config = action.payload;
		},
		buyCart: state => {
			state.products = [];
			state.total = 0;
			state.config = {};
		},
	},
});

export const { addToCart, removeProduct, addTotal, addConfig, buyCart } =
	cartSlice.actions;

export default cartSlice.reducer;
