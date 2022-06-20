import style from '../../../styles/CardCreator.module.scss';

import { useState } from 'react';
const CardCreator = () => {
	const [typeCard, setTypeCard] = useState(null);

	if (typeCard === 'productsInList') {
		return (
			<div className={style.inListContainer}>
				<h1>Seleccionó productos en lista</h1>
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
				<h1>Seleccionó preview de un producto</h1>

				<form>
					<div>
						<label>Nombre del producto</label>
						<input type='text' />
					</div>

					<div>
						<label>Descripción</label>
						<textarea rows={5} cols={40} />
					</div>

					<div>
						<label>Stock</label>
						<input type='number' />

						<label>Price</label>
						<input type='number' />
					</div>

					<button>Crear</button>
				</form>
			</div>
		);
	}

	return (
		<div className={style.container}>
			<h1>Escoja el tipo de Card que desea crear</h1>
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
