import axios from 'axios';
import {
	SIMPLE_PRODUCT_CREATE_REQUEST,
	SIMPLE_PRODUCT_CREATE_SUCCESS,
	SIMPLE_PRODUCT_CREATE_ERROR,
	SIMPLE_PRODUCT_CREATE_RESET,
} from '../constants/simpleProduct.constants';
import Notification from '../../services/notifications';

export const simple_product_create_action =
	formData => async (dispatch, getState) => {
		try {
			dispatch({
				type: SIMPLE_PRODUCT_CREATE_REQUEST,
				payload: null,
			});

			const {
				user: {
					userData: { token },
				}
			} = getState();

			const config = {
				headers: {
					'Content-type': `multipart/form-data`,
					Authorization: `Bearer ${token}`,
				},
			};

			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URI}/product/simpleProduct`,
				formData,
				config
			);

			dispatch({
				type: SIMPLE_PRODUCT_CREATE_SUCCESS,
				payload: data,
			});

			Notification("Lista de productos creada", "success")
		} catch (error) {
		
			const msg = error.response && error.response.data.msg
				? error.response.data.msg
				: error.message;

			if(msg === "Not authorized, token failed" || msg === "Not authorized, no token") {
			    sessionStorage.setItem('userData', JSON.stringify({}));
			}

			dispatch({
				type: SIMPLE_PRODUCT_CREATE_ERROR,
				payload: msg,
			});

			Notification(msg, 'error');
		}
	};
