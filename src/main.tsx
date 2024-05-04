import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPass from './pages/ForgotPass';
import Register from './pages/Register';
import { AuthProvider } from './auth/AuthContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(



  <React.StrictMode>
    <AuthProvider>
    <Router>
      <Routes>
        

        <Route path="/" element={<Login />}/>
        <Route path="/olvido-de-contrasenna" element={<ForgotPass/>} />
        <Route path='/registrarse' element = { <Register/>} />

        
      </Routes>
    </Router>
    </AuthProvider>
  </React.StrictMode>,
)
