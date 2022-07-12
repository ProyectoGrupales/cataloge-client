import { useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import style from './SelectHours.module.scss';

const SelectHours = () => {
	const days = [
		'Todos los días',
		'Lunes a Viernes',
		'Lunes a Sabado ',
		'Fines de semana',
		'Feriados',
		'Lunes',
		'Martes',
		'Miercoles',
		'Jueves',
		'Viernes',
		'Sábados',
		'Domingos',
	];

	const [selectedDays, setSelectedDays] = useState([]);

	const handleChange = e => {
		e.target.classList.toggle(style.selected);

		console.log(selectedDays);
		console.log(selectedDays.indexOf(e.target.value));

		if (selectedDays.indexOf(e.target.value) >= 0) {
			setSelectedDays(selectedDays.filter(day => day !== e.target.value));
		} else {
			setSelectedDays([...selectedDays, e.target.value]);
		}
	};

	const toggleMenu = () => {
		document.querySelector('#menu').classList.toggle(style.open);
		document.addEventListener('click', toggleMenu);
	};

	return (
		<div className={style.container}>
			<div className={style.select} onClick={toggleMenu}>
				<button className={style.label}>
					<label>Seleccione los días de atención</label>
					<KeyboardArrowDownIcon fontSize='medium' className={style.arrow} />
				</button>

				<div className={style.menu} id='menu'>
					{days.map((day, index) => (
						<button key={index} onClick={handleChange} value={day}>
							{day}
						</button>
					))}
				</div>
			</div>

			<div>
				<h3>Días seleccionados</h3>
				{selectedDays.map((day, index) => (
					<p key={index}>{day}</p>
				))}
			</div>
		</div>
	);
};

export default SelectHours;

/*
    Todos los días
    Lunes a Viernes
    Lunes a Sabado 
    Fines de semana
    Feriados
    Lunes
    Martes
    Miercoles
    Jueves
    Viernes
    Sábado
    Domingo
*/
