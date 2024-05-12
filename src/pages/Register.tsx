
import "../styles/banner.css"
import React ,{useState} from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Login from "./Login";
import ForgotPass from "./ForgotPass";


function Register() {

    const [nombre , setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passVerifi, setPassVerifi] = useState('');


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', pass);
    };

    return(
        <>
        <h1 className="bg-[#1B4332] text-white text-center text-5xl font-bold">
            ServApp
        </h1>
        <div className="bg-[#95D5B2]  min-h-screen flex items-center justify-center">
                <div className="bg-[#1B4332] w=96 p-6 shadow-lg rounded-xl flex flex-col gap-4 justify-center">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center">
                        <h1 className="text-white text-2xl">Primera vez por aqui? Registrate!</h1>
                        <label className="text-white">Nombre</label>
                        <input className="p-2 rounded-xl border" placeholder="Ingresa tu nombre de usuario"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required>

                        </input>
                        <label className="text-white">Email:</label>
                        <input className="p-2 rounded-xl border" placeholder="Ingresa tu Email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required>

                        </input>
                        <label className="text-white">Contraseña:</label>
                        <input className="p-2 rounded-xl border" placeholder="Ingresa tu contraseña"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required>
                        </input>

                        <label className="text-white">Repetir Contraseña:</label>
                        <input className=" p-2 rounded-xl border" placeholder="Repite tu contraseña"
                        value={passVerifi}
                        onChange={(e) => setPassVerifi(e.target.value)}
                        required>
                        </input>
                        
                        <button type="submit" className="bg-[#95D5B2] rounded-xl text-2xl text-white py-2 hover:scale-105 duration-300 w-full">Registrar</button>
                        <p className="text-white">Ya tienes una cuenta?<Link className=" text-[#95D5B2] underline"to={"./Login"}>Ingresa aqui!</Link></p>
                    </form>
                </div>
            </div>
    </>
    );
}

export default Register;