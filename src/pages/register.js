import { useState } from 'react';

// Views
import UserForm from '../components/View/Register/userForm/userForm';
import CatalogeForm from '../components/View/Register/catalogeForm/catalogeForm';

/*
	Los pasos del registro dividido en pasos: 
	0_ Datos usuario
	1_ Datos catálogo
	2_ Submit!
*/

const RegisterPage = () => {
	// Cuando esté en true avanza al sieguiente form
	const [nextForm, setNextForm] = useState(0);

	// Aqui controlamos toda la lógica del formulario, las views solamente acceden a ellas
	const [user, setUser] = useState({
		image: '',
		name: '',
		last_name: '',
		number_phone: undefined,
		email: '',
		password: '',
		rePassword: '',
	});

	const [cataloge, setCataloge] = useState({
		image: '',
		name: '',
		description: '',
		branch_office: [],
		attention_hour: [],
	});

	return (
		<div className='container'>
			{nextForm === 0 ? (
				<UserForm user={user} setUser={setUser} nextForm={setNextForm} />
			) : nextForm === 1 ? (
				<CatalogeForm
					cataloge={cataloge}
					setCataloge={setCataloge}
					nextForm={setNextForm}
				/>
			) : nextForm === 2 ? (
				<p>Cargando...</p>
			) : null}
		</div>
	);
};

export default RegisterPage;
