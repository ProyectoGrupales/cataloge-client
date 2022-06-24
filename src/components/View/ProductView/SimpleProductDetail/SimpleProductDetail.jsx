// Dependencies
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// Styles, components & assets
import styles from './SimpleProductDetail.module.scss';
import MetaHead from '../../../Common/MetaHead/MetaHead';
import Carousel from './Molecules/Carousel/Carousel';
import Modal from './Molecules/Modal/Modal';
import SimpleCard from '../../../../components/Common/SimpleCard/SimpleCard';
// Sample data
import Catalogo from '../../../../data/cataloge.json';

export default function SimpleProductDetail({ openModal, setOpenModal }) {
	const router = useRouter();

	const [card, setCard] = useState();

	useEffect(() => {
		if (router.query.view) {
			const cardFound = Catalogo.cards.find(card => {
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
	}, [router.query.view]);

	if (card && !card.products.length) {
		return <h1>No hay productos en esta carta</h1>;
	}

	if (card && card.products.length) {
		return (
			<div className=''>
				<MetaHead title={`Carta > ${card.title}`} />
				<Carousel />

				<div className={styles.listContainer}>
					<h4>{card.title}</h4>

					{card.products.map((simpleProduct, index) => {
						const rowData = Object.values(simpleProduct);
						return (
							<SimpleCard
								colums={rowData}
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
}
