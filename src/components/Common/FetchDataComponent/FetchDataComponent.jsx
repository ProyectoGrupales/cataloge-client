import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCatalogeData from '../../../redux/apiCall/fetchCatalogeData';

// Este componente no muestra nada pero se renderiza en todas las vistas
// Se encarga de verificar si tenemos los datos del catálogo y en caso de no tenerlo realizamos la petición
const FetchDataComponent = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const cataloge = useSelector(state => state.cataloge.catalogeData);

	useEffect(() => {
		if (router.query.name && !cataloge.name) {
			fetchCatalogeData(dispatch, router.query.name);
		}
	}, [router]);

	return <div />;
};

export default FetchDataComponent;
