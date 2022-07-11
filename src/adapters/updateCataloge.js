import axios from 'axios';
import notification from '../../services/notifications';
import { fetchSuccess } from '../reducers/catchCatalogeData';

const updateCataloge = (dispatch, cataloge, token) => {
	notification('Actualizando', 'load');
	console.log('Esto quedaría', cataloge);
	console.log('Token:', token);

	axios
		.put(`${process.env.NEXT_PUBLIC_API_URI}/cataloge/`, cataloge)
		.then(res => {
			notification(res.data.msg, res.data.status);
			dispatch(fetchSuccess(res.data.cataloge));
			window.location.href = `/admin/${cataloge.name}`;
		})
		.catch(err => {
			notification(
				err.response.data.msg || err.message,
				err.response.data.status || 'error'
			);
		});
};

export default updateCataloge;
