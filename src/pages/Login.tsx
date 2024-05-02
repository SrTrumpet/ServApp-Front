import React, { useState } from "react";
import ForgotPass from './ForgotPass';
import { Link } from 'react-router-dom';
import styleLogin from '../styles/styleLogin.css'

function Login(){

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', pass);
        // Aquí puedes añadir la lógica para autenticar al usuario
        };


    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                type="password"
                id="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
            />
            </div>

            <div>
                <p>Olvide la contraseña.<Link to={"./ForgotPass"}> Recuperar</Link> </p>
            </div>


            <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
        );
}

export default Login;