// Componets
import { useState, useEffect } from 'react';
import HeaderCustom from '../../../../../Common/HeaderCustom/HeaderCustom';
import OfficeHours from '../../../../../UI/officeHours/OfficeHours';
import BranchOffice from '../../../../../UI/branchOffice/BranchOffice';
import FormInput from '../../../../../UI/formInput/FormInput';

// Icons & Styles
import EditIcon from '@mui/icons-material/Edit';
import style from './EditProfile.module.scss';

const Profile = ({ setEdit, cataloge, setCataloge }) => {

	const [serviceHours, setServiceHours] = useState(cataloge.attention_hour || {});
	const [tempDirections, setTempDirections] = useState(cataloge?.branch_office || []);

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

	useEffect(() => {
		setCataloge({
			...cataloge,
			branch_office: tempDirections,
			attention_hour: serviceHours,
		});
	}, [tempDirections, serviceHours]);

	const handleChange = event => {
		setCataloge({
			...cataloge,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div>
			<HeaderCustom title='Perfil' icon='back' />

			<div className={'container' + ' ' + style.formContainer}>
				<button
					onClick={() => setEdit(prev => !prev)}
					className={style.editButton}
				>
					<EditIcon />
				</button>

				<form onSubmit={e => e.preventDefault()}>
					<FormInput label='Logo (Opcional)' value={cataloge} name='image' onChange={handleChange} type='file'/>
					<FormInput label='Nombre del comercio' value={cataloge} name='cataloge_name' onChange={handleChange} />
					<FormInput label='Descripción del comercio' value={cataloge} name='description' onChange={handleChange} area/>
					<FormInput label='Nombre del catálogo' value={cataloge} name='name' onChange={handleChange} />

					<BranchOffice setState={setTempDirections} state={tempDirections} />
					<OfficeHours setTimeRange={handleTimeRange} hours={serviceHours}/>
					
					<button onClick={()=>{/* falta ruta para actualizar perfil */}}>Guardar cambios</button>
				</form>
			</div>
		</div>
	);
};

export default Profile;
