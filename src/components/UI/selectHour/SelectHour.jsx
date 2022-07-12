import style from './SelectHour.module.scss';

// Está función devuelve las horas seleccionadas por el usuario.
// Devuelve un arreglo, en el que están las horas y los minutos seleccionado
const SelectHour = ({ idHour, idMin }) => {
	// Las horas y los minutos disponibles

	const HS = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23,
	];
	const MIN = [0, 10, 20, 30, 40, 50];

	return (
		<div className={style.container}>
			<select id={idHour} defaultValue=''>
				<option value=''>HS</option>

				{HS.map(hour => (
					<option value={hour} key={hour}>
						{hour}
					</option>
				))}
			</select>

			<p className={style.twoPoints}>:</p>

			<select id={idMin} defaultValue=''>
				<option value=''>MINS</option>

				{MIN.map(minutes => (
					<option value={minutes} key={minutes}>
						{minutes}
					</option>
				))}
			</select>
			<p>hs</p>
		</div>
	);
};

export default SelectHour;
