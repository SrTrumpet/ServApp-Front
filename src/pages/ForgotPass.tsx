import React, { useState } from "react";
import Button from '@mui/material/Button';
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
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <div>
                        <Button type="submit" variant="outlined">Recuperar Contraseña</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPass;