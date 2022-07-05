import OneTimeModal from '../components/UI/OneTimeModal/OneTimeModal';
const Test = () => {
	return (
		<div>
			<OneTimeModal
				text={[
					'Puedes tocar un producto para desplegar las opciónes',
					'Una vez seleccionado puedes consultar este producto por wpp',
				]}
			/>
			<h1>Esto es test</h1>
		</div>
	);
};

export default Test;
