import React, { useState } from "react";

import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

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
        <div className='bg-secondary min-h-screen'>
            <h1 className='text-3xl font-bold underline'>Iniciar Sesión</h1>
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
                <p>Olvide la contraseña.<Link to={"/olvido-de-contrasenna"}> Recuperar</Link> </p>
            </div>


            <button type="submit">Iniciar Sesión</button>
            </form>
            <Button></Button>
        </div>
        );
}

export default Login;