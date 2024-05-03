

import React ,{useState} from "react";

function Register() {

    const [nombre , setNombre] = useState('');
    const [apellido, setApellido] = useState('');
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

                <form onSubmit={handleSubmit}>
                    

                    <div>
                        <p>Nombre</p>
                        <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        />
                    </div>

                    <div>
                        <p>Apellidos</p>
                        <input
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
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
                        <button type="submit">Registrarse</button>
                    </div>

                </form>



            </div>


        </div>


    );

}

export default Register;