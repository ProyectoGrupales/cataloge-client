import { useState } from 'react';

// Components
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';
import PreviewImage from '../../../../components/Common/PreviewImage/PreviewImage';

// Icons

import style from './styles/simpleProduct.module.scss';

const SimpleProductCreator = () => {
	const [image, setImage] = useState([]);

	// Esta funcion convierte el archivo seleccionado para poder mostrar una preview del mismo
	const createPreview = event => {
		if (event.target.files.length) {
			setImage([]);
			const files = event.target.files;
			const previewReady = [];

			for (let i = 0; i < files.length; i++) {
				const preview = URL.createObjectURL(files[i]);
				previewReady.push(preview);
			}

			setImage(previewReady);
		}
	};

	return (
		<div className={style.container}>
			<HeaderCustom title='Lista de productos' icon='back' />

			<div className={style.formContainer}>
				<form onSubmit={() => console.log('Se está creando está mierda!!')}>
					{image.length ? (
						<div className={style.previewImage}>
							<PreviewImage images={image} setImages={setImage} edit />
						</div>
					) : (
						<div>
							<label>Seleccione una Imagen</label>
							<input type='file' accept='image/*' onChange={createPreview} />
						</div>
					)}

					<div>
						<label>Ingrese el nombre</label>
						<p>
							(Debe estar relacionado a lo que se espera encontrar dentro de
							esta lista)
						</p>
						<input type='text' />
					</div>

					<div>
						<label>Seleccione el listado EXCEL</label>
						<input
							type='file'
							accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
						/>
					</div>

					<button>Crear</button>
				</form>
			</div>
		</div>
	);
};

export default SimpleProductCreator;
