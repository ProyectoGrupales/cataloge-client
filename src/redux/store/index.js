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
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Reducers
import catchUserData from '../reducers/catchUserData';
import cartSlice from '../reducers/cartSlice';
import catchCatalogeData from '../reducers/catchCatalogeData';

// Esto es necesario para definir el persist
const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

// Aqui dentro van todos los reducers. Lo que hace esto es combinarlos
const rootReducer = combineReducers({
	user: catchUserData,
	cart: cartSlice,
	cataloge: catchCatalogeData,
});

// Persiste todos los datos que están dentro de los reducers que le pasamos como parametro
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Definimos el store
export const store = configureStore({
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
export const persistor = persistStore(store);
