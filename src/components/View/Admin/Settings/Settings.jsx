import Link from 'next/link';
import HeaderCustom from '../../../components/HeaderCustom/HeaderCustom';

// Icons & styles
import style from '../../../styles/Settings.module.scss';

const Settings = () => {
	return (
		<div className={style.container}>
			<HeaderCustom title='Settings' icon='back' />

			<div className={style.buttonList}>
				<Link href='/admin/[name]/list' as={'/admin/test/list'}>
					<button>Productos/Listados</button>
				</Link>

				<Link href='/admin/[name]/profile' as={'/admin/test/profile'}>
					<button>Perfil</button>
				</Link>

				<Link href='/admin/[name]/finances' as={'/admin/test/finances'}>
					<button>Finanzas</button>
				</Link>
			</div>
		</div>
	);
};

export default Settings;
