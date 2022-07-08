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
				// user: { token },
				cataloge: {
					catalogeData: { _id },
				},
			} = getState();

			formData.append('catalogueId', _id);

			const config = {
				headers: {
					'Content-type': `multipart/form-data`,
					Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM2ZGNlYzhlZDgzYjI1MDg1MDhmYWYiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2NTcyODI5NzUsImV4cCI6MTY1NzMyNjE3NX0.EMv2aovNmXAfmN1ozUZDBKNUvN-2JcPaGf8PiNTDmPY`,
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
		} catch (error) {
			const msg =
				error.response && error.response.data.msg
					? error.response.data.msg
					: error.message;

			// Tarea: Si el token no es valido la cuenta deberia cerrarse
			// if(msg === "Not authorized, token failed" || msg === "Not authorized, no token") {
			//     dispatch(logout())
			// }

			dispatch({
				type: SIMPLE_PRODUCT_CREATE_ERROR,
				payload: msg,
			});

			Notification(msg, 'error');
		}
	};
