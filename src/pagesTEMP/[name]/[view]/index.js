// Dependencies
import { useRouter } from 'next/router';
import { useState } from 'react';
// Styles, components and assets
import MetaHead from '../../../components/MetaHead/MetaHead';
import SimpleProductDetail from '../../../components/View/ProductView/SimpleProductDetail/SimpleProductDetail';
import ComplexProductDetail from '../../../components/ComplexProductDetail/ComplexProductDetail';
// Services, hooks and states

const View = () => {
	const [openModal, setOpenModal] = useState(false);

	const routes = useRouter();
	let screenConfig;

	if (routes.query.view && isNaN(routes.query.view)) {
		screenConfig = (
			<SimpleProductDetail openModal={openModal} setOpenModal={setOpenModal} />
		);
	}

	if (!isNaN(routes.query.view)) {
		screenConfig = (
			<div className={'mainContainer_div'}>
				<ComplexProductDetail />
			</div>
		);
	}

	return (
		<>
			<MetaHead title={'Vista de Card'} />
			{screenConfig}
		</>
	);
};

export default View;
