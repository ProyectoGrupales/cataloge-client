import axios from 'axios';
import notification from '../../services/notifications';

// ACTIONS
import {
	fetchError,
	fetchSuccess,
	fetchingData,
} from '../reducers/catchCatalogeData';

const fetchCatalogeData = (dispatch, name) => {
	dispatch(fetchingData());
	if (name) {
		axios
			.get(`${process.env.NEXT_PUBLIC_API_URI}/cataloge/${name}`)
			.then(res => {
				dispatch(fetchSuccess(res.data.cataloge));
			})
			.catch(err => {
				console.log(err);
				notification(
					err.response.data ? err.response.data.msg : err.message,
					err.response.data ? err.response.data.status : 'error'
				);
				dispatch(fetchError());
			});
	}
};

export default fetchCatalogeData;
