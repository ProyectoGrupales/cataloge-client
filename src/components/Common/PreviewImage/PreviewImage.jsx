import { useState } from 'react';
import style from './PreviewImage.module.scss';
import Image from 'next/image';

// Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';

// Recibe por parametros un arreglo con las imagenes que debe mostrar
const PreviewImage = ({ images, setImages, edit }) => {
	const [current, setCurrent] = useState(0);

	const deleteImage = () => {

		if(Array.isArray(images)) {
			const newArray = images.filter((item, index) => index !== current);
			setImages(newArray);
			setCurrent(0);
		}
		else {
			setImages({
				image: null,
				preview: null,
			})
		}
	};

	return images.length ? (
		<div className={style.container}>
			{edit ? (
				<div onClick={deleteImage} className={style.deleteButton}>
					<DeleteIcon />
				</div>
			) : null}

			<Image src={images ? Array.isArray(images) ? images[current] : images : null } width={200} height={200} objectFit='cover' />

			{Array.isArray(images) && images.length > 1 ? (
				<div className={style.arrows}>
					<ArrowBackIosIcon
						fontSize='large'
						onClick={() => {
							if (current >= 1) {
								setCurrent(current - 1);
							}
						}}
					/>

					<ArrowForwardIosIcon
						fontSize='large'
						onClick={() => {
							if (current < images.length - 1) {
								setCurrent(current + 1);
							}
						}}
					/>
				</div>
			) : null}
		</div>
	) : null;
};

export default PreviewImage;
