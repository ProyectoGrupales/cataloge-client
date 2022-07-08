import style from './SelectHour.module.scss';

// Accedemos a las horas seleccionadas mediante los id que le pasamos
// Se le pasa un id para horas y otro para los minutos
const SelectHour = ({ idHour, idMin, isAM, isPM }) => {
	// Las horas y los minutos disponibles

	const AM = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const PM = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
	const min = [0, 10, 20, 30, 40, 50];

	if (isAM) {
		return (
			<div className={style.container}>
				<select id={idHour} defaultValue=''>
					<option value=''>HS</option>
					{AM.map(hour => (
						<option value={hour} key={hour}>
							{hour}
						</option>
					))}
				</select>

				<p className={style.twoPoints}>:</p>

				<select id={idMin} defaultValue=''>
					<option value=''>MINS</option>
					{min.map(minutes => (
						<option value={minutes} key={minutes}>
							{minutes}
						</option>
					))}
				</select>
				<p>hs</p>
			</div>
		);
	}

	if (isPM) {
		return (
			<div className={style.container}>
				<select id={idHour} defaultValue=''>
					<option value=''>HS</option>
					{PM.map(hour => (
						<option value={hour} key={hour}>
							{hour}
						</option>
					))}
				</select>

				<p className={style.twoPoints}>:</p>

				<select id={idMin} defaultValue=''>
					<option value=''>MINS</option>
					{min.map(minutes => (
						<option value={minutes} key={minutes}>
							{minutes}
						</option>
					))}
				</select>
				<p>hs</p>
			</div>
		);
	}
};

export default SelectHour;
