import { useSelector } from 'react-redux';
import { useState } from 'react';

// Components
import Cataloge from '../../../components/Common/Cataloge/Cataloge';
import MetaHead from '../../../components/Common/MetaHead/MetaHead';
import HeaderCustom from '../../../components/Common/HeaderCustom/HeaderCustom';
import Link from 'next/link';
import Spinner from '../../../components/UI/Spinner/Spinner';
import SpeedDialMenu from '../../../components/View/Admin/SpeedRadial/SpeedRadial';
import Drawer from '@mui/material/Drawer';

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import style from '../../../styles/AdminHome.module.scss';

const AdminHome = () => {
	const [open, setOpen] = useState(false);
	// Estos son los que puede tener un producto
	const [editMode, setEditMode] = useState(false);
	const [deleteMode, setDeleteMode] = useState(false);

	const cataloge = useSelector(state => state.cataloge);
	const user = useSelector(state => state.user.userData);

	const toggleDrawer = event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setOpen(!open);
	};

	const closeSession = () => {
		sessionStorage.setItem('userData', JSON.stringify({}));
	};

	if (cataloge.fetching) {
		return <Spinner />;
	}

	if (cataloge.catalogeData.name && !cataloge.error) {
		return (
			<div>
				<MetaHead title='Admin' />
				<HeaderCustom
					title={cataloge.catalogeData.name}
					icon='menu'
					onClick={() => setOpen(prev => !prev)}
				/>

				{/* Menu lateral */}
				<Drawer anchor='left' open={open} onClose={toggleDrawer}>
					<div className={style.menu}>
						<div className={style.profile}>
							<div className={style.name}>
								<AccountCircleIcon />
								<div>
									<h2>{user.name}</h2>
									<h2>{user.last_name}</h2>
								</div>
							</div>
							<p>{user.email}</p>
							<p>{user.number_phone}</p>
						</div>

						<Link
							href='/admin/[name]/settings/profile'
							as={`/admin/${cataloge.catalogeData.name}/settings/profile`}
						>
							<button>Perfil</button>
						</Link>

						<Link
							href='/admin/[name]/settings/finances'
							as={`/admin/${cataloge.catalogeData.name}/settings/finances`}
						>
							<button>Finanzas</button>
						</Link>

						<Link href='/' as={'/'}>
							<button onClick={closeSession}>Cerrar Sesión</button>
						</Link>
					</div>
				</Drawer>

				{/* Body */}
				<div className='container'>
					<Cataloge
						data={cataloge.catalogeData}
						editMode={editMode}
						deleteMode={deleteMode}
					/>
				</div>

				<SpeedDialMenu
					catalogeData={cataloge.catalogeData}
					setDeleteMode={setDeleteMode}
					setEditMode={setEditMode}
				/>
			</div>
		);
	}

	if (cataloge.error) {
		return (
			<div className='container'>
				<h1>Algo no salío como esperabamos :( </h1>
				<Link href={'/'}>
					<button>Volver al inicio</button>
				</Link>
			</div>
		);
	}
};

export default AdminHome;
