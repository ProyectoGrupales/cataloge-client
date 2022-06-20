import Link from 'next/link';
import style from './Card.module.scss';

// Este es el item que se muestra al inicio del catalogo
const Card = ({ data }) => {
	const isInList = data.type === 'productsInList';

	if (isInList) {
		const href = `test/${data.title.toLowerCase()}`;
		return (
			<Link href={href}>
				<div className={style.container}>
					{data.image ? (
						<img src={data.image} />
					) : (
						<div className={style.fallBackImage} />
					)}
					<h1>{data.title}</h1>
				</div>
			</Link>
		);
	}

	return (
		<Link href={`test/${data.id}`}>
			<div className={style.container}>
				{data.image ? (
					<img src={data.image} />
				) : (
					<div className={style.fallBackImage} />
				)}
				<h1>{data.price}</h1>
				<h2>{data.title}</h2>
			</div>
		</Link>
	);
};

export default Card;
