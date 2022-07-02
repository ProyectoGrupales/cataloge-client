import axios from 'axios';

// Recibe la data del usuario y del catálogo y la envía.

const createUser = (userData, catalogeData) => {
	if (!userData) {
		return 'No se están enviando los datos necesarios';
	}

	axios
		.post(`${process.env.NEXT_PUBLIC_API_URI}/user`, {
			user: userData,
			cataloge: catalogeData || {},
		})
		.then(res => {
			console.log(res);
			return res.data;
		})
		.catch(err => {
			return err.data;
		});
};

export default createUser;
