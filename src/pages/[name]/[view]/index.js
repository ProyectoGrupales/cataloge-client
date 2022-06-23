import { useRouter } from 'next/router';
import { useState } from 'react';

// Componets
import Header from '../../../components/Common/Header/Header';
import ComplexProductDetail from '../../../components/View/ProductView/ComplexProductDetail/ComplexProductDetail';
import SimpleProductDetail from '../../../components/View/ProductView/SimpleProductDetail/SimpleProductDetail';

// Data
import products from '../../../data/products.json';

const ProductView = () => {
	const routes = useRouter();
	let screenConfig;

	// En caso de que sea una lista de productos
	if (routes.query.view && isNaN(routes.query.view)) {
		const [openModal, setOpenModal] = useState(false);
		screenConfig = (
			<SimpleProductDetail
				products={products}
				openModal={openModal}
				setOpenModal={setOpenModal}
			/>
		);
	}

	// En caso de que sea un producto detallado
	if (!isNaN(routes.query.view)) {
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

/*

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
*/
