import React ,{useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { AÑADIR_SERVICIO} from "../graphql/mutations/user";
import Loading from "./Loading";
import Swal from "sweetalert2";

function AñadirServicio() {

    const [ocupacion , setOcupacion] = useState('');
    const [categoria , setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [direccion, setDireccion] = useState('');

    const navigate = useNavigate();

    const [] = useMutation(AÑADIR_SERVICIO, {
        onCompleted: () => {
            // muestra el SweetAlert2 antes de redirigir
            Swal.fire({
                title: 'Éxito!',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then((result) => {
                // redirige a la página de login
                if (result.isConfirmed) {
                    navigate('/');
                }
            });
        },
        onError: (e) => {
            console.log("Correo no encontrado", e);
        }
    });

    return(
        <>
        <h1 className="bg-[#1B4332] text-white text-center text-5xl font-bold py-4">
            ServApp
        </h1>
        <div className="bg-[#95D5B2]  min-h-screen flex items-center justify-center">
                <div className="bg-[#1B4332] w=96 p-6 shadow-lg rounded-xl flex flex-col gap-4 justify-center">
                    <form  className="flex flex-col gap-4 justify-center">
                        <h1 className="text-white text-2xl">Ingresa los datos para añadir un servicio</h1>
                        <label className="text-white">Ocupación:</label>
                        <input className="p-2 rounded-xl border" placeholder="Ingresa tu ocupacion"
                        value={ocupacion}
                        onChange={(e) => setOcupacion(e.target.value)}
                        required>
                        </input>

                        <label className="text-white">Categoría</label>
                        <input className="p-2 rounded-xl border" placeholder="Ingresa la categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required>
                        </input>

                        <label className="text-white">Descripción:</label>
                        <input className="p-2 rounded-xl border" placeholder="Ingresa una descripcion"
                        type="email"
                        id="email"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required>

                        </input>
                        <label className="text-white">Dirección:</label>
                        <input className="p-2 rounded-xl border" placeholder="Ingresa una dirección"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required>
                        </input>
                        
                        <button type="submit" className="bg-[#95D5B2] rounded-xl text-2xl text-white py-2 hover:scale-105 duration-300 w-full">Añadir Servicio</button>
                    </form>
                </div>
            </div>
    </>
    );
}


export default AñadirServicio;