import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Day01 from "./page/Day01/Day01.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/day01" element={<Day01/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
