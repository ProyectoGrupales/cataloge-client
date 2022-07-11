// Recibe la data del producto y generá el mensaje predeterminado consultando sobre este.
const generateMsg = data => {
	if (data) {
		if (data.type === 'simpleProduct') {
			const text = `Buenos días, quisiera saber más acerca del producto ${data.nombre} que se encuentra en: ${data.card}`;
			return text;
		} else if (data.type === 'complexProduct') {
			const text = `Buenos días, quisiera saber más acerca del producto ${data.nombre}`;
			return text;
		}
	}
};

export default generateMsg;
