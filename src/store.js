import { configureStore } from '@reduxjs/toolkit';
import { addEmployee } from './slices/employeeSlice';

/**
 * Redux store configuration for managing application state.
 * @typedef {Object} AppStore
 * @property {addEmployee} employee - The employee slice of the store.
 * @property {object} [otherSlices] - Other slices of the store if needed.
 */

/**
 * Create and configure the Redux store.
 * @type {AppStore}
 */
const store = configureStore({
    reducer: {
        employee: addEmployee,
        // Add other reducers here if needed
    },
});

export default store;

