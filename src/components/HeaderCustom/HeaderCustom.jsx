import Link from 'next/link';

// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import style from './HeaderCustom.module.scss';

// Este componenet recibe atravez de "icon" un icono personalizado que quiera colocarle a la cabecera o el texto 'back' en caso de querer renderizar una flecha hacía atrás
// Pasandole siempre mediante la prop "redirectTo" hacía donde debe redirigirnos en caso de clickear el icono
const HeaderCustom = ({ title, icon, redirectTo }) => {
	return (
		<div className={style.container}>
			<h1>{title}</h1>

			{icon === 'back' ? (
				<Link href={redirectTo.href} as={redirectTo.as}>
					<div className={style.backIconContainer}>
						<ArrowBackIosNewIcon fontSize='large' />
					</div>
				</Link>
			) : (
				<Link href={redirectTo.href} as={redirectTo.as}>
					<div className={style.iconContainer}>{icon}</div>
				</Link>
			)}
		</div>
	);
};

export default HeaderCustom;
