import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

// Components & functions
import parserHour from '../../../services/parserAttentionHour';
import ProfileModal from './Molecules/ProfileModal/ProfileModal';

// Iconos
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './Header.module.scss';

// Data
import catalogeData from '../../../data/cataloge.json';

// Esta es la cabecera por defecto que ve el cliente
const Header = () => {
	const route = useRouter();
	const attentionHour = parserHour(catalogeData.attention_hour);
	const [open, setOpen] = useState(false);

	const homeIcon = (
		<Link href='/test'>
			<HomeIcon fontSize='large' />
		</Link>
	);

	return (
		<div className={style.container}>
			{route.query.view ? (
				<div className={style.homeIcon}>{homeIcon}</div>
			) : (
				<div
					onClick={() => setOpen(!open)}
					className={style.profileImageContainer}
				>
					{catalogeData.image ? (
						<img src={catalogeData.image} />
					) : (
						<div className={style.imgFallback} />
					)}
				</div>
			)}

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
