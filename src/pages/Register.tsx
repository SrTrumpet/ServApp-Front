
import React ,{useState} from "react";
import Button from '@mui/material/Button';

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
        
        <div>
            <div>
                <h2>Registremos tu cuenta</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Nombre y Apellidos</p>
                        <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
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
                        required
                        />
                    </div>

                    <div>
                        <p>Crea una contraseña</p>
                        <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required
                        />
                    </div>

                    <div>
                        <p>Repite la contraseña</p>
                        <input
                        value={passVerifi}
                        onChange={(e) => setPassVerifi(e.target.value)}
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