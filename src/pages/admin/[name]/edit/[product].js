import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Components
import SimpleProductForm from '../../../../components/View/Admin/Form/SimpleProduct/SimpleProduct';
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';

const EditPage = () => {
	const [product, setProduct] = useState({});
	const cataloge = useSelector(state => state.cataloge.catalogeData);
	const router = useRouter();

	useEffect(() => {
		if (cataloge.name) {
			const productFound = cataloge.cards.filter(
				product => product.title === router.query.product
			);

			setProduct(productFound[0]);
		}
	}, [cataloge]);

	console.log(product);

	// Si el producto ya está seteado, consultamos que tipo es.
	if (product.title) {
		if (product.type === 'simpleProduct') {
			return <SimpleProductForm data={product} edit />;
		}

		if (product.type === 'complexProduct') {
			return;
		}

		return (
			<div>
				<HeaderCustom icon={'back'} title='Test' />
				<h1>Hubo un error inesperado :( </h1>
			</div>
		);
	}
};

export default EditPage;
