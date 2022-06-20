import style from '../styles/index.module.scss';

const Home = () => {
	const redirect = () => {
		window.location.href = '/admin/test';
	};
	return (
		<div className={style.container}>
			<input type='text' placeholder='example@example.com' />
			<input type='password' placeholder='*************' />
			<button onClick={redirect}> Iniciar Sesion </button>
		</div>
	);
};

export default Home;
