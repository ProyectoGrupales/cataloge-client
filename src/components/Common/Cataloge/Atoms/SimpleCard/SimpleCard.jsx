import Image from 'next/image';

// Icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './SimpleCard.module.scss';

const SimpleCard = ({ data, href, editMode, deleteMode }) => {
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

	return (
		// Este link te envia hacía el nombre del listado
		<div className={style.container} onClick={stateHandler}>
			{editMode ? (
				<div className={style.button}>
					<EditIcon />
				</div>
			) : deleteMode ? (
				<div className={style.button}>
					<DeleteIcon />
				</div>
			) : null}

			<Image
				src={data.images[0]}
				alt={data.title}
				layout='fixed'
				width={170}
				height={150}
				objectFit='contain'
				priority={true}
			/>

			<figcaption>
				<h6>{data.title}</h6>
			</figcaption>
		</div>
	);
};

export default SimpleCard;
