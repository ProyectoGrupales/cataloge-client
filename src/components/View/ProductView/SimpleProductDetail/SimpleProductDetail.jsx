import { useState } from 'react';

// Components
import styles from './SimpleProductDetail.module.scss';
import MetaHead from '../../../Common/MetaHead/MetaHead';
import Carousel from './Molecules/Carousel/Carousel';
import Modal from './Molecules/Modal/Modal';
import SimpleCard from '../../../../components/Common/SimpleCard/SimpleCard';
import OneTimeModal from '../../../UI/OneTimeModal/OneTimeModal';

const SimpleProductDetail = ({ card }) => {
	// Controladores del modal
	const [openModal, setOpenModal] = useState(false);
	const [currentData, setCurrentData] = useState(null);

	const toggleModal = data => {
		setOpenModal(!openModal);
		setCurrentData({
			copy: data.rowData,
			...data.simpleProduct,
		});
	};

	// En el caso de que está card no tenga productos aún
	if (!card) {
		return <h1 className='container'>No hay productos en esta carta</h1>;
	}

	if (card && card.products.length) {
		return (
			<div className=''>
				<MetaHead title={`${card.title}`} />
				<Carousel />

				<div className={styles.listContainer}>
					<h4>{card.title}</h4>

					{card.products.map((simpleProduct, index) => {
						// Parseamos los datos, de objeto a un arreglo
						const rowData = Object.values(simpleProduct);
						// Le quitamos el ID
						rowData.shift();
						return (
							<SimpleCard
								columns={rowData}
								onClick={() => toggleModal({ simpleProduct, rowData })}
								key={index}
							/>
						);
					})}
				</div>

				<Modal
					openModal={openModal}
					setOpenModal={setOpenModal}
					data={currentData}
				/>
				<OneTimeModal
					text={[
						'Puedes tocar un producto para desplegar las opciónes',
						'Una vez seleccionado puedes consultar ese producto por wpp',
					]}
				/>
			</div>
		);
	}
};

export default SimpleProductDetail;
