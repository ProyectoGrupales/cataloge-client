import { useState } from 'react';
import Image from 'next/image';
// Components
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';
import parserHour from '../../../../services/parserAttentionHour';

// Icons
import EditIcon from '@mui/icons-material/Edit';
import style from './styles/profile.module.scss';

// Data
import catalogeData from '../../../../data/cataloge.json';

const ProfilePage = () => {
	const [catagole, setCataloge] = useState({
		name: catalogeData.name,
		image: catalogeData.image,
		attentionHour: catalogeData.attention_hour,
		branch_office: catalogeData.branch_office,
		description: catalogeData.description,
	});

	const [edit, setEdit] = useState(false);
	const attentionHour = parserHour(catalogeData.attention_hour);

	if (edit) {
		return (
			<div>
				<HeaderCustom title='Perfil' icon='back' />

				<div className={'container' + ' ' + style.formContainer}>
					<button onClick={() => setEdit(!edit)} className={style.editButton}>
						<EditIcon />
					</button>

					<form onSubmit={() => setEdit(!edit)}>
						<div className={style.text}>
							<label>Nombre del comercio</label>
							<input type='text' value={catagole.name} />
						</div>

						<div className={style.number}>
							<label>Horarios de atención:</label>
							<div>
								AM
								<div>
									De <input type='number' />
									hasta <input type='number' />
								</div>
								PM
								<div>
									De <input type='number' />
									Hasta
									<input type='number' />
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
	}

	return (
		<div>
			<HeaderCustom title='Perfil' icon='back' />

			<div className={'container' + ' ' + style.containerDefault}>
				<button onClick={() => setEdit(!edit)} className={style.editButton}>
					<EditIcon />
				</button>

				<Image
					src={catalogeData.image}
					width={100}
					height={100}
					objectFit='contain'
				/>
				<h1>{catalogeData.name}</h1>
				<p>{attentionHour}</p>
				<p>
					Sucursales :{' '}
					{catalogeData.branch_office.map((item, index) => (
						<h5 key={index}>{item}</h5>
					))}
				</p>
				<p>Descripción:</p>
				<h5>{catalogeData.description}</h5>
			</div>
		</div>
	);
};

export default ProfilePage;
