import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Login(){

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', pass);
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

                <button type="submit">Iniciar Sesión</button>
            </form>


            <div>
                <Link to={"/registrarse"}>Registrarse</Link>
            </div>

            <div>
                <p>Olvidé la contraseña.<Link to={"/olvido-de-contrasenna"}> Recuperar</Link> </p>
            </div>

        </div>
        );
}

export default Login;