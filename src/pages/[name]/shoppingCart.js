import { useDispatch, useSelector } from 'react-redux';
import { addTotal } from '../../redux/reducers/cartSlice';
import parserNumberToCurrency from '../../services/parserNumberToCurrency';

// Components
import HeaderCustom from '../../components/Common/HeaderCustom/HeaderCustom';
import SimpleCard from '../../components/Common/SimpleCard/SimpleCard';
import Card from '../../components/Common/Cataloge/Molecules/Card/Card';

import style from './styles/shoppingCart.module.scss';
import Link from 'next/link';
import sortByProductType from '../../services/sortByProductType';

const ShoppingCart = () => {
	const dispatch = useDispatch();
	// Obtenemos los productos del estado
	const products = useSelector(state => state.cart.products);

	const {
		simpleProducts,
		complexProducts,
		totalComplexProducts,
		totalSimpleProducts,
	} = sortByProductType(products);

	if (!products.length) {
		return (
			<div>
				<HeaderCustom title='Carrito' icon='back' />
				<div className='container'>
					<h3>Añade productos al carrito para realizar una compra mayorista</h3>
				</div>
			</div>
		);
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
										<p className={style.ctd}>Cantidad: {product.ctd}</p>
										<SimpleCard
											columns={product.product.copy}
											deleteable={true}
											id={product.product._id}
										/>
									</div>
								);
							})}
						</div>
						<h4>Subtotal: {parserNumberToCurrency(totalSimpleProducts)}</h4>
						<div className={style.divisor} />
					</div>
				) : null}

				{complexProducts.length ? (
					<div>
						<div className={style.complexProductContainer}>
							{complexProducts.map(product => (
								<Card data={product} deleteable={true} key={product.id} />
							))}
						</div>

						<div className={style.divisor} />
						<h4> {parserNumberToCurrency(totalComplexProducts)}</h4>
					</div>
				) : null}

				<h2>
					Total :{' '}
					{parserNumberToCurrency(totalComplexProducts + totalSimpleProducts)}
				</h2>

				<Link href={'/test/payment/'}>
					<button
						className={style.button}
						onClick={() =>
							dispatch(addTotal(totalComplexProducts + totalSimpleProducts))
						}
					>
						Continar compra
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ShoppingCart;
