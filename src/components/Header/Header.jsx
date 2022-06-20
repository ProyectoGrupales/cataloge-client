import { useRouter } from 'next/router';
import Link from 'next/link';

// Iconos
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import style from './Header.module.scss';

// Este componente es la cabecera de todas las páginas
const Header = () => {
	const router = useRouter();
	const isAdmin = router.pathname.includes('admin');

	if (isAdmin) {
		return (
			<div className={style.container}>
				<h1>Nombre del comercio</h1>
				<Link href='/admin/test/settings'>
					<div className={style.iconContainer}>
						<SettingsIcon />
					</div>
				</Link>
			</div>
		);
	}

	return (
		<div className={style.container}>
			<h1>Nombre del comercio</h1>

			<div className={style.iconContainer}>
				<ShoppingCartIcon />
			</div>

			<div className={style.searchContainer}>
				<input type='text' placeholder='¿Que estás buscando? 👀' />
				<div>
					<SearchIcon />
				</div>
			</div>

			<h2>Bienvenido/a 👋</h2>
		</div>
	);
};

export default Header;
