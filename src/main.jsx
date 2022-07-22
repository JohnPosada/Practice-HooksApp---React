import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";

import { MainApp } from './useContext/MainApp';
//import { TodoApp } from './useReducer/TodoApp'
//import './useReducer/introReducer.js'
//import { Padre } from './tareaMemo/Padre'
//import { CallbackHook } from './memo/CallbackHook'
//import { Memorize } from './memo/Memorize'
//import { FocusScreen } from './useRef/FocusScreen'
//import { MultipleCustomHook } from './Example/MultipleCustomHook'
//import { HooksApp } from './HooksApp'
//import { SimpleForm } from './useEffect/SimpleForm'
//import { CounterApp } from './UseState/CounterApp'
//import { CounterAppWithHooks } from './UseState/CounterAppWithHooks'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
)
