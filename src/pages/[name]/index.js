import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import fetchCatalogeData from '../../redux/apiCall/fetchCatalogeData';

// Componets
import Header from '../../components/Common/Header/Header';
import MetaHead from '../../components/Common/MetaHead/MetaHead';
import Cataloge from '../../components/Common/Cataloge/Cataloge';
import Link from 'next/link';

const ClientHome = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const cataloge = useSelector(state => state.cataloge);

	useEffect(() => {
		if (router.query || !cataloge.catalogeData) {
			fetchCatalogeData(dispatch, router.query.name);
		}
	}, [router]);

	console.log(cataloge);

	if (!cataloge.error) {
		return (
			<div>
				<MetaHead title={cataloge.catalogeData.name} />
				<Header />

				<div className='container'>
					<Cataloge data={cataloge.catalogeData} />
				</div>
			</div>
		);
	}
	return (
		<div className='container'>
			<h1>Algo no salío como esperabamos :( </h1>
			<Link href={'/'}>
				<button>Volver al inicio</button>
			</Link>
		</div>
	);
};

export default ClientHome;
