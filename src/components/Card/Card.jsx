import Link from 'next/link';
import style from './Card.module.scss';

// Este es el item que se muestra al inicio del catalogo
const Card = ({ data }) => {
	const isInList = data.type === 'productsInList';

	if (isInList) {
		const href = `/test/${data.title.toLowerCase()}`;
		return (
			// Este link te envia hacía el nombre del listado
			<Link href={'/[name]/[view]/'} as={href} passHref>
				<div className={style.container + ' ' + style.inList}>
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
		// Este link te envía hacía el id del producto
		<Link href={`test/${data.id}`}>
			<div className={style.container + ' ' + style.preview}>
				{data.image ? (
					<img src={data.image} />
				) : (
					<div className={style.fallBackImage} />
				)}

				<div className={style.title}>
					<h1>${data.price}</h1>
					<h2>{data.title}</h2>
				</div>
			</div>
		</Link>
	);
};

export default Card;
