import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './Card.module.scss';

// Este es el item que se muestra al inicio del catalogo
const Card = ({ data }) => {
	const router = useRouter();

	let href = '/test';

	if (router.pathname.includes('admin')) {
		href = '/admin/test/';
	}

	if (data.type === 'productsInList') {
		return (
			// Este link te envia hacía el nombre del listado
			<Link href={`${href}/${data.title.toLowerCase()}`}>
				<div className={style.container + ' ' + style.inList}>
					<Image
						src={data.image}
						alt='Image of the card'
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
	}

	return (
		// Este link te envía hacía el id del producto
		<div className={style.container + ' ' + style.preview}>
			<Link href={`${href}/${data.id}`}>
				<div>
					{data.image ? (
						<Image
							src={data.image}
							alt='Image of the card'
							width={130}
							height={150}
							objectFit='contain'
							layout='fixed'
						/>
					) : (
						<div className={style.fallBackImage} />
					)}

					<div className={style.title}>
						<h1>${data.price}</h1>
						<h2>{data.title}</h2>
					</div>
				</div>
			</Link>

			<div className={style.buttonContainer}>
				<button>
					<ShoppingCartIcon fontSize='small' /> Añadir al carrito
				</button>
			</div>
		</div>
	);
};

export default Card;
