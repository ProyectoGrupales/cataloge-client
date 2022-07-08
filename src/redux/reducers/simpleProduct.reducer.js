import {
	SIMPLE_PRODUCT_CREATE_REQUEST,
	SIMPLE_PRODUCT_CREATE_SUCCESS,
	SIMPLE_PRODUCT_CREATE_ERROR,
	SIMPLE_PRODUCT_CREATE_RESET,
	SIMPLE_PRODUCT_GET_REQUEST,
	SIMPLE_PRODUCTS_GET_SUCCESS,
	SIMPLE_PRODUCT_GET_SUCCESS,
	SIMPLE_PRODUCT_GET_ERROR,
	SIMPLE_PRODUCT_PUT_REQUEST,
	SIMPLE_PRODUCT_PUT_SUCCESS,
	SIMPLE_PRODUCT_PUT_ERROR,
	SIMPLE_PRODUCT_DELETE_REQUEST,
	SIMPLE_PRODUCT_DELETE_SUCCESS,
	SIMPLE_PRODUCT_DELETE_ERROR,
} from '../constants/simpleProduct.constants';

export const simple_product_create_reducer = (state = {}, action) => {
	switch (action.type) {
		case SIMPLE_PRODUCT_CREATE_REQUEST: {
			return {
				loading: true,
			};
		}

		case SIMPLE_PRODUCT_CREATE_ERROR:
			return {
				loading: false,
				error: action.payload,
			};

		case SIMPLE_PRODUCT_CREATE_SUCCESS:
			return {
				loading: false,
				success: true,
				simpleProduct: action.payload,
			};

		case SIMPLE_PRODUCT_CREATE_RESET: {
			return {};
		}

		default:
			return state;
	}
};

export const simple_product_get_reducer = (
	state = { simpleProduct: [], simpleProducts: [] },
	action
) => {
	switch (action.type) {
		case SIMPLE_PRODUCT_GET_REQUEST:
			return {
				...state,
				loading: true,
			};

		case SIMPLE_PRODUCT_GET_ERROR:
			return {
				loading: false,
				error: action.payload,
			};

		case SIMPLE_PRODUCT_GET_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				simpleProduct: action.payload,
			};

		case SIMPLE_PRODUCTS_GET_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				simpleProducts: action.payload,
			};

		default:
			return state;
	}
};

export const simple_product_put_reducer = (state = {}, action) => {
	switch (action.type) {
		case SIMPLE_PRODUCT_PUT_REQUEST:
			return {
				loading: true,
			};

		case SIMPLE_PRODUCT_PUT_ERROR:
			return {
				loading: false,
				error: action.payload,
			};

		case SIMPLE_PRODUCT_PUT_SUCCESS:
			return {
				loading: false,
				success: true,
				simpleProduct: action.payload,
			};

		default:
			return state;
	}
};

export const simple_product_delete_reducer = (state = {}, action) => {
	switch (action.type) {
		case SIMPLE_PRODUCT_DELETE_REQUEST:
			return {
				loading: true,
			};

		case SIMPLE_PRODUCT_DELETE_ERROR:
			return {
				loading: false,
				error: action.payload,
			};

		case SIMPLE_PRODUCT_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				simpleProduct: action.payload,
			};

		default:
			return state;
	}
};
