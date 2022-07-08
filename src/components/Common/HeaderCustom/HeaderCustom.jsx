// Components
import Link from 'next/link';

// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MenuIcon from '@mui/icons-material/Menu';
import style from './HeaderCustom.module.scss';

// Este componenet recibe atravez de "icon" un icono personalizado que quiera colocarle a la cabecera o el texto 'back' en caso de querer renderizar una flecha hacía atrás
// Pasandole siempre mediante la prop "redirectTo" hacía donde debe redirigirnos en caso de clickear el icono
const HeaderCustom = ({ title, icon, redirectTo, onClick }) => {
	return (
		<div className={style.container}>
			<h1>{title}</h1>

			{icon === 'menu' ? (
				<div className={style.menu} onClick={() => onClick()}>
					{<MenuIcon fontSize='large' />}
				</div>
			) : icon === 'back' ? (
				<div className={style.backIconContainer} onClick={() => history.go(-1)}>
					<ArrowBackIosNewIcon fontSize='large' />
				</div>
			) : redirectTo ? (
				<Link href={redirectTo.href} as={redirectTo.as}>
					<div className={style.iconContainer}>{icon}</div>
				</Link>
			) : null}
		</div>
	);
};

export default HeaderCustom;
