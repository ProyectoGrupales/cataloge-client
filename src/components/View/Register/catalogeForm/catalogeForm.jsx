import { useState } from 'react';

// Components
import SelectHour from '../../../UI/selectHour/SelectHour';

// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// REFACTORIZAR LA SELECCION DE HORAS
const CatalogeForm = ({ cataloge, setCataloge, nextForm }) => {
	// Manejador de errores
	const [error, setError] = useState({
		branch_office: '',
		attention_hour: '',
	});

	// Las direcciones las menajamos por separado, luego la unimos al estado original
	const [tempDirections, setTempDirections] = useState([]);

	// Toma los cambios
	const handleChange = event => {
		setCataloge({
			...cataloge,
			[event.target.name]: event.target.value,
		});
	};

	// Controla y agrega las direcciones del usuario
	const moreBranchOffices = e => {
		const direction = document.querySelector('#branch_office').value;

		if (direction.length >= 5) {
			setTempDirections([...tempDirections, direction]);
			document.querySelector('#branch_office').value = '';
			setError({
				branch_office: '',
			});
		} else {
			setError({
				branch_office: 'La dirección debe tener al menos 5 caracteres ',
			});
		}
	};

	// Finaliza el registro
	const handleSubmit = e => {
		e.preventDefault();

		// Aqui pondremos los horarios
		const AM = [];
		const PM = [];

		// Primera hora
		const AM1_HS = document.querySelector('#AM1_HS').value;
		const AM1_MIN = document.querySelector('#AM1_MIN').value;

		// Segunda hora
		const AM2_HS = document.querySelector('#AM2_HS').value;
		const AM2_MIN = document.querySelector('#AM2_MIN').value;

		// Tercera hora
		const PM1_HS = document.querySelector('#PM1_HS').value;
		const PM1_MIN = document.querySelector('#PM1_MIN').value;

		// Cuarta hora
		const PM2_HS = document.querySelector('#PM2_HS').value;
		const PM2_MIN = document.querySelector('#PM2_MIN').value;

		AM.push([AM1_HS, AM1_MIN], [AM2_HS, AM2_MIN]);
		PM.push([PM1_HS, PM1_MIN], [PM2_HS, PM2_MIN]);

		setCataloge({
			...cataloge,
			branch_office: tempDirections,
			attention_hour: [AM, PM],
		});

		nextForm(prev => prev + 1);
	};

	return (
		<div>
			<button onClick={() => nextForm(prev => prev - 1)}>
				<ArrowBackIosNewIcon fontSize='small' />
			</button>

			<h1>Creación de Catálogo</h1>

			<form onSubmit={e => e.preventDefault()}>
				<div>
					<label>Logo</label>
					<input type='file' name='image' onChange={handleChange} />
				</div>

				<div>
					<label>Nombre del catálogo</label>
					<input type='text' name='cataloge_name' onChange={handleChange} />
				</div>

				<div>
					<label>Agrégale una descripcion</label>
					<input type='text' name='description' onChange={handleChange} />
				</div>

				<div>
					<label>Dirección</label>

					{tempDirections.length
						? tempDirections.map((direction, index) => (
								<div key={index}>
									<p>{direction}</p>

									<button
										onClick={e => {
											setTempDirections(
												tempDirections.filter(
													(direction, index2) => index2 !== index
												)
											);
										}}
									>
										<DeleteIcon />
									</button>
								</div>
						  ))
						: null}

					<input type='text' name='branch_office' id='branch_office' />

					<button onClick={e => moreBranchOffices(e)}>Agregar dirección</button>
					{error.branch_office ? <p>{error.branch_office}</p> : null}
				</div>

				<div>
					<label>Horarios de atención (opciónal)</label>
					<div>
						<label>AM</label>
						<div>
							<p>De</p>
							<SelectHour idHour={'AM1_HS'} idMin={'AM1_MIN'} />
						</div>

						<div>
							<p>Hasta</p>
							<SelectHour idHour={'AM2_HS'} idMin={'AM2_MIN'} />
						</div>
					</div>

					<div>
						<label>PM</label>

						<SelectHour idHour={'PM1_HS'} idMin={'PM1_MIN'} />

						<div>
							<p>Hasta</p>
							<SelectHour idHour={'PM2_HS'} idMin={'PM2_MIN'} />
						</div>
					</div>
					{error.attention_hour ? <p>{error.attention_hour}</p> : null}
				</div>
				<button onClick={handleSubmit}>Crear catálogo</button>
			</form>
		</div>
	);
};

export default CatalogeForm;
