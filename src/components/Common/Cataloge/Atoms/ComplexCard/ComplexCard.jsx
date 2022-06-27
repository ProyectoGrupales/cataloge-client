import Image from 'next/image';
import Link from 'next/link';

// icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './ComplexCard.module.scss';

const ComplexCard = ({ data, href }) => {
	let priceWithDiscount;

	if (data.discount) {
		// Aplicamos el descuento
		priceWithDiscount = Math.floor(data.price * data.discount) / 100;
		const discount = data.discount / 100;
		priceWithDiscount = data.price * discount;
		priceWithDiscount = Math.floor(data.price - priceWithDiscount);
	}

	return (
		// Este link te envía hacía el id del producto
		<div className={style.container}>
			<Link href={`${href}/${data.id}`}>
				<div>
					{data.images.length ? (
						<Image
							src={data.images[0]}
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
						{data.discount ? (
							<div className={style.priceWithDiscount}>
								<div>
									<h1>${priceWithDiscount}</h1>
									<p className={style.discount}>{data.discount}%</p>
								</div>
								<p>${data.price}</p>
							</div>
						) : (
							<h1>${data.price}</h1>
						)}
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

export default ComplexCard;
