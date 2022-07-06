import Image from 'next/image';
import Link from 'next/link';

import style from './SimpleCard.module.scss';

const SimpleCard = ({ data, href }) => {

	console.log("Imagenes de la carta simple:", data.images)
	return (
		// Este link te envia hacía el nombre del listado
		<Link href={`${href}/${data.title.toLowerCase()}`}>
			<div className={style.container}>
				<Image
					src={data.images}
					alt={data.title}
					layout='fill'
					objectFit='cover'
					priority={true}
				/>

				<figcaption>
					<h6>{data.title}</h6>
				</figcaption>
			</div>
		</Link>
	);
};

export default SimpleCard;
