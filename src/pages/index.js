import { useDispatch } from 'react-redux';
import fetchUserData from '../redux/apiCall/fetchUserData';

// Components
import MetaHead from '../components/Common/MetaHead/MetaHead';
import Image from 'next/image';

// Images
import teamWork from '../../public/Assets/images/teamWork.svg';
import style from '../styles/index.module.scss';
import { useEffect, useState } from 'react';

const Login = () => {
	const [disabled, setDisabled] = useState(true);
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

	return (
		<div className={style.container}>
			<MetaHead title='Inicio de Sesión' />
			<h1>Bienvenido de nuevo! 🚀</h1>

			<div>
				<Image src={teamWork} height={500} width={500} />
			</div>

			<form>
				<input
					type='text'
					placeholder='Email o teléfono'
					name='userData'
					onChange={handleChange}
				/>
				<input
					type='password'
					placeholder='Contraseña'
					name='password'
					onChange={handleChange}
				/>
				<button onClick={submitForm} disabled={disabled}>
					Iniciar Sesion
				</button>
			</form>
		</div>
	);
};

export default Login;
