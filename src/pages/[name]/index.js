import { useState } from 'react';

// Components
import MetaHead from '../../components/MetaHead/MetaHead';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import ProfileModal from '../../components/ProfileModal/ProfileModal';

// Data
import catalogeData from '../../data/cataloge.json';

import style from '../../styles/ClientCataloge.module.scss';

// Esto es lo que se les muestra a los clientes que ingresan al catalogo.
const Cataloge = () => {
	const [modal, setModal] = useState(false);
	return (
		<div className={style.container}>
			<MetaHead title={catalogeData.name} />
			<Header onClick={() => setModal(!modal)} />

			<div className={'cardContainer'}>
				{catalogeData.cards.map(card => {
					return <Card data={card} key={card.id} />;
				})}
			</div>

			<ProfileModal data={catalogeData} open={modal} setOpen={setModal} />
		</div>
	);
};

export default Cataloge;
