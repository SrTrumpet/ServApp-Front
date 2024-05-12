import React, { useState } from "react";
import Button from '@mui/material/Button';
import Login from "./Login";
import Register from "./Register";

function ForgotPass(){

    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        };

    return(
        <div className='bg-[#95D5B2] flex justify-center items-center h-screen'>
                <div className="bg-[#1B4332] w=96 p-6 shadow-lg rounded-xl flex flex-col gap-4 justify-center">
                    <h1 className="text-3xl block text-white text-center font-semibold">Recuperar Contraseña</h1>
                        <form onSubmit={handleSubmit}>
                        <label className="text-white" htmlFor="email">Email:</label>
                            <input className="rounded-xl border w-full text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Ingresa tu Correo"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                            <h1>""</h1>
                            <div>
                            <button type="submit" className="bg-[#95D5B2] rounded-xl text-2xl text-white py-2 hover:scale-105 duration-300 w-full">Recuperar Contraseña</button>
                            </div>
                        </form>
            </div>
        </div>
    )
}

export default ForgotPass;