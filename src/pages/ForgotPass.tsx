import React, { useState } from "react";
import { useMutation} from "@apollo/client";
import { FORGOT_PASS } from "../graphql/mutations/user";
import Loading from "./Loading";

function ForgotPass(){

    const [email, setEmail] = useState('');
    const [forgotPass, {loading,error}] = useMutation(FORGOT_PASS);


    const handleSubmit =  async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
            try{
                const result =await forgotPass({
                    variables:{
                        email:email,
                    }
                });

                alert(result.data.forgotPass.message);
            }catch(e){
                console.log("Correo no encontrado")
            }
        };
    
    if (error){
        return <div>`Error! ${error.message}`</div>;
    }
    if (loading){
        return <Loading/>
    }

    return(
        <div className='bg-[#95D5B2] flex justify-center items-center h-screen'>
                <div className="bg-[#1B4332] w=96 p-6 shadow-lg rounded-xl flex flex-col gap-4 justify-center">
                    <h1 className="text-3xl block text-white text-center font-semibold">Recuperar Contraseña</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                        <label className="text-white" htmlFor="email">Correo Electronico:</label>
                            <input className="rounded-xl border w-full text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Ingresa tu Correo Electronico"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                            
                            <div>
                                <button type="submit" className="bg-[#95D5B2] rounded-xl text-2xl text-white py-2 hover:scale-105 duration-300 w-full">Recuperar Contraseña</button>
                            </div>
                        </form>
                </div>
        </div>
    )
}

export default ForgotPass;