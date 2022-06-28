import {
	fetchingData,
	fetchSuccess,
	fetchError,
} from '../reducers/catchUserData';

// Recibimos del logIn el correo o teléfono del usuario y su contraseña, con esta información debemos obtener los datos del usuario y los datos del catálogo.

const catchUserData = (dispatch, userData) => {
	console.log('Esta es la info del usuario', userData);
	if (dispatch) {
		dispatch(fetchingData());

		try {
			dispatch(fetchSuccess(userData));
		} catch (error) {
			dispatch(fetchError(error.message));
		}
	}
};

export default catchUserData;
