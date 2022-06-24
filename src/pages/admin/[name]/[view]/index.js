import { useState } from 'react';
import { useRouter } from 'next/router';

// Componets
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';
import ComplexProductDetail from '../../../../components/View/ProductView/ComplexProductDetail/ComplexProductDetail';
import SimpleProductDetail from '../../../../components/View/ProductView/SimpleProductDetail/SimpleProductDetail';

const AdminView = () => {
	const router = useRouter();
	let screenConfig;

	if (router.query.view && isNaN(router.query.view)) {
		const [openModal, setOpenModal] = useState(false);
		screenConfig = (
			<SimpleProductDetail openModal={openModal} setOpenModal={setOpenModal} />
		);
	}

	if (!isNaN(router.query.view)) {
		screenConfig = <ComplexProductDetail />;
	}

	return (
		<div>
			<HeaderCustom title={router.query.view || 'Undefined'} icon='back' />
			<div className={'container'}>{screenConfig}</div>
		</div>
	);
};

export default AdminView;
