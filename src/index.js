import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {getDefaultMiddleware, configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/RootReducer';
const store = configureStore(
  {

    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck:false,
      serializableCheck: false,
    })
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider >
);


