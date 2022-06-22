// Components
import HeaderCustom from '../../../../components/HeaderCustom/HeaderCustom';

import style from './styles/productList.module.scss';

const ProductList = () => {
	return (
		<div className={style.container}>
			<HeaderCustom title='Lista de productos' icon='back' />

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
};

export default ProductList;
