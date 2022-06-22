import { useRouter } from 'next/router';
import { useState } from 'react';
import style from '../../../styles/View.module.scss';

// Components
import MetaHead from '../../../components/MetaHead/MetaHead';
import Header from '../../../components/Header/Header';
import Modal from '../../../components/Modal/Modal';
import Carousel from '../../../components/Carousel/Carousel';
import SimpleCard from '../../../components/SimpleCard/SimpleCard';
import ComplexProductDetail from '../../../components/ComplexProductDetail/ComplexProductDetail';

// Data
import products from '../../../data/products';

// Esto es lo que ellos ven al clickear en una card
const View = () => {
	const [openModal, setOpenModal] = useState(false);
	const routes = useRouter();

	// En esta var se almacena lo que luego se muestra en pantalla
	let screenConfig;

	// Analizamos el tipo de card según la ruta
	if (routes.query.view && isNaN(routes.query.view)) {
		// PRODUCTS IN LIST
		screenConfig = (
			<div className={'mainContainer_div'}>
				<MetaHead title={'Hola'} />

				<Carousel />

				<div className={style.listContainer}>
					<h4>Nombre de la categoría</h4>

					{products.map((simpleProduct, index) => {
						// Parseamos la info del objeto
						const parseObj = [];
						for (const property in simpleProduct) {
							parseObj.push(simpleProduct[property]);
						}

						return (
							<SimpleCard
								colums={parseObj}
								onClick={() => setOpenModal(!openModal)}
								key={index}
							/>
						);
					})}
				</div>

				<Modal openModal={openModal} setOpenModal={setOpenModal} />
			</div>
		);
	}

	if (!isNaN(routes.query.view)) {
		// COMPLEX PRODUCTS
		screenConfig = (
			<div className={'mainContainer_div'}>
				<ComplexProductDetail />
			</div>
		);
	}

	return (
		<>
			<MetaHead title={'Vista de Card'} />
			<Header />

			{/* Aqui renderizamos lo elegido */}
			{screenConfig}
		</>
	);
};

export default View;
