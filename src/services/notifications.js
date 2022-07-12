import { toast } from 'react-toastify';

const config = {
	position: 'top-center',
	autoClose: 3000,
	theme: 'colored',
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
};

const notification = (text, status) => {
	if (status === 'success') {
		toast.dismiss();
		toast.success(text, config);
	} else if (status === 'error') {
		toast.dismiss();
		toast.error(text, config);
	} else if (status === 'load') {
		toast.loading(text, config);
	}
};

export default notification;
