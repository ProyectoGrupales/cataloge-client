import { useState } from 'react';
import { useRouter } from 'next/router';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import style from './OneTimeModal.module.scss';

const OneTimeModal = ({ text }) => {
	const router = useRouter();
	const [display, setDisplay] = useState(true);
	const [current, setCurrent] = useState(0);

	if (display) {
		// Verificamos que exista el almacenamiento llamado 'ModalViews'
		if (!localStorage.getItem('ModalViews')) {
			// Si no existe en el localStorage lo creamos
			localStorage.setItem('ModalViews', JSON.stringify([]));
		}
		// Accedemos al arreglo guardado y buscamos coincidencias con la ruta actual
		const ModalViews = JSON.parse(localStorage.getItem('ModalViews'));
		const coincidence = ModalViews.filter(route => route === router.pathname);

		// Si existe quiere decir que ya la vió entonces no se la desplegamos
		if (coincidence.length) {
			setDisplay(false);
		}

		const closeModal = () => {
			ModalViews.push(router.pathname);
			localStorage.setItem('ModalViews', JSON.stringify(ModalViews));
			setDisplay(!display);
		};

		// Comprobamos si se trata de un array
		if (typeof text === 'object' && text.length) {
			return (
				<div className={style.container}>
					<div className={style.background} />

					<div className={style.textContainer}>
						<h2>{text[current]}</h2>
						{current === text.length - 1 ? (
							<button onClick={closeModal} className={style.closeButton}>
								<CloseIcon />
							</button>
						) : (
							<button
								onClick={() => setCurrent(current + 1)}
								className={style.next}
							>
								Siguiente
							</button>
						)}
					</div>
				</div>
			);
		}

		// En el caso de que se trate de un solo texto
		return (
			<div className={style.container}>
				<div className={style.background} />

				<div className={style.textContainer}>
					<h2>{text}</h2>
					<button onClick={closeModal} className={style.closeButton}>
						<CloseIcon />
					</button>
				</div>
			</div>
		);
	}
};

export default OneTimeModal;
