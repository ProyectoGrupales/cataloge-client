import { useState } from 'react';
import style from './PreviewImage.module.scss';
import Image from 'next/image';

// Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';

// Recibe por parametros un arreglo con las imagenes que debe mostrar, y en caso de estar en modo edit
// Recibe la funcion seteadora del estado para eliminar las imagenes que el usuario desee
const PreviewImage = ({ images, setImages, edit }) => {
	const [current, setCurrent] = useState(0);

	const deleteImage = () => {
		if (Array.isArray(images)) {
			const newArray = images.filter((item, index) => index !== current);
			setImages(newArray);
			setCurrent(0);
		} else {
			setImages({
				image: null,
				preview: null,
			});
		}
	};

	return images.length ? (
		<div className={style.container}>
			{edit ? (
				<div onClick={deleteImage} className={style.deleteButton}>
					<DeleteIcon />
				</div>
			) : null}

			<Image
				src={images ? (Array.isArray(images) ? images[current] : images) : null}
				width={250}
				height={250}
				objectFit='cover'
				layout='fixed'
			/>

			{Array.isArray(images) && images.length > 1 ? (
				<div className={style.arrows}>
					<ArrowBackIosIcon
						className={style.left}
						fontSize='large'
						onClick={() => {
							if (current >= 1) {
								setCurrent(current - 1);
							}
						}}
					/>

					<ArrowForwardIosIcon
						className={style.rigth}
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
