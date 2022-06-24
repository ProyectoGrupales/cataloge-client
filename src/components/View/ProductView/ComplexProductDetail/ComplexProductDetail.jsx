// Dependencies
import Image from 'next/image';

// Componets

// Icons & style
import style from './ComplexProductDetail.module.scss';
import remeraRoja from '../../../../../public/Assets/images/RemeraRoja.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
// States, hooks and services

export default function ComplexProductDetail() {
	return (
		<div className={style.mainContainer}>
			<div className={style.imageContainer}>
				<Image src={remeraRoja} />
			</div>

			<div className={style.mainInformationContainer}>
				<h5>$100.000,00</h5>
				<p>Remera Roja Uno</p>
			</div>

			<div className={style.buttonsContainer}>
				<button className={style.customButton}>
					<WhatsAppIcon />

					<h4>Consultar Por Whatsapp</h4>
				</button>
				<button className={style.customButton}>
					<ShoppingCartIcon />

					<h4>Añadir Al Carrito</h4>
				</button>
				<button className={style.customButton}>
					<ShareIcon />

					<h4>Compartir Producto</h4>
				</button>
			</div>

			<p className={style.description}>
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum dolor
				sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
				dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
				ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
				ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
				dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
				ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
				ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
			</p>
		</div>
	);
}
