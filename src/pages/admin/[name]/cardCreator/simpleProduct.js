import { useState } from 'react';

// Components
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';
import PreviewImage from '../../../../components/Common/PreviewImage/PreviewImage';
import Notification from '../../../../services/notifications';

// Icons

import style from './styles/simpleProduct.module.scss';

const SimpleProductCreator = () => {
	const [image, setImage] = useState({
		image: null,
		preview: null,
	});
	const [productListName, setProductListName] = useState(null);
	const [excel, setExcel] = useState(null);

	const submitHandler = e => {
		e.preventDefault();
		if (image.image && productListName && excel) {
			alert(JSON.stringify({ image, productListName, excel }), null, 2);
		} else {
			Notification('Complete Todos Los Campos', 'error');
		}
	};

	// Esta funcion convierte el archivo seleccionado para poder mostrar una preview del mismo
	const createPreviewAndConvertImage = event => {
		if (event.target.value) {
			const preview = URL.createObjectURL(event.target.files[0]);

			// Tarea: convertir imagen en base64 para poder enviarla al back-end

			setImage({
				...image,
				image: event.target.value,
				preview: preview,
			});
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
							onChange={e => setProductListName(e.target.value)}
						/>
					</div>

					<div>
						<label>Seleccione el listado EXCEL</label>
						<input
							type='file'
							accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
							onChange={e => setExcel(e.target.value)}
						/>
					</div>

					<button>Crear</button>
				</form>
			</div>
		</div>
	);
};

export default SimpleProductCreator;
