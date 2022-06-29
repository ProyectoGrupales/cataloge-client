import { useSelector } from 'react-redux';

// Components
import HeaderCustom from '../../components/Common/HeaderCustom/HeaderCustom';
import SimpleCard from '../../components/Common/SimpleCard/SimpleCard';
import Card from '../../components/Common/Cataloge/Molecules/Card/Card';

import style from './styles/shoppingCart.module.scss';

const ShoppingCart = () => {
	// Obtenemos los productos del estado
	const products = useSelector(state => state.cart.products);

	let totalSimpleProducts = 0;
	const simpleProducts = [];

	let totalComplexProducts = 0;
	const complexProducts = [];

	// Dividimos los dos tipos de productos que hay, para no mostrarlos encimados por las dudas
	if (products) {
		// Comenzamos recorriendo el arreglo principal
		products.forEach(product => {
			// Diferenciamos los tipos
			if (product.type === 'productInList') {
				let flag = false;
				// Recorremos el arreglo para buscar elementos repetidos
				simpleProducts.forEach((simpleProduct, index) => {
					// Y en caso de encontrar repetidos, simplemente le sumamos a la propiedad ctd (cantidad)
					if (simpleProduct.product._id === product._id) {
						simpleProducts[index].ctd++;
						flag = true;
					}
				});

				// Si flag continua en false es porque no encontró coincidencias, entonces agrega el producto
				if (!flag) {
					simpleProducts.push({ product, ctd: 1 });
				}

				totalSimpleProducts += product.precio;
			} else {
				complexProducts.push(product);
				totalComplexProducts += product.price;
			}
		});
	}

	return (
		<div>
			<HeaderCustom title='Carrito' icon='back' />

			<div className='container'>
				{simpleProducts.length ? (
					<div>
						<div className={style.simpleProductsContainer}>
							{simpleProducts.map((product, index) => {
								return (
									<div key={index}>
										<p>Cantidad: {product.ctd}</p>
										<SimpleCard
											columns={product.product.copy}
											deleteable={true}
											id={product.product._id}
										/>
									</div>
								);
							})}
						</div>
						<h3>${totalSimpleProducts}</h3>
					</div>
				) : null}

				{complexProducts.length ? (
					<div>
						<div className={style.complexProductContainer}>
							{complexProducts.map(product => (
								<Card data={product} deleteable={true} key={product.id} />
							))}
						</div>

						<h3>${totalComplexProducts}</h3>
					</div>
				) : null}

				<h2>Total : ${totalComplexProducts + totalSimpleProducts}</h2>
			</div>
		</div>
	);
};

export default ShoppingCart;
