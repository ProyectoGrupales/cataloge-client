import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

// Components
import ProfileModal from './Molecules/ProfileModal/ProfileModal';

// Iconos
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './Header.module.scss';

// Data
import catalogeData from '../../../data/cataloge.json';

// Este componente es la cabecera de todas las páginas
const Header = () => {
	const [open, setOpen] = useState(false);
	const route = useRouter();
	const attentionHour = `De: ${catalogeData.attention_hour[0][0]}hs a ${catalogeData.attention_hour[0][1]}hs, y de ${catalogeData.attention_hour[1][0]}hs a ${catalogeData.attention_hour[1][1]}hs`;

	console.log(route.query.view);

	const homeIcon = (
		<Link href='/test'>
			<div className={style.homeIcon}>
				<HomeIcon fontSize='large' />
			</div>
		</Link>
	);

	return (
		<div className={style.container}>
			<div onClick={() => setOpen(!open)}>
				{/* Si estamos fuera de home, renderiza el icono de la casa, caso contrario evalua que el usuario tenga imagen de perfil */}
				{route.query.view ? (
					homeIcon
				) : catalogeData.image ? (
					<img src={catalogeData.image} />
				) : (
					<div className={style.imgFallback} />
				)}
			</div>

			<div className={style.catalogeData} onClick={() => setOpen(!open)}>
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

			<ProfileModal data={catalogeData} open={open} setOpen={setOpen} />
		</div>
	);
};

export default Header;
