// Dependencies
import Image from 'next/image';
import { useRouter } from 'next/router';

// Componets
import PreviewImage from '../../../Common/PreviewImage/PreviewImage';

// Icons & style
import style from './ComplexProductDetail.module.scss';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';

import catalogeData from '../../../../data/cataloge.json';

export default function ComplexProductDetail() {
	const id = Number(useRouter().query.view);
	const cardFound = catalogeData.cards.find(card => card.id === id);

	let priceWithDiscount;
	if (cardFound.discount) {
		// Aplicamos el descuento
		priceWithDiscount = Math.floor(cardFound.price * cardFound.discount) / 100;
		const discount = cardFound.discount / 100;
		priceWithDiscount = cardFound.price * discount;
		priceWithDiscount = Math.floor(cardFound.price - priceWithDiscount);
	}

	console.log(cardFound);

	if (cardFound) {
		return (
			<div className={style.container}>
				<div className={style.imageContainer}>
					<PreviewImage images={cardFound.images} />
					{/* <Image
						src={cardFound.images[0]}
						width={200}
						height={200}
						objectFit='cover'
					/> */}
				</div>

				{cardFound.discount ? (
					<div className={style.priceWithDiscount}>
						<div>
							<h1>${priceWithDiscount}</h1>
							<p className={style.discount}>{cardFound.discount}% OFF</p>
						</div>

						<p>${cardFound.price}</p>
						<h3>{cardFound.title}</h3>
					</div>
				) : (
					<div className={style.productInfo}>
						<h1>${cardFound.price}</h1>
						<h3>{cardFound.title}</h3>
					</div>
				)}

				<div className={style.buttonsContainer}>
					<button className={style.customButton}>
						<WhatsAppIcon />

						<h4>Consultar Por Whatsapp</h4>
					</button>
					<button className={style.customButton + ' ' + style.test}>
						<ShoppingCartIcon />

						<h4>Añadir Al Carrito</h4>
					</button>
					<button className={style.customButton}>
						<ShareIcon />

						<h4>Compartir Producto</h4>
					</button>
				</div>

				<p className={style.description}>{cardFound.description}</p>
			</div>
		);
	}
}
