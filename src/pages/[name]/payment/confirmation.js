// Components
import HeaderCustom from '../../../components/HeaderCustom/HeaderCustom';
import Link from 'next/link';

const Confirmation = () => {
	return (
		<div>
			<HeaderCustom title='Detalles de compra' icon={'back'} />
			<h1>
				Esta es la pestaña en la que enlistan los detalles del pedido antes de
				confirmarlo
			</h1>

			<Link href={'/[name]/payment/final'} as='/test/payment/final'>
				<button>Finalizar compra</button>
			</Link>
		</div>
	);
};

export default Confirmation;
