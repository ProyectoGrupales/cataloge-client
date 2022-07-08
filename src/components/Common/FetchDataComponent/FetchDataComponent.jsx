import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuccess } from '../../../redux/reducers/fetchUserData';
import fetchCatalogeData from '../../../redux/apiCall/fetchCatalogeData';

// Este componente no muestra nada pero se renderiza en todas las vistas
// Se encarga de verificar si tenemos los datos del catálogo y en caso de no tenerlo realizamos la petición
const FetchDataComponent = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const cataloge = useSelector(state => state.cataloge.catalogeData);
	const user = useSelector(state => state.user.userData);

	useEffect(() => {
		if (!user || !user.name) {
			// De está manera accedemos a la información del usuario, en caso de que se hayá logueado.
			console.log('Estoy seteando el usuario');
			const userData = JSON.parse(sessionStorage.getItem('userData'));
			dispatch(fetchSuccess(userData));
		}

		if (router.query.name && !cataloge.name) {
			fetchCatalogeData(dispatch, router.query.name);
		}
	}, [router]);

	return <div />;
};

// Tarea: convertir este componente en un servicio

export default FetchDataComponent;
