import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {DB} from "./database.type";
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={DB}>

    <App />
    </Provider>
  </React.StrictMode>,
)
