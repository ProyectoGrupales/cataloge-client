import Link from 'next/link';
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';

// Icons & style
import style from './styles/settings.module.scss';

const SettingsPage = () => {
	return (
		<div className={style.container}>
			<HeaderCustom title='Settings' icon='back' />

			<div className={style.buttonList}>
				<Link
					href='/admin/[name]/settings/list'
					as={'/admin/test/settings/list'}
				>
					<button>Productos/Listados</button>
				</Link>

				<Link
					href='/admin/[name]/settings/profile'
					as={'/admin/test/settings/profile'}
				>
					<button>Perfil</button>
				</Link>

				<Link
					href='/admin/[name]/settings/finances'
					as={'/admin/test/settings/finances'}
				>
					<button>Finanzas</button>
				</Link>
			</div>
		</div>
	);
};

export default SettingsPage;
