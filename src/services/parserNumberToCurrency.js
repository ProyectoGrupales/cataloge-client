const parserNumberToCurrency = number => {
	const currency = number.toLocaleString('es-ar', {
		style: 'currency',
		currency: 'ARS',
		minimumFractionDigits: 2,
	});

	return currency;
};

export default parserNumberToCurrency;
