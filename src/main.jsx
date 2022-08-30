import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'

import {GlobalContextProvider} from './context/GlobalContext'
import Home from './jsx/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GlobalContextProvider>
    <Home/>
   </GlobalContextProvider>
  </React.StrictMode>
)
