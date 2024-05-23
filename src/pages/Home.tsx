
import "../styles/banner.css"
import { Link } from "react-router-dom";

const Home = () => {



    return(

        <>
        <h1 className="bg-orange-200 text-center text-5xl font-bold">
            servicioAltoke
        </h1>
        <div className="bg-purple-800 min-h-screen flex items-center">
                <h1 className="text-center text-3xl font-bold">
                </h1>
                <div className="bg-indigo-950 flex  shadow-lg max-w-3xl p-5  w-1/2 h-screen justify-center">
                    <form className="flex flex-col gap-3 justify-center">
                        <h1 className="text-white text-3xl">El servicio que necesites</h1>
                        <h1 className="text-white text-center">Buscas algo?</h1>
                        <label></label>
                        <input className="p-2 rounded-xl border" placeholder="Busca algo que necesites"></input>
                        <button className="bg-purple-800 rounded-xl text-white py-2 hover:scale-105 duration-300">Buscar</button>
                    </form>
                </div>
                <div className="bg-purple-800 flex  shadow-lg max-w-3xl p-5  w-1/2 h-screen justify-center">
                    <form className="flex flex-col gap-4 justify-center">
                        <h1 className="text-white text-2xl">Primera vez por aqui? Registrate!</h1>
                        <label className="text-white">Email:</label>
                        <input className="p-2 rounded-xl border" placeholder="Ingresa tu Email"></input>
                        <label className="text-white">Contraseña:</label>
                        <input className="p-2 rounded-xl border" placeholder="Ingresa tu contraseña"></input>
                        <label className="text-white">Repetir Contraseña:</label>
                        <input className=" p-2 rounded-xl border" placeholder="Repite tu contraseña"></input>
                        <button className="bg-indigo-950 rounded-xl text-white py-2 hover:scale-105 duration-300">Registrar</button>
                        <p className="text-white">Ya tienes una cuenta?<Link className="underline"to={"./Login"}>Ingresa aqui!</Link></p>
                    </form>
                </div>
            </div>
    </>
    );
}

export default Home;