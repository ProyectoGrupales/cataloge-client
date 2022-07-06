import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Views
import EditProfile from '../../../../components/View/Admin/Settings/Views/EditProfile/EditProfile';

// Components
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';
import parserHour from '../../../../services/parserAttentionHour';

// Icons
import EditIcon from '@mui/icons-material/Edit';
import style from './styles/profile.module.scss';

const ProfilePage = () => {
	const cataloge = useSelector(state => state.cataloge.catalogeData);

	const [catalogeEdited, setCataloge] = useState({});

	// Este estado cambia cuando se toca el boton para editar la información
	const [edit, setEdit] = useState(false);
	console.log(catalogeEdited);

	useEffect(() => {
		if (cataloge.name) {
			setCataloge({
				name: cataloge.name,
				image: cataloge.image,
				attention_hour: cataloge.attention_hour,
				branch_office: cataloge.branch_office,
				description: cataloge.description,
			});
		}
	}, [cataloge]);

	if (edit) {
		return (
			<EditProfile
				setEdit={setEdit}
				cataloge={catalogeEdited}
				setCataloge={setCataloge}
			/>
		);
	}

	if (cataloge.name) {
		// Aquí se parsea los horarios de atención
		const attentionHour = parserHour(cataloge.attention_hour);

		return (
			<div>
				<HeaderCustom title='Perfil' icon='back' />

				<div className={'container' + ' ' + style.containerDefault}>
					<button onClick={() => setEdit(!edit)} className={style.editButton}>
						<EditIcon />
					</button>

					<Image
						src={cataloge.image}
						width={100}
						height={100}
						objectFit='contain'
					/>
					<h2>{cataloge.name.toUpperCase()}</h2>

					<p>{attentionHour}</p>

					<div>
						<p> Sucursales : </p>
						{cataloge.branch_office.map((item, index) => (
							<p key={index}>
								<b>{item}</b>
							</p>
						))}
					</div>

					<div>
						<p>Descripción:</p>
						<h5>{cataloge.description}</h5>
					</div>
				</div>
			</div>
		);
	}
};

export default ProfilePage;
