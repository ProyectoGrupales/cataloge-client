import Image from 'next/image';
import style from './Modal.module.scss';
import whatsappIcon from '../../../../../../../public/Assets/images/whatsappIcon.svg';
import cartIcon from '../../../../../../../public/Assets/images/cartIcon.svg';

// Icons
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ openModal, setOpenModal, data }) => {
	console.log(data);
	return (
		<div
			className={
				style.mainContainer + ' ' + `${openModal ? style.open : style.close}`
			}
		>
			<button
				className={style.closeButton}
				onClick={() => setOpenModal(!openModal)}
			>
				<CloseIcon />
			</button>

			{data ? (
				<div className={style.productInfo}>
					<h2>{data[0]}</h2>
					<h4>{data[1]}</h4>
					<h4>{data[2]}</h4>
				</div>
			) : null}

			<div className={style.buttonContainer}>
				<button className={style.whatsappButton}>
					<Image src={whatsappIcon} alt='Whatasapp icon' />

					<h4>Consultar Por Whatsapp</h4>
				</button>

				<button className={style.cartButton}>
					<Image src={cartIcon} alt='Cart icon' />
					<h4>Agregar Al Carrito</h4>
				</button>
			</div>
		</div>
	);
};

export default Modal;
