import { useRouter } from 'next/router';
// Components
import HeaderCustom from '../../../../components/Common/HeaderCustom/HeaderCustom';
import Link from 'next/link';

import style from './styles/index.module.scss';

// Este es el menu del creador de cards
const CardCreatorPage = () => {
	const router = useRouter();
	console.log(router.query);

	if (router.query.name) {
		return (
			<div>
				<HeaderCustom title={'Creador de Cards'} icon='back' />

				<div className={style.chooseTypeContainer}>
					<Link
						href='/admin/[name]/cardCreator/simpleProduct'
						as={`/admin/${router.query.name}/cardCreator/simpleProduct`}
					>
						<button>Lista de productos</button>
					</Link>

					<Link
						href='/admin/[name]/cardCreator/complexProduct'
						as={`/admin/${router.query.name}/cardCreator/complexProduct`}
					>
						<button>Producto detallado</button>
					</Link>
				</div>
			</div>
		);
	}
};

export default CardCreatorPage;
