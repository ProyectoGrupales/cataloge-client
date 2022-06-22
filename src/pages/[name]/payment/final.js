// Components
import HeaderCustom from '../../../components/HeaderCustom/HeaderCustom';
import Link from 'next/link';

const Final = () => {
	return (
		<div>
			<HeaderCustom title='Compra exitosa' icon='back' />

			<h1>
				¡¡Muchas gracias por comprar con nosotros!! Su pedido está listo para
				que lo puedas retirar 🥳
			</h1>

			<Link href='/test'>
				<button>Volver al menu</button>
			</Link>
		</div>
	);
};

export default Final;
