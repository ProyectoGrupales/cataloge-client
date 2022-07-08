import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Componets
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';
import ComplexProductDetail from '../../../../components/View/ProductView/ComplexProductDetail/ComplexProductDetail';
import SimpleProductDetail from '../../../../components/View/ProductView/SimpleProductDetail/SimpleProductDetail';

const AdminView = () => {
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
				<HeaderCustom
					title={router.query.view.toUpperCase() || 'Undefined'}
					icon='back'
				/>
				<div className={'container'}>{screenConfig}</div>
			</div>
		);
	}
};

export default AdminView;
