import Head from 'next/head';

// Este componente se lo llama en cada página para añadir la meta informacion
const MetaHead = ({ title, description, meta }) => {
	return (
		<Head>
			<title>{title || 'Default Text'} - Catálogo</title>
			<meta name='description' content={description || ''} />
			<meta name='keywords' content={meta + ' admin ecommerce' || ''} />
		</Head>
	);
};

export default MetaHead;
