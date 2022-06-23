// Components
import HeaderCustom from '../../../Common/HeaderCustom/HeaderCustom';
import Link from 'next/link';

const ConfigOrder = () => {
	return (
		<div>
			<HeaderCustom title='Personalizando compra' icon='back' />
			<h1>Esta es la pasarela de pago</h1>
			<Link href='/[name]/payment/confirmation' as='/test/payment/confirmation'>
				<button>Confirmar compra</button>
			</Link>
		</div>
	);
};

export default ConfigOrder;
