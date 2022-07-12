import { useState } from 'react';

// Componets
import HeaderCustom from '../../../../Common/HeaderCustom/HeaderCustom';
import SelectHour from '../../../../UI/selectHour/SelectHour';
import BranchOffice from '../../../../UI/branchOffice/BranchOffice';
import updateCataloge from '../../../../../adapters/updateCataloge';

// Icons & Styles
import EditIcon from '@mui/icons-material/Edit';

import style from './EditProfile.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const Profile = ({ setEdit, cataloge }) => {
	const dispatch = useDispatch();
	const token = useSelector(state => state.user.userData.token);
	const [newCataloge, setNewCataloge] = useState(cataloge);
	const [branchOffice, setBranchOffie] = useState(cataloge.branch_office || []);

	const changeHandler = e => {
		setNewCataloge({
			...newCataloge,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = e => {
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

		updateCataloge(
			dispatch,
			{
				...newCataloge,
				branch_office: branchOffice,
				attention_hour: [AM, PM],
			},
			token
		);
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
					<div className={style.text}>
						<label>Nombre del comercio</label>
						<input
							type='text'
							name='name'
							value={newCataloge.name}
							onChange={changeHandler}
						/>
					</div>

					<div className={style.number}>
						<label>Horarios de atención:</label>
						<div>
							AM
							<div>
								<SelectHour idHour='AM1_HS' idMin='AM1_MIN' isAM />
								<p>-</p>
								<SelectHour idHour='AM2_HS' idMin='AM2_MIN' isAM />
							</div>
							PM
							<div>
								<SelectHour idHour='PM1_HS' idMin='PM1_MIN' isPM />
								<p>-</p>

								<SelectHour idHour='PM2_HS' idMin='PM2_MIN' isPM />
							</div>
						</div>
					</div>

					<div className={style.text}>
						<div>
							<label>Sucursales:</label>
							<BranchOffice setState={setBranchOffie} state={branchOffice} />
						</div>
					</div>

					<div>
						<label>Descripción del comercio</label>
						<textarea
							cols={40}
							rows={10}
							value={newCataloge.description}
							name='description'
							onChange={changeHandler}
						/>
					</div>

					<button onClick={submitHandler}>Guardar cambios</button>
				</form>
			</div>
		</div>
	);
};

export default Profile;
