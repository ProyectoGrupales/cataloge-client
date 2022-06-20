import { useRouter } from 'next/router';
import HeadDefault from '../../../components/MetaHead/HeadDefault';
import Header from '../../../components/Header/Header';
import Carousel from '../../../components/Carousel/Carousel';

// Esto es lo que ellos ven al clickear en una card
const View = () => {
	const routes = useRouter();

	if (routes.query.view && isNaN(routes.query.view)) {
		return (
			<>
				<HeadDefault
					title={'Listado De Productos'}
					description={
						'En esta sección podrá ver todos los productos relacionados a la categoría en forma de listado'
					}
				/>
				<Header />

				<Carousel />
			</>
		);
	}

	return (
		<>
			<HeadDefault
				title={'Detalle Del Producto'}
				description={'Información general del producto seleccionado'}
			/>
			<h1>Product Preview</h1>;
		</>
	);
};

export default View;
