// Components
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
		</div>
	);
};

export default ShoppingCart;
