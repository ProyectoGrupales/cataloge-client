import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './Card.module.scss';
import arrowImage from '../../../public/images/Arrow.svg';

// Este es el item que se muestra al inicio del catalogo
const Card = ({ data }) => {
	const router = useRouter();

	if (data.type === 'productsInList') {
		return (
			// Este link te envia hacía el nombre del listado
			<div
				className={style.simpleCardContainer}
				onClick={() => router.push(`/test/${data.title.toLowerCase()}`)}
			>
				<Image src={data.image} alt='Image of the card' layout='fill' />

				<figcaption>
					<h6>{data.title}</h6>
					<Image src={arrowImage}></Image>
				</figcaption>
			</div>
		);
	}
	//

	return (
		// Este link te envía hacía el id del producto
		<Link href={`test/${data.id}`}>
			<div className={style.container + ' ' + style.preview}>
				{data.image ? (
					<Image src={data.image} alt='Image of the card' />
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
