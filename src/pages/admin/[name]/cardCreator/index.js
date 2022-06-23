// Components
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';
import Link from 'next/link';

import style from './styles/index.module.scss';

// Este es el menu del creador de cards
const CardCreatorPage = () => {
	return (
		<div>
			<HeaderCustom title={'Creador de Cards'} icon='back' />

			<div className={style.chooseTypeContainer}>
				<Link
					href='/admin/[name]/cardCreator/simpleProduct'
					as='/admin/test/cardCreator/simpleProduct'
				>
					<button>Lista de productos</button>
				</Link>

				<Link
					href='/admin/[name]/cardCreator/complexProduct'
					as='/admin/test/cardCreator/complexProduct'
				>
					<button>Producto detallado</button>
				</Link>
			</div>
		</div>
	);
};

export default CardCreatorPage;
