// Components
import MetaHead from '../../../Common/MetaHead/MetaHead';
import Carousel from './Molecules/Carousel/Carousel';
import Modal from './Molecules/Modal/Modal';
import SimpleCard from '../../../../components/Common/SimpleCard/SimpleCard';

// Icons & styles
import styles from './SimpleProductDetail.module.scss';

export default function SimpleProductDetail({
	products,
	openModal,
	setOpenModal,
}) {
	return (
		<>
			<div>
				<MetaHead title={'Hola'} />
				<Carousel />

				<div className={styles.listContainer}>
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
		</>
	);
}
