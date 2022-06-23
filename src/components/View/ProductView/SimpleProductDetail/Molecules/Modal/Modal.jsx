import Image from 'next/image';
import styles from './Modal.module.scss';
import whatsappIcon from '../../../../../../../public/Assets/images/whatsappIcon.svg';
import cartIcon from '../../../../../../../public/Assets/images/cartIcon.svg';

// Icons
import CloseIcon from '@mui/icons-material/Close';

export default function Modal({ openModal, setOpenModal }) {
	return openModal ? (
		<div className={styles.mainContainer}>
			<button
				className={styles.closeButton}
				onClick={() => setOpenModal(!openModal)}
			>
				<CloseIcon />
			</button>

			<div>
				<button className={styles.whatsappButton}>
					<Image src={whatsappIcon} alt='Whatasapp icon' />

					<h4>Consultar Por Whatsapp</h4>
				</button>

				<button className={styles.cartButton}>
					<Image src={cartIcon} alt='Cart icon' />
					<h4>Agregar Al Carrito</h4>
				</button>
			</div>
		</div>
	) : null;
}
