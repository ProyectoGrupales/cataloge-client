import { toast } from 'react-toastify';

const config = {
	position: 'top-right',
	autoClose: 3000,
	theme: 'colored',
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
};

// Este objeto
const notification = (text, status) => {
	if (status === 'success') {
		toast.success(text, config);
	} else if (status === 'error') {
		toast.error(text, config);
	}
};

export default notification;
