import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth } from "../auth/AuthContext";

const Login = () =>{

    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', pass);
        login('email', 'password');
        };
    
    return (
        <div>

            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
            

            <div>
                <p>Email</p>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>


            <div>
                <p>Contraseña</p>
                <input
                type="password"
                id="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
            />
            </div>

                <Button type="submit" variant="outlined">Iniciar Sesion</Button>
            </form>


            <div>
                <Link to={"/registrarse"}>Registrarse</Link>
            </div>

            <div>
                <p>Olvidé la contraseña.<Link to={"/olvido-de-contrasenna"}> Recuperar</Link> </p>
            </div>

            <div>
                
            </div>

        </div>
        );
}

export default Login;