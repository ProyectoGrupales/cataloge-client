import Link from 'next/link';

// Icons & styles
import HomeIcon from '@mui/icons-material/Home';
import style from '../../../styles/Settings.module.scss';

const Settings = () => {
	return (
		<div className={style.container}>
			<div className={style.head}>
				<div className={style.iconContainer}>
					<Link href={'/admin/[name]'} as={'/admin/test'}>
						<HomeIcon fontSize='large' />
					</Link>
				</div>

				<h1>Settings</h1>
			</div>

			<div className={style.buttonList}>
				<Link href='/admin/[name]/list' as={'/admin/test/list'}>
					<button>Productos/Listados</button>
				</Link>
				<Link href='/admin/[name]/profile' as={'/admin/test/profile'}>
					<button>Perfil</button>
				</Link>
			</div>
		</div>
	);
};

export default Settings;
