import React, { useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import { INICIO_SESION} from "../graphql/mutations/user/index";
import { useMutation} from "@apollo/client";
import Loading from "./Loading";
import Swal from "sweetalert2";


const Login = () =>{

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    //const [id, setId] = useState('');

    const navigate = useNavigate();

    const [login, { loading, error }] = useMutation(INICIO_SESION, {
        onCompleted: (data) => {
            if (data.login && data.login.token) {
                localStorage.setItem('authToken', data.login.token);
                Swal.fire({
                    title: 'Éxito!',
                    text: 'Inicio de Sesion correcto',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    // redirige a la página de login
                    if (result.isConfirmed) {
                        navigate('/HomeLogin');
                    }
                });
            }
        },
        onError: (error) => {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            await login({
                variables: {
                    email: email,
                    password: pass
                }
            });
            //alert(result.data.login.token); => Debugg para ver el token
            //Aca se guarda el token en localStorage
        }catch(e){
            console.log("Correo bla bla");
        }
    };
    

    return (
        <>
            <h1 className="bg-[#1B4332] text-white text-center text-5xl font-bold py-4">
                ServApp
            </h1>
            <div className='bg-[#95D5B2] flex justify-center items-center h-screen'>
            {loading && <Loading />}
                <div className="bg-[#1B4332] w=96 p-6 shadow-lg rounded-xl flex flex-col gap-4 justify-center">
                    <h1 className="text-3xl block text-white text-center underline font-semibold">Login</h1>
                    <form onSubmit={handleSubmit} className=" px-5" >
                        <div className="items-center space-y-4 py-4">

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
                                <Link className='text-[#95D5B2]'to={"./ForgotPass"}> Recuperar</Link> </p>

                                <button type="submit" className="bg-green-500 rounded-xl text-2xl text-white py-2 hover:scale-105 duration-300 w-full">Iniciar Sesión</button>

                            <p className="text-white">No tienes cuenta?
                                <Link className='text-[#95D5B2]'to={"./Register"}> Registrate</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
        );
}

export default Login;