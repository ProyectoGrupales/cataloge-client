import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import style from './BranchOffice.module.scss';

const BranchOffice = ({ setState, state }) => {
	// Manejador de errores
	const [error, setError] = useState({
		branch_office: '',
	});

	// Controla y agrega las direcciones del usuario
	const moreBranchOffices = () => {
		const direction = document.querySelector('#branch_office').value;

		if (direction.length >= 5) {
			setState([...state, direction]);
			document.querySelector('#branch_office').value = '';
			setError({ branch_office: '' });
		} else {
			setError({ branch_office: 'La dirección debe tener al menos 5 caracteres ' });
		}
	};

	return (
		<div className={style.container}>
			<label> Dirección </label>
			<div className={style.inputContainer}>
				<input type='text' name='branch_office' id='branch_office' />
				<button onClick={moreBranchOffices} className={style.addDirection}>
					+
				</button>
			</div>

			{state.map((direction, index) => (
				<div key={index} className={style.direction}>
					<p>{direction}</p>
					<button onClick={() => {
						setState(state.filter((direction, index2) => index2 !== index))
						setError({branch_office: ''})
						}}>
						<DeleteIcon />
					</button>
				</div>
			))}

			{error.branch_office ? (
				<p className={style.error}>{error.branch_office}</p>
			) : null}
		</div>
	);
};

export default BranchOffice;
