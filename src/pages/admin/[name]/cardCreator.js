import { useState } from 'react';

// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import style from '../../../styles/CardCreator.module.scss';

// El tema aquí es como manejar todos los datos de multiples páginas en una sola

// REFACTORIZAR ESTA PÁGINA
const CardCreator = () => {
	const [typeCard, setTypeCard] = useState(null);

	// Lo que se muestra en caso de que escoja productsInList
	if (typeCard === 'productsInList') {
		return (
			<div className={style.inListContainer}>
				<div className={style.head}>
					<div className={style.iconContainer} onClick={() => history.go(-1)}>
						<ArrowBackIosNewIcon fontSize='large' />
					</div>

					<h1>Lista de productos</h1>
				</div>
				<form
					onSubmit={() => console.log('Se está creando está mierda!!')}
					className={style.form}
				>
					<div>
						<label>Imagen del listado</label>
						<input type='file' accept='image/*' />
					</div>

					<div>
						<label>Nombre del listado</label>
						<p>
							(Un nombre relacionado a lo que se espera encontrar dentro de esta
							lista)
						</p>
						<input type='text' />
					</div>

					<div>
						<label>Seleccione un archivo EXCEL</label>
						<input
							type='file'
							accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
						/>
					</div>

					<button>Crear</button>
				</form>
			</div>
		);
	}
	// Lo que se muestra en caso de que escoja productPreview
	if (typeCard === 'productPreview') {
		return (
			<div className={style.previewContainer}>
				<div className={style.head}>
					<div className={style.iconContainer} onClick={() => history.go(-1)}>
						<ArrowBackIosNewIcon fontSize='large' />
					</div>

					<h1>Producto detallado</h1>
				</div>

				<form className={style.form}>
					<div>
						<label>Elija las imagenes</label>
						<input type='file' accept='image/*' multiple />
					</div>

					<div>
						<label>Nombre del producto</label>
						<input type='text' />
					</div>

					<div>
						<label>Descripción</label>
						<textarea rows={5} cols={40} />
					</div>

					<div className={style.inputNumber}>
						<div>
							<label>Stock</label>
							<input type='number' />
						</div>

						<div>
							<label>Price</label>
							<input type='number' />
						</div>
					</div>

					<button>Crear</button>
				</form>
			</div>
		);
	}

	// Estas son las opciónes para escojer al principio
	return (
		<div className={style.defaultPage}>
			<div className={style.head}>
				<div className={style.iconContainer} onClick={() => history.go(-1)}>
					<ArrowBackIosNewIcon fontSize='large' />
				</div>

				<h1>Creador de Cards</h1>
			</div>

			<div className={style.chooseTypeContainer}>
				<button onClick={() => setTypeCard('productsInList')}>
					Lista de productos
				</button>
				<button onClick={() => setTypeCard('productPreview')}>
					Producto detallado
				</button>
			</div>
		</div>
	);
};

export default CardCreator;
