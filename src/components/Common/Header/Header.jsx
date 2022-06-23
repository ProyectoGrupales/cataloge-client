import Link from 'next/link';
// Iconos
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './Header.module.scss';

// Data
import catalogeData from '../../../data/cataloge.json';

// Este componente es la cabecera de todas las páginas
const Header = ({ onClick }) => {
	const attentionHour = `De: ${catalogeData.attention_hour[0][0]}hs a ${catalogeData.attention_hour[0][1]}hs, y de ${catalogeData.attention_hour[1][0]}hs a ${catalogeData.attention_hour[1][1]}hs`;

	return (
		<div className={style.container}>
			<div onClick={() => onClick()}>
				{catalogeData.image ? (
					<img src={catalogeData.image} />
				) : (
					<div className={style.imgFallback} />
				)}
			</div>

			<div className={style.catalogeData} onClick={() => onClick()}>
				<h1>{catalogeData.name || 'Nombre del comercio'}</h1>
				<p>{attentionHour}</p>
			</div>

			<div className={style.iconContainer}>
				<Link href={'/test/shoppingCart'}>
					<ShoppingCartIcon fontSize='large' />
				</Link>
			</div>

			<div className={style.searchContainer}>
				<input type='text' placeholder='¿Que estás buscando? 👀' />
				<div>
					<SearchIcon />
				</div>
			</div>
		</div>
	);
};

export default Header;
