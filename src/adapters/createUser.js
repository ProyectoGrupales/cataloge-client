import axios from 'axios';

import notification from '../services/notifications';

// Recibe la data del usuario y del catálogo y la envía.
const createUser = (userData, catalogeData) => {
	notification('Creando...', 'load');
	axios
		.post(`${process.env.NEXT_PUBLIC_API_URI}/user`, {
			user: userData || {},
			cataloge: catalogeData || {},
		})
		.then(res => {
			notification(res.data.msg, res.data.status);
			window.location.href = '/';
		})
		.catch(err => {
			notification(err.response.data.msg, err.response.data.status);
		});
};

export default createUser;
