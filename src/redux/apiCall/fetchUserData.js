import axios from 'axios';
import notification from '../../services/notifications';
import {
	fetchingData,
	fetchSuccess,
	fetchError,
} from '../reducers/fetchUserData';

// Recibimos del logIn el correo o teléfono del usuario y su contraseña, con esta información debemos obtener los datos del usuario y los datos del catálogo.

const catchUserData = (dispatch, userData) => {
	if (dispatch) {
		dispatch(fetchingData());

		if (isNaN(userData.userData)) {
			axios
				.post(`${process.env.NEXT_PUBLIC_API_URI}/user/login`, {
					email: userData.userData,
					password: userData.password,
				})
				.then(res => {
					notification(res.data.msg, res.data.status);
					dispatch(fetchSuccess(res.data.user));
					window.location.href = `/admin/${res.data.user.cataloge_name}`;
				})
				.catch(err => {
					notification(err.response.data.msg, err.response.data.status);
					dispatch(fetchError());
				});
		} else {
			const numberPhone = Number(userData.userData);
			axios
				.post(`${process.env.NEXT_PUBLIC_API_URI}/user/login`, {
					number_phone: numberPhone,
					password: userData.password,
				})
				.then(res => {
					notification(res.data.msg, res.data.status);
					dispatch(fetchSuccess(res.data.user));
					window.location.href = `/admin/${res.data.user.cataloge_name}`;
				})
				.catch(err => {
					notification(err.response.data.msg, err.response.data.status);
					dispatch(fetchError());
				});
		}
	}
};

export default catchUserData;
