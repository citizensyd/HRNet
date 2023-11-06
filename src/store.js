import { configureStore } from '@reduxjs/toolkit';
import employeeReduc from './slices/employeeSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

/**
 * Configuration for Redux-Persist.
 * 
 * @type {Object}
 */
const persistConfig = {
    key: 'root',
    storage,
};

/**
 * Combined root reducer.
 * 
 * @type {Function}
 */
const rootReducer = combineReducers({
    employeeReduc: employeeReduc
});

/**
 * Persisted root reducer with Redux-Persist configurations.
 * 
 * @type {Function}
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Create and configure the Redux store.
 * @type {AppStore}
 */
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
    // Add other reducers here if needed
});

/**
 * Persistor for Redux store.
 * 
 * @type {Object}
 */
export const persistor = persistStore(store);

export default store;
