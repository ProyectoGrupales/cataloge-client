import { useDispatch } from 'react-redux';
import fetchUserData from '../redux/apiCall/fetchUserData';

// Components
import MetaHead from '../components/Common/MetaHead/MetaHead';
import Image from 'next/image';

// Images
import teamWork from '../../public/Assets/images/teamWork.svg';
import style from '../styles/index.module.scss';
import { useEffect, useState } from 'react';
import FormInput from '../components/UI/formInput/FormInput';

const Login = () => {
	const [disabled, setDisabled] = useState(true);
	const [user, setUser] = useState({userData: '', password: ''});

	const dispatch = useDispatch();

	const handleChange = e => setUser({...user, [e.target.name]: e.target.value});

	useEffect(() => setDisabled(!(user.userData && user.password)), [user]);

	const submitForm = e => {
		e.preventDefault();
		const { userData, password } = user;
		if (userData && password) fetchUserData(dispatch, {userData, password});
	};

	return (
		<div className={style.container}>
			<MetaHead title='Inicio de Sesión' />
			<h1>Bienvenido de nuevo! 🚀</h1>
			<Image src={teamWork} height={425} width={500} />
			<form>
				<FormInput type='text' name='userData' onChange={handleChange} label='Email o teléfono'/>
				<FormInput type='password' name='password' onChange={handleChange} label='Contraseña'/>
				<button onClick={submitForm} disabled={disabled}>
					Iniciar Sesión
				</button>
			</form>

			<p>
				<a href='/register'>Quiero crear una cuenta</a>{' '}
			</p>
		</div>
	);
};

export default Login;
