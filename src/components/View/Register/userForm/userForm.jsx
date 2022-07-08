import { useState, useEffect } from 'react';

// Icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import style from './userForm.module.scss';

const UserForm = ({ nextForm, user, setUser }) => {
	// Controla el boton "Siguiente"
	const [disabled, setDisabled] = useState(true);
	// Estado para ver las contraseñas
	const [visibility, setVisibility] = useState(false);

	// Controlador de errores
	const [error, setError] = useState({
		password: false,
	});

	// Seteador de errores
	const controlError = () => {
		if (user.password !== user.rePassword && !error.password) {
			setError({
				...error,
				password: true,
			});
		}
		if (user.password === user.rePassword && error.password) {
			setError({
				...error,
				password: false,
			});
		}
	};

	const handleChange = event => {
		controlError();

		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	// Controlamos la igualdad en las contraseñas y que los datos necesarios estén cargados
	useEffect(() => {
		controlError();

		if (
			user.name &&
			user.last_name &&
			user.email &&
			!error.password &&
			user.password
		) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [user, error]);

	return (
		<div className={style.container}>
			<h1>Usuario</h1>
			<form onSubmit={e => e.preventDefault()}>
				<div>
					<label>Nombre</label>
					<input
						type='string'
						name='name'
						value={user.name}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label>Apellido</label>
					<input
						type='string'
						name='last_name'
						value={user.last_name}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label>Email</label>
					<input
						type='string'
						name='email'
						value={user.email}
						onChange={handleChange}
					/>
				</div>

				<div className={style.passwordContainer}>
					<div>
						<label>Contraseña</label>

						<input
							type={visibility ? 'text' : 'password'}
							name='password'
							value={user.password}
							onChange={handleChange}
						/>
						<p className={style.error}>
							{error.password ? 'Las contraseñas deben ser iguales' : null}
						</p>
					</div>

					<div>
						<label>Repita contraseña</label>
						<input
							type={visibility ? 'text' : 'password'}
							name='rePassword'
							value={user.rePassword}
							onChange={handleChange}
						/>
						<p className={style.error}>
							{error.password ? 'Las contraseñas deben ser iguales' : null}
						</p>
					</div>

					<div className={style.viewPassword}>
						<label>Mostrar contraseñas</label>
						{visibility ? (
							<button onClick={() => setVisibility(!visibility)}>
								<VisibilityOffIcon />
							</button>
						) : (
							<button onClick={() => setVisibility(!visibility)}>
								<VisibilityIcon />
							</button>
						)}
					</div>
				</div>

				<div>
					<label>Whatsapp (Opcional)</label>
					<input
						type='number'
						name='number_phone'
						value={user.number_phone}
						onChange={handleChange}
					/>
				</div>

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
