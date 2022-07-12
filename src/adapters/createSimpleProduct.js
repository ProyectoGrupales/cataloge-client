import axios from 'axios';
import notification from '../services/notifications';

const createSimpleProduct = (productData, token) => {
	notification('Creando Producto...', 'load');

	const config = {
		headers: {
			'Content-type': `multipart/form-data`,
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.post(
			`${process.env.NEXT_PUBLIC_API_URI}/product/simpleProduct`,
			productData,
			config
		)
		.then(res => {
			notification(res.data.msg, res.data.status);
			console.log('Estoy aquí', res.data);
			// window.history.go(-1);
		})
		.catch(err => {
			notification(
				err.response.data.msg || err.message,
				err.response.data.status || 'error'
			);
		});
};

export default createSimpleProduct;
