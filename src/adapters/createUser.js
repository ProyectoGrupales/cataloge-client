import axios from 'axios';

import notification from '../services/notifications';

// Recibe la data del usuario y del catálogo y la envía.
const createUser = (userData, catalogeData) => {
	if (!userData || !catalogeData) {
		notification('No se están enviando los datos necesarios', 'success');
	}

	axios
		.post(`${process.env.NEXT_PUBLIC_API_URI}/user`, {
			user: userData,
			cataloge: catalogeData || {},
		})
		.then(res => {
			console.log(res);
			notification(res.data.msg, res.data.status);
			return res.data;
		})
		.catch(err => {
			console.log('Falló');
			console.log(err);
			notification(err.response.data.msg, err.response.data.status);
			return err.data;
		});
};

export default createUser;
