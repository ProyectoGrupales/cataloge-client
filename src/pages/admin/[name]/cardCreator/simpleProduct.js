// Dependencies
import { useState } from 'react';
import { useSelector } from 'react-redux';

// Styles - Components - Assets
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';
import PreviewImage from '../../../../components/Common/PreviewImage/PreviewImage';
import notification from '../../../../services/notifications';

import style from './styles/simpleProduct.module.scss';
import createSimpleProduct from '../../../../adapters/createSimpleProduct';

const SimpleProductCreator = () => {
	const token = useSelector(state => state.user.userData.token);

	const [image, setImage] = useState({
		image: null,
		preview: null,
	});
	const [title, setTitle] = useState(null);
	const [excel, setExcel] = useState(null);

	// Esta funcion convierte el archivo seleccionado para poder mostrar una preview del mismo
	const createPreviewAndConvertImage = event => {
		if (event.target.files[0]) {
			const preview = URL.createObjectURL(event.target.files[0]);

			setImage({
				...image,
				image: event.target.files[0],
				preview,
			});
		}
	};

	const submitHandler = e => {
		e.preventDefault();

		const data = new FormData();

		data.append('title', title);
		data.append('excel', excel);
		data.append('image', image.image);

		// Si tenemos todo cargado realizamos la petición
		if (image.image && title && excel) {
			createSimpleProduct(data, token);
		} else {
			notification('Complete Todos Los Campos', 'error');
		}
	};

	return (
		<div className={style.container}>
			<HeaderCustom title='Lista de productos' icon='back' />

			<div className={style.formContainer}>
				<form onSubmit={submitHandler}>
					{image.image && image.preview ? (
						<div className={style.previewImage}>
							<PreviewImage images={image.preview} setImages={setImage} edit />
						</div>
					) : (
						<div>
							<label>Seleccione una Imagen</label>
							<input
								type='file'
								accept='image/*'
								onChange={createPreviewAndConvertImage}
							/>
						</div>
					)}

					<div>
						<label>Ingrese el nombre</label>
						<p>
							(Debe estar relacionado a lo que se espera encontrar dentro de
							esta lista)
						</p>
						<input
							type='text'
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
					</div>

					<div>
						<label>Seleccione el listado EXCEL</label>
						<input
							type='file'
							accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
							onChange={e => setExcel(e.target.files[0])}
						/>
					</div>

					<button>Crear</button>
				</form>
			</div>
		</div>
	);
};

export default SimpleProductCreator;
