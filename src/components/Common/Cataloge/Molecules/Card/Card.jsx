import { useRouter } from 'next/router';

// Components
import SimpleCard from '../../Atoms/SimpleCard/SimpleCard';
import ComplexCard from '../../Atoms/ComplexCard/ComplexCard';

// Este es el item que se muestra al inicio del catalogo
const Card = ({ data }) => {
	// Varía el lugar a redireccionar dependiendo de si estamos en client o admin
	const router = useRouter();
	let href = '/test';
	if (router.pathname.includes('admin')) {
		href = '/admin/test';
	}

	if (data.type === 'productsInList') {
		return <SimpleCard data={data} href={href} />;
	}

	// Por defecto sería un producto detallado
	return <ComplexCard data={data} href={href} />;
};

export default Card;
