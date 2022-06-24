// Components
import Cataloge from '../../../components/Common/Cataloge/Cataloge';
import MetaHead from '../../../components/Common/MetaHead/MetaHead';
import HeaderCustom from '../../../components/Common/HeaderCustom/HeaderCustom';
import Link from 'next/link';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import style from '../../../styles/AdminHome.module.scss';

// Data
import catalogeData from '../../../data/cataloge.json';

const AdminHome = () => {
	return (
		<div>
			<MetaHead title='Admin' />
			<HeaderCustom
				title={catalogeData.name}
				icon={<SettingsIcon fontSize='large' />}
				redirectTo={{ href: '/admin/test/settings', as: '' }}
			/>
			<div className='container'>
				<Cataloge data={catalogeData} />
			</div>

			<div className={style.addButton}>
				<Link href='/admin/[name]/cardCreator' as='/admin/test/cardCreator'>
					<AddIcon fontSize='large' />
				</Link>
			</div>
		</div>
	);
};

export default AdminHome;
