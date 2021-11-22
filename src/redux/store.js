import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from './keyboard';

const keyboardPersistConfig = {
    key: 'keyboard',
    storage,
    blacklist: ['showModal', 'pressedButton'],
};

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
})];

export const store = configureStore({
    reducer: {
        settings: persistReducer(keyboardPersistConfig, reducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);