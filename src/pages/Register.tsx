
import React ,{useState} from "react";
import Button from '@mui/material/Button';
import { useMutation } from "@apollo/client";
import { REGISTER } from "../graphql/mutations/user";
import Loading from "./Loading";

function Register() {

    const [nombre , setNombre] = useState('');
    const [apellidos , setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passVerifi, setPassVerifi] = useState('');

    const [register,{loading,error}] = useMutation(REGISTER);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (passVerifi == pass){
            try{
                const result = await register({
                    variables:{
                        nombre: nombre,
                        apellidos: apellidos,
                        email:email,
                        pass:pass,
                    }
                });

                alert(result.data.register.message);
            }catch(e){
                console.log(e);
            }
        }
    };

    if (error){
        console.error("GraphQL Error:", error);
        return <div>Error! {error.message}</div>;
    }
    if (loading){
        return <Loading/>
    }

    
    return(
        
        <div>
            <div>
                <h2>Registremos tu cuenta</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Nombre</p>
                        <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        style={{ border: '1px solid #ccc' }}
                        required
                        />
                    </div>

                    <div>
                        <p>Apellidos</p>
                        <input
                        value={apellidos}
                        onChange={(e) => setApellido(e.target.value)}
                        style={{ border: '1px solid #ccc' }}
                        required
                        />
                    </div>
                    
                    <div>
                        <p>Email</p>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ border: '1px solid #ccc' }}
                        required
                        />
                    </div>

                    <div>
                        <p>Crea una contraseña</p>
                        <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        style={{ border: '1px solid #ccc' }}
                        required
                        />
                    </div>

                    <div>
                        <p>Repite la contraseña</p>
                        <input
                        value={passVerifi}
                        onChange={(e) => setPassVerifi(e.target.value)}
                        style={{ border: '1px solid #ccc' }}
                        required
                        />
                    </div>

                    <div>
                        <Button type= "submit" variant="outlined">Registrarse</Button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Register;