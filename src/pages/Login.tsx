import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { INICIO_SESION} from "../graphql/mutations/user/index";
import { useMutation} from "@apollo/client";
import Loading from "./Loading";



const Login = () =>{

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [login,{loading,error}] = useMutation(INICIO_SESION);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try{
            const result = await login({
                variables: {
                    email: email,
                    password: pass
                }
            });

            alert(result.data.login.token);
        }catch(e){
            
        }
        //login('email', 'password');
    };
    
    if (error){
        return <div>`Error! ${error.message}`</div>;
    }
    if (loading){
        return <Loading/>
    }


    return (
        <div>
            <h1 className="bg-orange-200 text-center text-5xl font-bold">
                ServApp
            </h1>

            <div className='flex justify-center items-center h-screen bg-purple-900'>
                <div className="w=96 p-6 shadow-lg bg-indigo-950 rounded-xl flex flex-col gap-4 justify-center">
                    <h1 className="text-3xl block text-white text-center underline font-semibold">Login</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="items-center">

                        <h2 className="text-white">Email:</h2>

                        <label htmlFor="email"></label>

                        <input className="rounded-xl border w-full text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Ingresa tu Correo"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <h2 className="text-white">Contraseña:</h2>

                        <label htmlFor="password"></label>

                        <input className="rounded-xl border w-full text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Ingresa tu Contreña"
                            type="password"
                            id="password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            required
                        />

                        <p className="text-white">Olvidé la contraseña.
                            <Link className='text-purple-900'to={"./olvido-de-contrasenna"}> Recuperar</Link> </p>
                        
                        <button type="submit" className="bg-purple-900 rounded-xl text-2xl 
                        text-white py-2 hover:scale-105 duration-300 w-full">Iniciar Sesion</button>

                        <p className="text-white">No tienes cuenta. <Link className='text-purple-900'to={"./registrarse"}>Registrate</Link></p>

                    </div>
                    </form>
                </div>
            </div>
        </div>
        );
}

export default Login;