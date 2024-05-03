import React, { useState } from "react";

function ForgotPass(){

    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        };

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
                        <button type="submit">Recuperar Contraseña</button>
                    </div>
                
                </form>
            </div>

            
            
        </div>
        
    )
}

export default ForgotPass;