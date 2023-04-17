import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./components/redux/store";
import { App } from 'components/App';
import { PersistGate } from "redux-persist/integration/react";
// import configureStore from './components/redux/configureStore'
import { persistor } from './components/redux/store';

import './index.css';

// const { persistor } = configureStore()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);
