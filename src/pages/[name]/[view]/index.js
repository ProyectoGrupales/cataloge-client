import MetaHead from '../../../components/MetaHead/MetaHead';
import Header from '../../../components/Header/Header';
import { useRouter } from 'next/router';
import Carousel from '../../../components/Carousel/Carousel';
import products from './products';
import ProductsInList from '../../../components/ProductsInList/ProductsInList';
import Modal from '../../../components/Modal/Modal';
import { useState } from 'react';

// Esto es lo que ellos ven al clickear en una card
const View = () => {
	const routes = useRouter();

	const [openModal, setOpenModal] = useState(false);

	return (
		<div className={'mainContainer_div'}>
			<Header />
			{routes.query.view && isNaN(routes.query.view) ? (
				<div className='midContainer_div'>
					<MetaHead
						title={'Listado De Productos'}
						description={
							'En esta sección podrá ver todos los productos relacionados a la categoría en forma de listado'
						}
					/>
					<Carousel />
					<h4>Nombre De La Categoría</h4>

					<ProductsInList
						openModal={openModal}
						setOpenModal={setOpenModal}
						products={products}
					/>

					<Modal openModal={openModal} setOpenModal={setOpenModal} />
				</div>
			) : (
				<div className='midContainer_div'>
					<MetaHead
						title={'Detalle Del Producto'}
						description={'Información general del producto seleccionado'}
					/>
					<h1>Product Preview</h1>;
				</div>
			)}

			<style jsx>{`
				.midContainer_div {
					padding: 0 5%;

					position: relative;
				}
			`}</style>
		</div>
	);
};

export default View;
