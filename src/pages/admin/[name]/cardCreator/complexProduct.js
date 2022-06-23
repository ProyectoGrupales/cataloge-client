// Components
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';
import style from './styles/complexProduct.module.scss';

const DetailedProduct = () => {
	return (
		<div className={style.container}>
			<HeaderCustom title='Producto detallado' icon='back' />

			<form className={style.form + ' container'}>
				<div>
					<label>Elija las imagenes</label>
					<input type='file' accept='image/*' multiple />
				</div>

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
