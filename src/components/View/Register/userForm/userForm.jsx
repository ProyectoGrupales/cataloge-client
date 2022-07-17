import { useState, useEffect } from 'react';

import style from './userForm.module.scss';
import validate from '../../../../services/verifyUserForm';
import FormInput from '../../../UI/formInput/FormInput';

const UserForm = ({ nextForm, user, setUser }) => {
	// Controla el boton "Siguiente"
	const [disabled, setDisabled] = useState(true);

	// Controlador de errores
	const [error, setError] = useState({});

	const handleChange = event => {
		const { name, value } = event.target;
		setError({...error, ...validate(event.target, user)});
		setUser({...user, [name]: value});
	};

	const handleRequiredField = event => {
		const fields = {
			name: 'nombre',
			last_name: 'apellido',
			email: 'email',
			password: 'contraseña',
		}
		const { name, value } = event.target;
		if(!value) setError({...error, [name]: 'Se requiere '+fields[name]})
	}

	// Controlamos la igualdad en las contraseñas y que los datos necesarios estén cargados
	useEffect(() => {
		setDisabled(
			!(user.name &&
			user.last_name &&
			user.email &&
			user.password &&
			!Object.values(error).filter(e=>e).length)
		)
	}, [user, error]);
console.log(error)
	return (
		<div className={style.container}>
			<h1>Usuario</h1>
			<form onSubmit={e => e.preventDefault()}>
				<FormInput type="text" name="name" onChange={handleChange} label="Nombre" onBlur={handleRequiredField}/>
				<FormInput type="text" name="last_name" onChange={handleChange} label="Apellido" onBlur={handleRequiredField}/>
				<FormInput type="email" name="email" error={error} onChange={handleChange} label="Email" onBlur={handleRequiredField}/>
				<FormInput type="password" name="password" error={error} onChange={handleChange} label="Contraseña" onBlur={handleRequiredField}/>
				<FormInput type="password" name="rePassword" error={error} onChange={handleChange} label="Confirmar contraseña"/>
				<FormInput type="number" name="number_phone" onChange={handleChange} label="WhatsApp (Opcional)"/>
				<button
					disabled={disabled}
					onClick={() => nextForm(prev => prev + 1)}
					className={style.nextButton}
				>
					Siguiente
				</button>
			</form>
		</div>
	);
};

export default UserForm;
