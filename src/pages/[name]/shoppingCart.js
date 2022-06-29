import { useSelector } from 'react-redux';
// Components
import HeaderCustom from '../../components/Common/HeaderCustom/HeaderCustom';
import SimpleCard from '../../components/Common/SimpleCard/SimpleCard';
import Card from '../../components/Common/Cataloge/Molecules/Card/Card';

const ShoppingCart = () => {
	const products = useSelector(state => state.cart.products);
	const simpleProducts = [];
	let totalSimpleProducts = 0;
	const complexProducts = [];
	let totalComplexProducts = 0;

	console.log(products);

	// Dividimos los dos tipos de productos que hay, para no mostrarlos encimados por las dudas
	if (products) {
		products.forEach(product => {
			if (product.type === 'productInList') {
				simpleProducts.push(product);
				totalSimpleProducts += product.precio;
			} else {
				complexProducts.push(product);
				totalComplexProducts += product.price;
			}
		});
	}

	console.log(simpleProducts, complexProducts);
	return (
		<div>
			<HeaderCustom title='Carrito' icon='back' />

			<div className='container'>
				<div>
					{simpleProducts.length ? (
						simpleProducts.map((product, index) => {
							return (
								<SimpleCard
									columns={product.copy}
									deleteable={true}
									id={product._id}
									key={index}
								/>
							);
						})
					) : (
						<h1>No hay productos</h1>
					)}
					<h3>${totalSimpleProducts}</h3>
				</div>

				<div>
					{complexProducts.length ? (
						complexProducts.map(product => {
							return <Card data={product} deleteable={true} key={product.id} />;
						})
					) : (
						<h1>No hay productos</h1>
					)}
					<h3>${totalComplexProducts}</h3>
				</div>
				<h1>Total : ${totalComplexProducts + totalSimpleProducts}</h1>
			</div>
		</div>
	);
};

export default ShoppingCart;
