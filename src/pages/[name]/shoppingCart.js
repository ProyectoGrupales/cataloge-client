// Components
import Link from 'next/link';
import HeaderCustom from '../../components/HeaderCustom/HeaderCustom';
import MetaHead from '../../components/MetaHead/MetaHead';

// Icons

const ShoppingCart = () => {
	return (
		<div>
			<MetaHead title='Carrito' />
			<HeaderCustom
				title='Su carrito'
				icon={'back'}
				redirectTo={{ href: '/[name]', as: '/test' }}
			/>
			<h1>Este sería el carrito</h1>
			<Link href='/[name]/payment/' as='/test/payment'>
				<button>Comprar</button>
			</Link>
		</div>
	);
};

export default ShoppingCart;
