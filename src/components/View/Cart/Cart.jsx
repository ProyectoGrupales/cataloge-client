// Components
import Link from 'next/link';
import HeaderCustom from '../../Common/HeaderCustom/HeaderCustom';
import MetaHead from '../../Common/MetaHead/MetaHead';

// Icons

const Cart = () => {
	return (
		<div>
			<MetaHead title='Carrito' />
			<HeaderCustom title='Su carrito' icon={'back'} />

			<div className='container'>
				<h1>Este sería el carrito</h1>
				<Link href='/[name]/payment/' as='/test/payment'>
					<button>Comprar</button>
				</Link>
			</div>
		</div>
	);
};

export default Cart;
