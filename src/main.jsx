import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; 
import disableDevtool from 'disable-devtool';
//disableDevtool()

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App />
    </>
)
