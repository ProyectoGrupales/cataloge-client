import axios from 'axios';

import notification from '../services/notifications';

// Recibe la data del usuario y del catálogo y la envía.
const createUser = (userData, catalogeData) => {
	axios
		.post(`${process.env.NEXT_PUBLIC_API_URI}/user`, {
			user: userData || {},
			cataloge: catalogeData || {},
		})
		.then(res => {
			console.log(res);
			notification(res.data.msg, res.data.status);
			return res.data;
		})
		.catch(err => {
			notification(err.response.data.msg, err.response.data.status);
			return err.data;
		});
};

export default createUser;
