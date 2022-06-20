import Link from 'next/link';
// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import style from '../../../styles/CardCreator.module.scss';

import { useState } from 'react';
const CardCreator = () => {
	const [typeCard, setTypeCard] = useState(null);

	if (typeCard === 'productsInList') {
		return (
			<div className={style.inListContainer}>
				<div className={style.head}>
					<div className={style.iconContainer} onClick={() => history.go(-1)}>
						<ArrowBackIosNewIcon />
					</div>

					<h1>Productos Listados</h1>
				</div>
				<form onSubmit={() => console.log('Se está creando está mierda!!')}>
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
	if (typeCard === 'productPreview') {
		return (
			<div className={style.previewContainer}>
				<div className={style.head}>
					<div className={style.iconContainer} onClick={() => history.go(-1)}>
						<ArrowBackIosNewIcon />
					</div>

					<h1>Producto detallado</h1>
				</div>

				<form>
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

	return (
		<div className={style.container}>
			<div className={style.head}>
				<div className={style.iconContainer} onClick={() => history.go(-1)}>
					<ArrowBackIosNewIcon />
				</div>

				<h1>Escoja el tipo de card que desea crear</h1>
			</div>
			<div className={style.chooseTypeContainer}>
				<button onClick={() => setTypeCard('productsInList')}>
					Productos Listados
				</button>
				<button onClick={() => setTypeCard('productPreview')}>
					Producto detallado
				</button>
			</div>
		</div>
	);
};

export default CardCreator;
