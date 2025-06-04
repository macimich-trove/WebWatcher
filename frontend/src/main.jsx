import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx'

import { Provider } from 'react-redux'
// import store from '' ./store
//<Provider store={"store"}></Provider>

import { BrowserRouter, Routes, Route } from "react-router";


createRoot(document.getElementById('root')).render(



<StrictMode>


<BrowserRouter>
<Routes>

<Route path="/" element={<App/>}/>

//<Route path="/dashboard" element={<Dashboard/>}/>

</Routes>


</BrowserRouter>  
</StrictMode>,


)
