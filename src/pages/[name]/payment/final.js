// Components
import Link from 'next/link';
import HeaderCustom from '../../../components/Common/HeaderCustom/HeaderCustom';

const Final = () => {
	return (
		<div>
			<HeaderCustom title='¡Todo listo!' icon='back' />
			<h1>
				¡¡Muchas gracias por comprar con nosotros!! 😄 <br />
				Tu pedido se está preparando 📦 <br />
				Ya puedes pasar a retirarlo 😄🕺🏼
			</h1>
			<Link href='/test'>
				<button>Ir al inicio</button>
			</Link>
		</div>
	);
};

export default Final;
