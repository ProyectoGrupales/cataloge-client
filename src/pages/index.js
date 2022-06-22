// Components
import MetaHead from '../components/MetaHead/MetaHead';
import Image from 'next/image';

// Images
import teamWork from '../../public/images/teamWork.svg';
import style from '../styles/index.module.scss';

const Home = () => {
	const redirect = e => {
		e.preventDefault();
		window.location.href = '/admin/test';
	};
	return (
		<div className={style.container}>
			<MetaHead title='Inicio de Sesión' />
			<h1>Bienvenido de nuevo! 🚀</h1>

			<div>
				<Image src={teamWork} height={500} width={500} />
			</div>

			<form onSubmit={redirect}>
				<input type='text' placeholder='Email o teléfono' />
				<input type='password' placeholder='Contraseña' />
				<button onClick={redirect}> Iniciar Sesion </button>
			</form>
		</div>
	);
};

export default Home;
