import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

// Components & functions
import ProfileModal from './Molecules/ProfileModal/ProfileModal';
import Badge from '@mui/material/Badge';
import AttentionHours from '../../UI/AttentionHours/AttentionHours';

// Iconos
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './Header.module.scss';

// Esta es la cabecera por defecto que ve el cliente
const Header = () => {
	const route = useRouter();
	const cataloge = useSelector(state => state.cataloge.catalogeData);
	const productslength = useSelector(state => state.cart.products.length);
	const [open, setOpen] = useState(false);

	if (cataloge.name) {

		const homeIcon = (
			<Link href={`/${cataloge.name}`}>
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
						{cataloge.image ? (
							<img src={cataloge.image} />
						) : (
							<div className={style.imgFallback} />
						)}
					</div>
				)}
				<div className={style.catalogeData} onClick={() => setOpen(!open)}>
					<h1>{cataloge.name.toUpperCase() || 'Nombre del comercio'}</h1>
					<AttentionHours hours={cataloge.attention_hour} simple/>
				</div>
				<div className={style.iconContainer}>
					<Link href={`/${cataloge.name}/shoppingCart`}>
						<Badge badgeContent={productslength} color='error'>
							<ShoppingCartIcon fontSize='large' />
						</Badge>
					</Link>
				</div>
				<div className={style.searchContainer}>
					<input type='text' placeholder='¿Que estás buscando? 👀' />
					<div>
						<SearchIcon />
					</div>
				</div>
				<ProfileModal data={cataloge} open={open} setOpen={setOpen} />
			</div>
		);
	}

	return <h1>Loading...</h1>;
};

export default Header;
