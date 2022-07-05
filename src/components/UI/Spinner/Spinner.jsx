import { SpinnerCircular } from 'spinners-react';
import style from './Spinner.module.scss';

const Spinner = () => {
	return (
		<div className={style.container}>
			<h2>Cargando...</h2>
			<SpinnerCircular
				color='#a058e9'
				secondaryColor='#919293'
				size={40}
				thickness={150}
			/>
		</div>
	);
};

export default Spinner;
