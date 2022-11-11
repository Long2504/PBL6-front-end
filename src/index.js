import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/RootReducer';
import {StoreProvider} from './reducers/RootReducer';
const store = configureStore(
  {
    reducer:rootReducer
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StoreProvider>
  //   <App />
  // </StoreProvider>
  <Provider store={store}>
    <App />
  </Provider >
);

reportWebVitals();
