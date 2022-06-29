import { useSelector, useDispatch } from 'react-redux';
import { buyCart } from '../../../redux/reducers/cartSlice';
import sortByProductType from '../../../services/sortByProductType';
import parserNumberToCurrency from '../../../services/parserNumberToCurrency';

// Components
import SimpleCard from '../../../components/Common/SimpleCard/SimpleCard';
import Card from '../../../components/Common/Cataloge/Molecules/Card/Card';
import HeaderCustom from '../../../components/Common/HeaderCustom/HeaderCustom';
import Link from 'next/link';

import style from './styles/confirmation.module.scss';

const OrderScreen = () => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);

	const {
		simpleProducts,
		complexProducts,
		totalComplexProducts,
		totalSimpleProducts,
	} = sortByProductType(cart.products);

	return (
		<div>
			<HeaderCustom title='Detalles de compra' icon={'back'} />

			<div className='container'>
				{simpleProducts.length ? (
					<div>
						<div className={style.simpleProductsContainer}>
							{simpleProducts.map((product, index) => {
								return (
									<div key={index}>
										<p className={style.ctd}>Cantidad: {product.ctd}</p>
										<SimpleCard columns={product.product.copy} />
									</div>
								);
							})}
						</div>
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

				<div className={style.cartConfig}>
					<h3>
						Lo retira: <b>{cart.config.nameOfPerson}</b>
					</h3>

					<h3>
						Desde: <b>{cart.config.branchOffice} </b>
					</h3>

					<h3>
						Abona en: <b>{cart.config.payment}</b>
					</h3>

					<h3>
						Método de entrega: <b>{cart.config.shipping}</b>
					</h3>

					<h3>Observaciónes: </h3>
					<p> {`" ${cart.config.observations} "`}</p>
				</div>

				<h2 className={style.total}>
					Total:{' '}
					{parserNumberToCurrency(totalComplexProducts + totalSimpleProducts)}
				</h2>

				<Link href={'/test/payment/final'}>
					<button className={style.button} onClick={() => dispatch(buyCart())}>
						Finalizar
					</button>
				</Link>
			</div>
		</div>
	);
};

export default OrderScreen;
