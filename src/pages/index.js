import { useDispatch } from 'react-redux';
import fetchUserData from '../redux/apiCall/fetchUserData';

// Components
import MetaHead from '../components/Common/MetaHead/MetaHead';
import Image from 'next/image';

// Images
import teamWork from '../../public/Assets/images/teamWork.svg';
import style from '../styles/index.module.scss';

const Login = () => {
	const dispatch = useDispatch();

	const submitForm = e => {
		e.preventDefault();
		// Tomamos la info de los inputs
		const userData = document.querySelector('#userData').value;
		const password = document.querySelector('#password').value;

		if (userData && password) {
			fetchUserData(dispatch, { userData, password });
			// window.location.href = '/admin/test';
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
				<input type='text' placeholder='Email o teléfono' id='userData' />
				<input type='password' placeholder='Contraseña' id='password' />
				<button onClick={submitForm} disabled={false}>
					Iniciar Sesion
				</button>
			</form>
		</div>
	);
};

export default Login;
