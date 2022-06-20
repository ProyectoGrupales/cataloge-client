// Components
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

// Data
import catalogeData from '../../data/cataloge.json';

import style from '../../styles/ClientCataloge.module.scss';

// Esto es lo que se les muestra a los clientes que ingresan al catalogo.
const Cataloge = () => {
	return (
		<div className={style.container}>
			<Header />

			<div className={'cardContainer'}>
				{catalogeData.cards.map(card => {
					return <Card data={card} key={card.id} />;
				})}
			</div>
		</div>
	);
};

export default Cataloge;
