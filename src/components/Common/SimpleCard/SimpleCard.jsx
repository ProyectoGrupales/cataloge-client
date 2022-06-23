import style from './SimpleCard.module.scss';

// Recibe un arreglo con la informacion que queremos pintar por columna
const SimpleCard = ({ colums, onClick }) => {
	if (colums.length) {
		return (
			<div className={style.container} onClick={() => onClick()}>
				{colums.map((text, index) => (
					<p key={index}>{text}</p>
				))}
			</div>
		);
	}

	return <p>Failed</p>;
};

export default SimpleCard;
