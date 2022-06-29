import Image from 'next/image';
import { useDispatch } from 'react-redux';

// Actions
import { addToCart } from '../../../../../../redux/reducers/cartSlice';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import whatsappIcon from '../../../../../../../public/Assets/images/whatsappIcon.svg';
import cartIcon from '../../../../../../../public/Assets/images/cartIcon.svg';
import style from './Modal.module.scss';

const Modal = ({ openModal, setOpenModal, data }) => {
	console.log(data);
	const dispatch = useDispatch();
	const productData = data ? data.copy : null;

	const addProductToCart = () => {
		dispatch(addToCart({ ...data, type: 'productInList' }));
	};

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

			{productData ? (
				<div className={style.productInfo}>
					<h2>{productData[0]}</h2>
					<h4>{productData[1]}</h4>
					<h4>${productData[2]}</h4>
				</div>
			) : null}

			<div className={style.buttonContainer}>
				<button className={style.whatsappButton}>
					<Image src={whatsappIcon} alt='Whatasapp icon' />

					<h4>Consultar Por Whatsapp</h4>
				</button>

				<button className={style.cartButton} onClick={addProductToCart}>
					<Image src={cartIcon} alt='Cart icon' />
					<h4>Agregar Al Carrito</h4>
				</button>
			</div>
		</div>
	);
};

export default Modal;
