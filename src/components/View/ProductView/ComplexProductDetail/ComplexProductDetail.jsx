import Link from 'next/link';
// Componets
import PreviewImage from '../../../Common/PreviewImage/PreviewImage';
import generateMsg from '../../../../services/generateMsgWpp';

// Icons & style
import style from './ComplexProductDetail.module.scss';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';

const ComplexProductDetail = ({ card, numberPhone }) => {
	const message = generateMsg(card);
	// Aplicamos el descuento
	let priceWithDiscount;
	if (card.discount) {
		priceWithDiscount = Math.floor(card.price * card.discount) / 100;
		const discount = card.discount / 100;
		priceWithDiscount = card.price * discount;
		priceWithDiscount = Math.floor(card.price - priceWithDiscount);
	}

	if (card) {
		return (
			<div className={style.container}>
				<PreviewImage images={card.images} />

				{card.discount ? (
					<div className={style.priceWithDiscount}>
						<div>
							<h1>${priceWithDiscount}</h1>
							<p className={style.discount}>{card.discount}% OFF</p>
						</div>

						<p>${card.price}</p>
						<h3>{card.title}</h3>
					</div>
				) : (
					<div className={style.productInfo}>
						<h1>${card.price}</h1>
						<h3>{card.title}</h3>
					</div>
				)}

				<div className={style.buttonsContainer}>
					<Link
						href={`https://api.whatsapp.com/send?phone=549${numberPhone}&text=${message}`}
					>
						<a target='_blank' className={style.customButton}>
							<WhatsAppIcon />

							<h4>Consultar Por Whatsapp</h4>
						</a>
					</Link>

					<button className={style.customButton + ' ' + style.test}>
						<ShoppingCartIcon />

						<h4>Añadir Al Carrito</h4>
					</button>
					<button className={style.customButton}>
						<ShareIcon />

						<h4>Compartir Producto</h4>
					</button>
				</div>

				<p className={style.description}>{card.description}</p>
			</div>
		);
	}
};

export default ComplexProductDetail;
