// Componets
import HeaderCustom from '../../../../../Common/HeaderCustom/HeaderCustom';
import SelectHour from '../../../../../UI/selectHour/SelectHour';

// Icons & Styles
import EditIcon from '@mui/icons-material/Edit';
import style from './EditProfile.module.scss';

const Profile = ({ setEdit, cataloge, setCataloge }) => {
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
						<input type='text' value={cataloge.name} />
					</div>

					<div className={style.number}>
						<label>Horarios de atención:</label>
						<div>
							AM
							<div>
								De
								<SelectHour idHour='AM1_HS' idMin='AM1_MIN' />
								Hasta
								<SelectHour idHour='AM2_HS' idMin='AM2_MIN' />
							</div>
							PM
							<div>
								De
								<SelectHour idHour='PM1_HS' idMin='PM1_MIN' />
								Hasta
								<SelectHour idHour='PM2_HS' idMin='PM2_MIN' />
							</div>
						</div>
					</div>

					<div className={style.text}>
						<div>
							<label>Sucursales:</label>
							<input type='text' />
						</div>
						<button onClick={e => e.preventDefault()}>Agregar</button>
					</div>

					<div>
						<label>Descripción del comercio</label>
						<textarea cols={40} rows={10} />
					</div>

					<button>Guardar cambios</button>
				</form>
			</div>
		</div>
	);
};

export default Profile;
