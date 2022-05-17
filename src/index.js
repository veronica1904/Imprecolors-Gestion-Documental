import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store, persistor, sagaMiddleware } from './Redux/store';
import rootSaga from './Redux/sagas'
import { PersistGate } from 'redux-persist/integration/react';

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
document.getElementById('root')
);

reportWebVitals();
