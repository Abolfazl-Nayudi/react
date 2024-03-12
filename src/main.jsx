// index.js
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

import './styles.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
