// Components
import HeaderCustom from '../../../../components/HeaderCustom/HeaderCustom';
import Link from 'next/link';

import style from './styles/index.module.scss';

// Este es el menu del creador de cards
const CardCreator = () => {
	return (
		<div>
			<HeaderCustom title={'Creador de Cards'} icon='back' />

			<div className={style.chooseTypeContainer}>
				<Link
					href='/admin/[name]/cardCreator/productList'
					as='/admin/test/cardCreator/productList'
				>
					<button>Lista de productos</button>
				</Link>

				<Link
					href='/admin/[name]/cardCreator/detailedProduct'
					as='/admin/test/cardCreator/detailedProduct'
				>
					<button>Producto detallado</button>
				</Link>
			</div>
		</div>
	);
};

export default CardCreator;
