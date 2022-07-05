import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useRouter } from 'next/router';

import FetchDataComponent from '../components/Common/FetchDataComponent/FetchDataComponent';
import dynamicStore from '../redux/store/index';
import '../styles/globals.scss';

// Contenedor de notificaciones
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const { store, persistor } = dynamicStore(router.query.name);

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Component {...pageProps} />
				<FetchDataComponent />
				<ToastContainer />
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
