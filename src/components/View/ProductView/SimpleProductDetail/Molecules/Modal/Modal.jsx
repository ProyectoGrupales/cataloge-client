import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import generateMsg from '../../../../../../services/generateMsgWpp';

// Actions
import { addToCart } from '../../../../../../redux/reducers/cartSlice';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import whatsappIcon from '../../../../../../../public/Assets/images/whatsappIcon.svg';
import cartIcon from '../../../../../../../public/Assets/images/cartIcon.svg';
import style from './Modal.module.scss';

const Modal = ({ openModal, setOpenModal, data }) => {
	const cataloge = useSelector(state => state.cataloge.catalogeData);
	const message = generateMsg(data);

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
				{cataloge.owner.number_phone ? (
					<Link
						href={`https://api.whatsapp.com/send?phone=549${cataloge.owner.number_phone}&text=${message}`}
					>
						<a target='_blank' className={style.whatsappButton}>
							<Image src={whatsappIcon} alt='Whatasapp icon' />

							<h4>Consultar Por Whatsapp</h4>
						</a>
					</Link>
				) : null}
				<button className={style.cartButton} onClick={addProductToCart}>
					<Image src={cartIcon} alt='Cart icon' />
					<h4>Agregar Al Carrito</h4>
				</button>
			</div>
		</div>
	);
};

export default Modal;
