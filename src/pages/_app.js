import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
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
