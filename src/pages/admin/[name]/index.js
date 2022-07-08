// Components
import Cataloge from '../../../components/Common/Cataloge/Cataloge';
import MetaHead from '../../../components/Common/MetaHead/MetaHead';
import HeaderCustom from '../../../components/Common/HeaderCustom/HeaderCustom';
import Link from 'next/link';
import Spinner from '../../../components/UI/Spinner/Spinner';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';

// Data
import { useSelector } from 'react-redux';
import { useState } from 'react';

const AdminHome = () => {
	// Estos son los que puede tener un producto
	const [editMode, setEditMode] = useState(false);
	const [deleteMode, setDeleteMode] = useState(false);
	const cataloge = useSelector(state => state.cataloge);

	if (cataloge.fetching) {
		return <Spinner />;
	}

	if (cataloge.catalogeData.name && !cataloge.error) {
		return (
			<div>
				<MetaHead title='Admin' />
				<HeaderCustom
					title={cataloge.catalogeData.name.toUpperCase()}
					icon={<SettingsIcon fontSize='large' />}
					redirectTo={{
						href: `/admin/${cataloge.catalogeData.name}/settings`,
						as: '',
					}}
				/>

				<div className='container'>
					<Cataloge
						data={cataloge.catalogeData}
						editMode={editMode}
						deleteMode={deleteMode}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className='container'>
			<h1>Algo no salío como esperabamos :( </h1>
			<Link href={'/'}>
				<button>Volver al inicio</button>
			</Link>
		</div>
	);
};

export default AdminHome;
