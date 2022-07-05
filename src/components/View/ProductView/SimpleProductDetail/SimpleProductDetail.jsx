// Dependencies
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

// Components
import styles from './SimpleProductDetail.module.scss';
import MetaHead from '../../../Common/MetaHead/MetaHead';
import Carousel from './Molecules/Carousel/Carousel';
import Modal from './Molecules/Modal/Modal';
import SimpleCard from '../../../../components/Common/SimpleCard/SimpleCard';
import OneTimeModal from '../../../UI/OneTimeModal/OneTimeModal';

const SimpleProductDetail = () => {
	const catalogeData = useSelector(state => state.cataloge.catalogeData);
	const router = useRouter();
	// Controladores del modal
	const [openModal, setOpenModal] = useState(false);
	const [currentData, setCurrentData] = useState(null);

	// Busca y guarda la card que coincida con el nombre de la ruta
	const [card, setCard] = useState();
	console.log(catalogeData);
	useEffect(() => {
		if (router.query.view && catalogeData.cards) {
			const cardFound = catalogeData.cards.find(card => {
				if (
					card.type === 'productsInList' &&
					card.title.toLowerCase() === router.query.view
				) {
					return card;
				} else {
					return false;
				}
			});

			setCard(cardFound);
		}
	}, [router.query.view, catalogeData]);

	const toggleModal = data => {
		setOpenModal(!openModal);
		setCurrentData({
			card: router.query.view,
			copy: data.rowData,
			...data.simpleProduct,
		});
	};

	// En el caso de que está card no tenga productos aún
	if (!card) {
		return <h1>No hay productos en esta carta</h1>;
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
						'Una vez seleccionado puedes consultar este producto por wpp',
					]}
				/>
			</div>
		);
	}
};

export default SimpleProductDetail;
