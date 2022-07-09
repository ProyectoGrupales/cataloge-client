import { useDispatch } from 'react-redux';
import fetchUserData from '../redux/apiCall/fetchUserData';

// Components
import MetaHead from '../components/Common/MetaHead/MetaHead';
import Image from 'next/image';

// Images
import teamWork from '../../public/Assets/images/teamWork.svg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import style from '../styles/index.module.scss';
import { useEffect, useState } from 'react';

const Login = () => {
	const [disabled, setDisabled] = useState(true);
	const [viewPassword, setViewPassword] = useState(false);
	const [user, setUser] = useState({
		userData: '',
		password: '',
	});
	const dispatch = useDispatch();

	const handleChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		if (user.userData && user.password) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [user]);

	const submitForm = e => {
		e.preventDefault();

		if (user.userData && user.password) {
			fetchUserData(dispatch, {
				userData: user.userData,
				password: user.password,
			});
		}
	};

	const togglePassword = e => {
		e.preventDefault();
		setViewPassword(!viewPassword);
	};

	return (
		<div className={style.container}>
			<MetaHead title='Inicio de Sesión' />
			<h1>Bienvenido de nuevo! 🚀</h1>

			<Image src={teamWork} height={425} width={500} />

			<form>
				<input
					type='text'
					placeholder='Email o teléfono'
					name='userData'
					onChange={handleChange}
				/>
				<div className={style.password}>
					<input
						type={viewPassword ? 'text' : 'password'}
						placeholder='Contraseña'
						name='password'
						onChange={handleChange}
					/>

					<button onClick={togglePassword}>
						{viewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
					</button>
				</div>

				<button style={{cursor:"pointer"}} onClick={submitForm} disabled={disabled}>
					Iniciar Sesion
				</button>
			</form>

			<p>
				Or <a href='/register'>Create a new account</a>{' '}
			</p>
		</div>
	);
};

export default Login;
