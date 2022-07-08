import { useEffect, useState } from 'react';

// Components
import SelectHour from '../../../UI/selectHour/SelectHour';
import BranchOffice from '../../../UI/branchOffice/BranchOffice';

// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import style from './catalogeForm.module.scss';

const CatalogeForm = ({ cataloge, setCataloge, nextForm }) => {
	const [disabled, setDisabled] = useState(true);
	// Las direcciones las menajamos por separado, luego la unimos al estado original
	const [tempDirections, setTempDirections] = useState([]);

	// Toma los cambios
	const handleChange = event => {
		setCataloge({
			...cataloge,
			[event.target.name]: event.target.value,
		});
	};

	// Cada vez que se añada una dirección lo añadimos al arreglo padre
	useEffect(() => {
		setCataloge({
			...cataloge,
			branch_office: tempDirections,
		});
	}, [tempDirections]);

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

	useEffect(() => {
		if (
			cataloge.cataloge_name &&
			cataloge.description &&
			cataloge.branch_office.length
		) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [cataloge]);

	console.log('Sucursales:', cataloge.branch_office.length);
	console.log('Disabled', disabled);

	return (
		<div className={style.container}>
			<div className={style.header}>
				<button
					onClick={() => nextForm(prev => prev - 1)}
					className={style.backButton}
				>
					<ArrowBackIosNewIcon fontSize='medium' />
				</button>

				<h1>Catálogo</h1>
			</div>

			<form onSubmit={e => e.preventDefault()}>
				<div>
					<label>Logo (Opcional)</label>
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
					<BranchOffice setState={setTempDirections} state={tempDirections} />
				</div>

				<div>
					<label>Horarios de atención (Opcional)</label>

					<div className={style.hourSelectionContainer}>
						<label>AM</label>

						<div>
							<SelectHour idHour={'AM1_HS'} idMin={'AM1_MIN'} isAM />
							<p>-</p>
							<SelectHour idHour={'AM2_HS'} idMin={'AM2_MIN'} isAM />
						</div>
					</div>

					<div className={style.hourSelectionContainer}>
						<label>PM</label>

						<div>
							<SelectHour idHour={'PM1_HS'} idMin={'PM1_MIN'} isPM />
							<p>-</p>
							<SelectHour idHour={'PM2_HS'} idMin={'PM2_MIN'} isPM />
						</div>
					</div>
				</div>
				<button
					onClick={handleSubmit}
					disabled={disabled}
					className={style.createButton}
				>
					Crear catálogo
				</button>
			</form>
		</div>
	);
};

export default CatalogeForm;
