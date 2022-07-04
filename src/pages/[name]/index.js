import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import fetchCatalogeData from '../../redux/apiCall/fetchCatalogeData';

// Componets
import Header from '../../components/Common/Header/Header';
import MetaHead from '../../components/Common/MetaHead/MetaHead';
import Cataloge from '../../components/Common/Cataloge/Cataloge';

const ClientHome = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const cataloge = useSelector(state => state.cataloge.catalogeData);

	useEffect(() => {
		if (router.query || !cataloge) {
			fetchCatalogeData(dispatch, router.query.name);
		}
	}, []);

	return (
		<div>
			<MetaHead title={cataloge.name} />
			<Header />

			<div className='container'>
				<Cataloge data={cataloge} />
			</div>
		</div>
	);
};

export default ClientHome;
