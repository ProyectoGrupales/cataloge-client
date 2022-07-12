import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuccess } from '../../../redux/reducers/fetchUserData';
import fetchCatalogeData from '../../../redux/apiCall/fetchCatalogeData';

// Este componente no muestra nada pero se renderiza en todas las vistas
// Se encarga de la lógica de los datos que manejamos en la aplicación
// Como controlar las peticiones, o restringir el acceso a ciertas páginas

const FetchDataComponent = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const cataloge = useSelector(state => state.cataloge.catalogeData);
	const user = JSON.parse(sessionStorage.getItem('userData'));

	useEffect(() => {
		// Si está en admin y no está logeado no redirreciona al login
		if (router.pathname.includes('admin') && !Object.entries(user).length) {
			window.location.href = '/';
		} else {
			dispatch(fetchSuccess(user));
		}

		if (!user || !user.name) {
			// De está manera accedemos a la información del usuario, en caso de que se hayá logueado.
			console.log('Estoy dentro');
			const userData = JSON.parse(sessionStorage.getItem('userData'));
			dispatch(fetchSuccess(userData));
		}

		if (router.query.name && !cataloge.name) {
			fetchCatalogeData(dispatch, router.query.name);
		}
	}, [router]);
};

export default FetchDataComponent;
