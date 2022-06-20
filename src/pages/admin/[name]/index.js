import Header from '../../../components/Header/Header';
import Card from '../../../components/Card/Card';

// Data
import catalogeData from '../../../data/cataloge.json';

const View = () => {
	return (
		<div>
			<Header />

			<div className='cardContainer'>
				{catalogeData.cards.map(card => {
					return <Card data={card} key={card.id} />;
				})}
			</div>
		</div>
	);
};

export default View;
