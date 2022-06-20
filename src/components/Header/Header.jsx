// Iconos
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './Header.module.scss';

// Este componente es la cabecera de todas las páginas
const Header = () => {
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
