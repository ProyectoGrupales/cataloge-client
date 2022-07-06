// Components
import Cataloge from '../../../components/Common/Cataloge/Cataloge';
import MetaHead from '../../../components/Common/MetaHead/MetaHead';
import HeaderCustom from '../../../components/Common/HeaderCustom/HeaderCustom';
import Link from 'next/link';
import Spinner from '../../../components/UI/Spinner/Spinner';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import style from '../../../styles/AdminHome.module.scss';

// Data
import { useSelector } from 'react-redux';

const AdminHome = () => {
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
					<Cataloge data={cataloge.catalogeData} />
				</div>

				<div className={style.floatButtonsContainer}>
					<button
						onClick={() => console.log('Boton de editar')}
						className={style.editButton}
					>
						<EditIcon />
					</button>

					<div className={style.addButton}>
						<Link
							href='/admin/[name]/cardCreator'
							as={`/admin/${cataloge.catalogeData.name}/cardCreator`}
						>
							<AddIcon fontSize='large' />
						</Link>
					</div>
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
