import { useState } from 'react';
import createUser from '../adapters/createUser';
// Views
import UserForm from '../components/View/Register/userForm/userForm';
import CatalogeForm from '../components/View/Register/catalogeForm/catalogeForm';

/*
	Registro dividido en pasos, es el número en el que se encuentra nextForm: 
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
		number_phone: '',
		email: '',
		password: '',
		rePassword: '',
	});

	const [cataloge, setCataloge] = useState({
		image: '',
		cataloge_name: '',
		description: '',
		branch_office: [],
		attention_hour: [],
	});

	if (nextForm === 2) {
		createUser(user, cataloge);
		setNextForm(prev => prev + 1);
	}

	console.log(cataloge);

	return (
		<div className='container'>
			{nextForm === 0 ? (
				<UserForm user={user} setUser={setUser} nextForm={setNextForm} />
			) : nextForm >= 1 ? (
				<CatalogeForm
					cataloge={cataloge}
					setCataloge={setCataloge}
					nextForm={setNextForm}
				/>
			) : null}
		</div>
	);
};

export default RegisterPage;
