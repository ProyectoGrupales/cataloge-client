import Link from 'next/link';
import style from './HeaderCustom.module.scss';

const HeaderCustom = ({ title, icon, redirectTo }) => {
	return (
		<div className={style.container}>
			<h1>{title}</h1>
			<Link href={redirectTo.href} as={redirectTo.as}>
				<div className={style.iconContainer}>{icon}</div>
			</Link>
		</div>
	);
};

export default HeaderCustom;
