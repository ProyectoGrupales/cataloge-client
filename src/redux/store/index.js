import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Reducers
import fetchUserData from '../reducers/fetchUserData';
import cartSlice from '../reducers/cartSlice';
import catchCatalogeData from '../reducers/catchCatalogeData';

// De esta manera generamos un store distinto para cada catálogo que se visite
const dynamicStore = name => {
	// La key es el nombre con el que se guarda el store que se crea, por defecto irá a root
	const persistConfig = {
		key: name || 'root',
		version: 1,
		storage: storageSession,
		blacklist: ['user'],
	};

	// Aqui dentro van todos los reducers. Lo que hace esto es combinarlos
	const rootReducer = combineReducers({
		user: fetchUserData,
		cart: cartSlice,
		cataloge: catchCatalogeData,
	});

	// Persiste todos los datos que están dentro del reducer que le pasamos como parametro
	const persistedReducer = persistReducer(persistConfig, rootReducer);

	// Definimos el store
	const store = configureStore({
		reducer: persistedReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
		devTools: process.env.NODE_ENV !== 'production',
	});

	// Y le aplicamos persit
	const persistor = persistStore(store);

	return { store, persistor };
};

export default dynamicStore;
