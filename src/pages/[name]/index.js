// Componets
import Header from '../../components/Common/Header/Header';
import MetaHead from '../../components/Common/MetaHead/MetaHead';
import Cataloge from '../../components/Common/Cataloge/Cataloge';
import catalogeData from '../../data/cataloge.json';

const ClientHome = () => {
	return (
		<div>
			<MetaHead title={catalogeData.name} />
			<Header />

			<div className='container'>
				<Cataloge data={catalogeData} />
			</div>
		</div>
	);
};

export default ClientHome;
