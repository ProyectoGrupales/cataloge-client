// Components
import MetaHead from '../../../components/MetaHead/MetaHead';
import HeaderCustom from '../../../components/HeaderCustom/HeaderCustom';
import Card from '../../../components/Card/Card';
import Link from 'next/link';

// Icons
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';

import style from '../../../styles/AdminCataloge.module.scss';

// Data
import catalogeData from '../../../data/cataloge.json';

const View = () => {
	return (
		<div>
			<MetaHead title='Admin' />
			<HeaderCustom
				title='Nombre del comercio'
				icon={<SettingsIcon fontSize='large' />}
				redirectTo={{ href: '/admin/test/settings', as: '' }}
			/>

			<div className='cardContainer'>
				{catalogeData.cards.map(card => {
					return <Card data={card} key={card.id} />;
				})}
			</div>

			<Link href={'/admin/[name]/cardCreator'} as={'/admin/test/cardCreator'}>
				<button className={style.addButton}>
					<AddIcon fontSize='large' />
				</button>
			</Link>
		</div>
	);
};

export default View;
