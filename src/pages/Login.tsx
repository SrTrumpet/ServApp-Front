import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth } from "../auth/AuthContext";
import { Mensaje, GET_USERS} from "../graphql/queries/user";
import { useQuery } from "@apollo/client";



const Login = () =>{

    //const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const {data , loading , error} = useQuery(GET_USERS);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', pass);

        console.log("El mensaje del back => ",data.user.name);
        console.log("El mensaje del back => ",data.user.password);

        //login('email', 'password');
    };
    
    return (
        <body>
            <h1 className="bg-orange-200 text-center text-5xl font-bold">
                servicioAltoke
            </h1>
            <div className='flex justify-center items-center h-screen bg-purple-900'>
                <div className="w=96 p-6 shadow-lg bg-indigo-950 rounded-xl flex flex-col gap-4 justify-center">
                    <h1 className="text-3xl block text-white text-center underline font-semibold">Login</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="items-center">
                        <h1 className="text-white">Email:</h1>
                        <label htmlFor="email"></label>
                        <input className="rounded-xl border w-full text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Ingresa tu Correo"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                        <h1 className="text-white">Contraseña:</h1>
                        <label htmlFor="password"></label>
                        <input className="rounded-xl border w-full text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Ingresa tu Contreña"
                        type="password"
                        id="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required/>
                        <p className="text-white">Olvide la contraseña.
                            <Link className='text-purple-900'to={"./ForgotPass"}> Recuperar</Link> </p>
                        <button type="submit" className="bg-purple-900 rounded-xl text-2xl 
                        text-white py-2 hover:scale-105 duration-300 w-full">Inciar Sesion</button>
                    </div>
                    </form>
                </div>
            </div>
        </body>
        );
}

export default Login;