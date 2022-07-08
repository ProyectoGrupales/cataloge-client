import { useSelector } from 'react-redux';
import Link from 'next/link';

// Components
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';

// Icons & styles
import style from './styles/Settings.module.scss';

const SettingsPage = () => {
	const cataloge = useSelector(state => state.cataloge.catalogeData);

	const closeSession = () => {
		sessionStorage.setItem('userData', JSON.stringify({}));
	};

	if (cataloge.name) {
		return (
			<div className={style.container}>
				<HeaderCustom title='Settings' icon='back' />

				<div className={style.buttonList}>
					<Link
						href='/admin/[name]/settings/list'
						as={`/admin/${cataloge.name}/settings/list`}
					>
						<button>Productos/Listados</button>
					</Link>

					<Link
						href='/admin/[name]/settings/profile'
						as={`/admin/${cataloge.name}/settings/profile`}
					>
						<button>Perfil</button>
					</Link>

					<Link
						href='/admin/[name]/settings/finances'
						as={`/admin/${cataloge.name}/settings/finances`}
					>
						<button>Finanzas</button>
					</Link>

					<Link href='/' as={'/'}>
						<button onClick={closeSession}>Cerrar sesión</button>
					</Link>
				</div>
			</div>
		);
	}
};

export default SettingsPage;
