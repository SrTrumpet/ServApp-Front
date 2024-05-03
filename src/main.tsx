import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPass from './pages/ForgotPass';
import Register from './pages/Register';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(


  
  <React.StrictMode>
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />}/>
        <Route path="/olvido-de-contrasenna" element={<ForgotPass/>} />
        <Route path='/registrarse' element = { <Register/>} />

      </Routes>
    </Router>
    
  </React.StrictMode>,
)
