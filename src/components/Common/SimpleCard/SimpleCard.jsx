import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../redux/reducers/cartSlice';

// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import style from './SimpleCard.module.scss';

// Recibe un arreglo con la informacion que queremos pintar por columna
const SimpleCard = ({ columns, onClick, deleteable, id }) => {
	const dispatch = useDispatch();
	if (columns && columns.length) {
		return (
			<div
				className={style.container}
				onClick={onClick ? () => onClick() : null}
			>
				{deleteable ? (
					<div className={style.deleteContainer}>
						<button onClick={() => dispatch(removeProduct(id))}>
							<DeleteIcon fontSize='small' />
						</button>
					</div>
				) : null}

				{columns.map((text, index) =>
					index < 3 ? (
						!isNaN(text) ? (
							<p key={index}>${text}</p>
						) : (
							<p key={index}>{text}</p>
						)
					) : null
				)}
			</div>
		);
	}

	return (
		<div className={style.container} onClick={() => onClick()}>
			<p>Información inaccesible</p>
		</div>
	);
};

export default SimpleCard;
