import { useDispatch } from 'react-redux';
import { addConfig } from '../../../redux/reducers/cartSlice';

// Components
import HeaderCustom from '../../../components/Common/HeaderCustom/HeaderCustom';
import Link from 'next/link';

import style from './styles/index.module.scss';
import { useState } from 'react';

const ConfigOrder = () => {
	const [config, setConfig] = useState({
		shipping: '',
		payment: 'efectivo',
		nameOfPerson: '',
		branchOffice: '',
		observations: '',
	});

	const dispatch = useDispatch();

	const handleChange = event => {
		setConfig({
			...config,
			[event.target.name]: event.target.value,
		});
	};

	console.log(config);

	return (
		<div>
			<HeaderCustom title='Personalizando compra' icon='back' />

			<div className={'container' + ' ' + style.container}>
				<form>
					<div className={style.shipping}>
						<h4>Envío 🛵</h4>

						<div>
							<div>
								<input
									type='radio'
									name='shipping'
									value='sucursal'
									onClick={handleChange}
								/>
								<label>Retiro de sucursal</label>
							</div>

							<div>
								<input
									type='radio'
									name='shipping'
									value='domicilio'
									onClick={handleChange}
								/>
								<label>Envío a domicilio</label>
							</div>
						</div>
					</div>

					<div className={style.payment}>
						<h4>Método de pago 💰</h4>
						<select name='payment' onChange={handleChange}>
							<option>Efectivo</option>
							<option>Otros (Mercado Pago)</option>
						</select>

						<p>Se abona el carrito en sucursal</p>
					</div>

					<div>
						<h4>¿A nombre de quien guardamos tu pedido?🤔 </h4>
						<input type='text' name='nameOfPerson' onChange={handleChange} />
					</div>

					{/* Está opción debe estar disponible solo en caso de que tenga más de una sucursal el comercio
						caso contrario, debería aparecer "Retira de: (direccion del comercio)"
					*/}
					<div>
						<h4>Escoja la sucursal más cercana 🏬</h4>
						<select name='branchOffice' onChange={handleChange}>
							<option>Sucursal1</option>
							<option>Sucursal2</option>
							<option>Sucursal3</option>
						</select>
					</div>

					<div>
						<h4>Agregar observaciones sobre el pedido ✍️</h4>
						<input type='text' name='observations' onChange={handleChange} />
					</div>
				</form>

				<Link
					href='/[name]/payment/confirmation'
					as='/test/payment/confirmation'
				>
					<button onClick={() => dispatch(addConfig(config))}>
						Confirmar compra
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ConfigOrder;
