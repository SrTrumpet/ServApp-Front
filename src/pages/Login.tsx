import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
//import { useAuth } from "../auth/AuthContext";
import { GET_USERS} from "../graphql/queries/user";
import { useQuery } from "@apollo/client";



const Login = () =>{

    //const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const {data } = useQuery(GET_USERS);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', pass);

        console.log("El mensaje del back => ",data.user.name);
        console.log("El mensaje del back => ",data.user.password);

        //login('email', 'password');
    };
    
    return (
        <div>

            <h2 className='text-3xl font-bold '>Iniciar Sesión</h2>
            
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
                <p><Link to={"/registrarse"}>Registrarse</Link></p>
            </div>

            <div>
                <p>Olvidé la contraseña.<Link to={"/olvido-de-contrasenna"}> Recuperar</Link> </p>
            </div>

        </div>
        );
}

export default Login;