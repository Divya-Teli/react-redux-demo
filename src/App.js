import React from 'react';
import './App.css';
import Routes from './routes';
import {
  BrowserRouter, Route
} from "react-router-dom";
import { Provider } from 'react-redux';
 //import configureStore from './redux/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react'
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' 
import  configureStore from './redux/store/configureStore';

// const store = configureStore();
// const persistor=configureStore()
const { store, persistor } = configureStore();
function App() {
  return (
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}

      <Routes />
  
    {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
