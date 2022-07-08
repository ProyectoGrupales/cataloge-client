import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';

// Icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './SimpleCard.module.scss';

const SimpleCard = ({ data, href, editMode, deleteMode }) => {
	const cataloge = useSelector(state => state.cataloge.catalogeData);

	// Cuando el producto está en modo edicion te lleva a la página para editar este producto
	if (editMode) {
		return (
			<Link
				href='/admin/[name]/edit/[name]'
				as={`/admin/${cataloge.name}/edit/${data.title}`}
			>
				<div className={style.container}>
					{editMode ? (
						<div className={style.button}>
							<EditIcon />
						</div>
					) : deleteMode ? (
						<div className={style.button}>
							<DeleteIcon />
						</div>
					) : null}

					<Image
						src={data.images}
						alt={data.title}
						layout='fill'
						objectFit='cover'
						priority={true}
					/>

					<figcaption>
						<h6>{data.title}</h6>
					</figcaption>
				</div>
			</Link>
		);
	}

	// Si el producto está en modo eliminar, no te redirecciona a ningun lado, en lugar de eso elimina la card seleccionada
	if (deleteMode) {
		return (
			<Link
				href='/admin/[name]/edit/[name]'
				as={`/admin/${cataloge.name}/edit/${data.title}`}
			>
				<div className={style.container}>
					{editMode ? (
						<div className={style.button}>
							<EditIcon />
						</div>
					) : deleteMode ? (
						<div className={style.button}>
							<DeleteIcon />
						</div>
					) : null}

					<Image
						src={data.images}
						alt={data.title}
						layout='fill'
						objectFit='cover'
						priority={true}
					/>

					<figcaption>
						<h6>{data.title}</h6>
					</figcaption>
				</div>
			</Link>
		);
	}

	return (
		// Este link te envia hacía el nombre del listado
		<Link href={`${href}/${data.title.toLowerCase()}`}>
			<div className={style.container}>
				{editMode ? (
					<div className={style.button}>
						<EditIcon />
					</div>
				) : deleteMode ? (
					<div className={style.button}>
						<DeleteIcon />
					</div>
				) : null}

				<Image
					src={data.images}
					alt={data.title}
					layout='fill'
					objectFit='cover'
					priority={true}
				/>

				<figcaption>
					<h6>{data.title}</h6>
				</figcaption>
			</div>
		</Link>
	);
};

export default SimpleCard;
