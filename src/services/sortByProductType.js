// Esta funcion recibe el arreglo con los productos del carrito y los separa según su tipo de card, incluyendo los totales $$ de cada grupo
const sortByProductType = mainArray => {
	// Dividimos los dos tipos de productos que hay, para no mostrarlos encimados
	let totalSimpleProducts = 0;
	const simpleProducts = [];

	let totalComplexProducts = 0;
	const complexProducts = [];

	if (mainArray) {
		// Comenzamos recorriendo el arreglo principal
		mainArray.forEach(product => {
			// Diferenciamos los tipos, si el producto tiene esta propiedad, es un simpleProduct
			if (product.copy) {
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
