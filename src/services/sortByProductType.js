const sortByProductType = mainArray => {
	// Dividimos los dos tipos de productos que hay, para no mostrarlos encimados por las dudas
	let totalSimpleProducts = 0;
	const simpleProducts = [];

	let totalComplexProducts = 0;
	const complexProducts = [];

	if (mainArray) {
		// Comenzamos recorriendo el arreglo principal
		mainArray.forEach(product => {
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

	return {
		simpleProducts,
		complexProducts,
		totalComplexProducts,
		totalSimpleProducts,
	};
};

export default sortByProductType;
