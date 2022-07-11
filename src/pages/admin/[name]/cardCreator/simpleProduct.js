// Dependencies
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import { useRouter } from 'next/router';

// Styles - Components - Assets
import style from './styles/simpleProduct.module.scss';
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';
import PreviewImage from '../../../../components/Common/PreviewImage/PreviewImage';
import notification from '../../../../services/notifications';

// States - Hooks - Utils - Services
import { simple_product_create_action } from '../../../../redux/apiCall/simpleProduct.actions';

const SimpleProductCreator = () => {
	const router = useRouter();

	const [image, setImage] = useState({
		image: null,
		preview: null,
	});
	const [title, setTitle] = useState(null);
	const [excel, setExcel] = useState(null);

	const dispatch = useDispatch();

	const { loading, success } = useSelector(
		state => state.create_simple_product
	);

	// Tarea: una vez arreglado el redux persist este use Effect nos llevara a la vista detallada del producto que acabanos de crear
	// useEffect(() => {
	// 	if (success === true) {
	// 		router.push('/');
	// 	}
	// }, [success]);

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

		if (image.image && title && excel) {
			dispatch(simple_product_create_action(data));
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

					<button>
						{loading ? (
							<SpinnerCircular
								color='#a058e9'
								secondaryColor='#919293'
								size={10}
								thickness={150}
							/>
						) : (
							'Crear'
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default SimpleProductCreator;
