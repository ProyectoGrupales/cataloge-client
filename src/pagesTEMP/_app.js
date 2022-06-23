import '../styles/globals.scss';
import { useRouter } from 'next/router';

import Header from '../components/Common/Header/Header';
import HeaderCustom from '../components/Common/HeaderCustom/HeaderCustom';

// TERMINAR LAYOUT
function MyApp({ Component, pageProps }) {
	const router = useRouter();
	console.log(router.query);

	// Solucionar el tema del Header
	return (
		<div className={'mainContainer'}>
			<Header />
			<HeaderCustom />

			<div className='children'>
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;

/*
	PUBLIC:
	✔️ /ASSETS: [icons, image, sounds, video] 
	
	SRC: 
	✔️ /COMPONENTS:[COMMON, LAYOUT, UI, VIEW]
	✔️ /VIEW
	✔️ /CONFIG
	✔️ /CONTEXT
	✔️ /STYLES: 
	✔️ /HOOKS
	✔️ /REDUX: [ACTIONS, REDUCERS, STORE]
	✔️ /SERVICES:    

	// Copiar toda la lógica de las vistas anteriores a las nuevas
	// Lógica entre home normal y home admin

*/
