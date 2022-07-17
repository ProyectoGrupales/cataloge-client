import { useEffect, useState } from 'react';

// Components
import BranchOffice from '../../../UI/branchOffice/BranchOffice';
import OfficeHours from '../../../UI/officeHours/OfficeHours';

// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import style from './catalogeForm.module.scss';
import FormInput from '../../../UI/formInput/FormInput';

const CatalogeForm = ({ cataloge, setCataloge, nextForm }) => {
	const [disabled, setDisabled] = useState(true);
	// Las direcciones las menajamos por separado, luego la unimos al estado original
	const [tempDirections, setTempDirections] = useState([]);

	// Horarios de servicio = {lunes: {startRange: '14:30', endRange: '15:30'}, martes: {startRange: ':30', endRange: '6:'}, ...}
	const [serviceHours, setServiceHours] = useState({});

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

	const handleTimeRange = ({day, startRange, endRange, remove}) => {
		if(remove){
			const newServiceHours = {...serviceHours};
			delete newServiceHours[day];
			setServiceHours(newServiceHours);
		}
		else{
			setServiceHours({
				...serviceHours,
				[day]: {
					startRange: startRange ?? (serviceHours[day]?.startRange || 0),
					endRange: endRange ?? (serviceHours[day]?.endRange || 0),
				},
			});
		}
	}

	// Finaliza el registro
	const handleSubmit = e => {
		e.preventDefault();
		setCataloge({
			...cataloge,
			branch_office: tempDirections,
			attention_hour: serviceHours,
		});
		nextForm(prev => prev + 1);
	};

	useEffect(() => {
		setDisabled(!(
			cataloge.cataloge_name &&
			cataloge.description &&
			cataloge.branch_office.length
		))
	}, [cataloge]);

	// console.log('Sucursales:', cataloge.branch_office.length);
	// console.log('Disabled', disabled);

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
				<FormInput label='Logo (Opcional)' name='address' onChange={handleChange} type='file'/>
				<FormInput label='Nombre del catálogo' name='cataloge_name' onChange={handleChange} />
				<FormInput label='Agrégale una descripcion' name='description' onChange={handleChange} />

				<BranchOffice setState={setTempDirections} state={tempDirections} />

				<OfficeHours setTimeRange={handleTimeRange}/>

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
