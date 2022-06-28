import style from './SimpleCard.module.scss';

// Recibe un arreglo con la informacion que queremos pintar por columna
const SimpleCard = ({ columns, onClick }) => {
	if (columns && columns.length) {
		return (
			<div className={style.container} onClick={() => onClick()}>
				{columns.map((text, index) => (
					<p key={index}>{text}</p>
				))}
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
