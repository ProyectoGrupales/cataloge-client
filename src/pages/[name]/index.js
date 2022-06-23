import { useState } from 'react';

// Componets
import Header from '../../components/Common/Header/Header';
import MetaHead from '../../components/Common/MetaHead/MetaHead';
import Cataloge from '../../components/Common/Cataloge/Cataloge';
import catalogeData from '../../data/cataloge.json';
import ProfileModal from '../../components/Common/ProfileModal/ProfileModal';

const ClientHome = () => {
	const [modal, setModal] = useState(false);

	return (
		<div>
			<MetaHead title={catalogeData.name} />
			<Header onClick={() => setModal(!modal)} />
			<div className='container'>
				<Cataloge data={catalogeData} />
			</div>

			<ProfileModal data={catalogeData} open={modal} setOpen={setModal} />
		</div>
	);
};

export default ClientHome;
