import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/reset.css';
import { Router } from './routes.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from '../features/redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
