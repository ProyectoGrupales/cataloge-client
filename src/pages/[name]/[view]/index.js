import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// Componets
import Header from '../../../components/Common/Header/Header';
import ComplexProductDetail from '../../../components/View/ProductView/ComplexProductDetail/ComplexProductDetail';
import SimpleProductDetail from '../../../components/View/ProductView/SimpleProductDetail/SimpleProductDetail';

const ProductView = () => {
	const [card, setCard] = useState();
	const [screenConfig, setScreenConfig] = useState();
	const router = useRouter();
	const cataloge = useSelector(state => state.cataloge.catalogeData);

	useEffect(() => {
		if (router.query && cataloge.cards) {
			const title = router.query.view;

			const cardFounded = cataloge.cards.filter(
				product => product.title.toLowerCase() === title.toLowerCase()
			);

			if (cardFounded.length) {
				setCard(cardFounded[0]);
			}
		}
	}, [router.query, cataloge]);

	useEffect(() => {
		if (card && card.type === 'simpleProduct') {
			setScreenConfig(<SimpleProductDetail card={card} />);
		}

		if (card && card.type === 'complexProduct') {
			setScreenConfig(
				<ComplexProductDetail
					card={card}
					numberPhone={cataloge.owner.number_phone}
				/>
			);
		}
	}, [card]);

	if (router.query.view) {
		return (
			<div>
				<Header />
				<div className={'container'}>{screenConfig}</div>
			</div>
		);
	}
};

export default ProductView;
