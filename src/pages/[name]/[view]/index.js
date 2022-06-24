import { useRouter } from 'next/router';
import { useState } from 'react';

// Componets
import Header from '../../../components/Common/Header/Header';
import ComplexProductDetail from '../../../components/View/ProductView/ComplexProductDetail/ComplexProductDetail';
import SimpleProductDetail from '../../../components/View/ProductView/SimpleProductDetail/SimpleProductDetail';

const ProductView = () => {
	const router = useRouter();
	let screenConfig;

	// En caso de que sea una lista de productos
	if (router.query.view && isNaN(router.query.view)) {
		const [openModal, setOpenModal] = useState(false);
		screenConfig = (
			<SimpleProductDetail openModal={openModal} setOpenModal={setOpenModal} />
		);
	}

	// En caso de que sea un producto detallado
	if (!isNaN(router.query.view)) {
		screenConfig = (
			<div className={'mainContainer_div'}>
				<ComplexProductDetail />
			</div>
		);
	}

	return (
		<div>
			<Header />
			<div className='container'>{screenConfig}</div>
		</div>
	);
};

export default ProductView;
