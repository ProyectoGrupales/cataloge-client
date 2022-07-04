// Components
import Card from './Molecules/Card/Card';
import style from './Cataloge.module.scss';

// Contenedor del listado de cards
const Cataloge = ({ data }) => {
	if (data.cards) {
		return (
			<div className={style.container}>
				{data.cards.map(card => {
					return <Card data={card} key={card._id} catalogeName={data.name} />;
				})}
			</div>
		);
	}

	return <h1>Cargando...</h1>;
};

export default Cataloge;
