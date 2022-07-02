// Components
import { useState } from 'react';
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';
import PreviewImage from '../../../../components/Common/PreviewImage/PreviewImage';

import style from './styles/complexProduct.module.scss';

const DetailedProduct = () => {
	const [images, setImages] = useState([]);

	const createPreview = event => {
		if (event.target.files.length) {
			setImages([]);
			const files = event.target.files;
			const previewReady = [];

			for (let i = 0; i < files.length; i++) {
				const preview = URL.createObjectURL(files[i]);
				previewReady.push(preview);
			}

			setImages(previewReady);
		}
	};

	return (
		<div className={style.container}>
			<HeaderCustom title='Producto detallado' icon='back' />

			<form className={style.form + ' container'}>
				{images.length ? (
					<div className={style.previewImage}>
						<PreviewImage images={images} setImages={setImages} edit />
					</div>
				) : (
					<div>
						<label>Seleccione una Imagen</label>
						<input
							type='file'
							accept='image/*'
							onChange={createPreview}
							multiple
						/>
					</div>
				)}

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
};

export default DetailedProduct;
