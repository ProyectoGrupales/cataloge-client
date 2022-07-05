import { useSelector } from 'react-redux';

// Componets
import Header from '../../components/Common/Header/Header';
import MetaHead from '../../components/Common/MetaHead/MetaHead';
import Cataloge from '../../components/Common/Cataloge/Cataloge';
import Link from 'next/link';
import Spinner from '../../components/UI/Spinner/Spinner';

const ClientHome = () => {
	const cataloge = useSelector(state => state.cataloge);

	// Mientras se esté trayendo la info muestra un spinner loader
	if (cataloge.fetching) {
		return <Spinner />;
	}

	// Si la información ya está y no hay error que renderice la info
	if (cataloge.catalogeData.name && !cataloge.error) {
		return (
			<div>
				<MetaHead title={cataloge.catalogeData.name.toUpperCase()} />
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
