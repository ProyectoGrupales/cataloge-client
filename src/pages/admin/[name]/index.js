// Components
import Cataloge from '../../../components/Common/Cataloge/Cataloge';
import MetaHead from '../../../components/Common/MetaHead/MetaHead';
import HeaderCustom from '../../../components/Common/HeaderCustom/HeaderCustom';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';

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
		</div>
	);
};

export default AdminHome;
