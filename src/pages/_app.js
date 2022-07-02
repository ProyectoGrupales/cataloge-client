// import { store, persistor } from '../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useRouter } from 'next/router';

// Contenedor de notificaciones
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import dynamicStore from '../redux/store/test';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const { store, persistor } = dynamicStore(router.query.name);
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Component {...pageProps} />
				<ToastContainer />
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
