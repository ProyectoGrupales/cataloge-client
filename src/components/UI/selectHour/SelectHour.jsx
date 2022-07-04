import style from './SelectHour.module.scss';

// Accedemos a las horas seleccionadas mediante los id que le pasamos
// Se le pasa un id para horas y otro para los minutos
const SelectHour = ({ idHour, idMin }) => {
	// Las horas y los minutos disponibles
	const hs = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23,
	];
	const min = [0, 10, 20, 30, 40, 50];

	return (
		<div className={style.container}>
			<select id={idHour}>
				<option value={null} selected>
					HS
				</option>
				{hs.map(hour => (
					<option key={hour}>{hour}</option>
				))}
			</select>

			<p className={style.twoPoints}>:</p>

			<select id={idMin} defaultValue={null}>
				<option value={null} selected>
					MINS
				</option>
				{min.map(minutes => (
					<option key={minutes}>{minutes}</option>
				))}
			</select>
			<p>hs</p>
		</div>
	);
};

export default SelectHour;
