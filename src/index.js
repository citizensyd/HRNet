/**
 * Entry point of the React application.
 * Initializes and renders the application.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

/**
 * Root DOM element to attach the React application.
 * @type {HTMLElement}
 */
const root = document.getElementById('root');

/**
 * Create a root element for rendering the React app.
 * @type {Root}
 */
const rootElement = createRoot(root);

/**
 * Render the application within a StrictMode to catch potential issues.
 */
rootElement.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
