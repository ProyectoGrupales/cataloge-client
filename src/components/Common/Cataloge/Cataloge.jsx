// Components
import Card from './Atoms/Card/Card';
import style from './Cataloge.module.scss';

// Contenedor del listado de cards
const Cataloge = ({ data }) => {
	return (
		<div className={style.container}>
			{data.cards.map(card => {
				return <Card data={card} key={card.id} />;
			})}
		</div>
	);
};

export default Cataloge;
