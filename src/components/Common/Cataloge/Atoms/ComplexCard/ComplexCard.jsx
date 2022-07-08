import Image from 'next/image';

// icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './ComplexCard.module.scss';

const ComplexCard = ({ data, href, editMode, deleteMode }) => {
	let priceWithDiscount;

	if (data.discount) {
		// Aplicamos el descuento
		priceWithDiscount = Math.floor(data.price * data.discount) / 100;
		const discount = data.discount / 100;
		priceWithDiscount = data.price * discount;
		priceWithDiscount = Math.floor(data.price - priceWithDiscount);
	}

	const closeButton = () => {
		console.log('Eliminando...');
	};

	const stateHandler = () => {
		if (deleteMode) {
			closeButton();
		} else {
			window.location.href = `${href}/${editMode ? 'edit/' : ''}${data.title}`;
		}
	};

	// Este link te envía hacía el id del producto
	return (
		<div className={style.container}>
			<div onClick={stateHandler}>
				{editMode ? (
					<div className={style.button}>
						<EditIcon />
					</div>
				) : deleteMode ? (
					<div className={style.button}>
						<DeleteIcon />
					</div>
				) : null}

				{data.images.length ? (
					<Image
						src={data.images[0]}
						alt={data.title}
						width={170}
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

			<div className={style.buttonContainer}>
				<button>
					<ShoppingCartIcon fontSize='small' /> Aañadir al carrito
				</button>
			</div>
		</div>
	);
};

export default ComplexCard;
