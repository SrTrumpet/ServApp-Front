
import "../styles/banner.css"
import { Link } from 'react-router-dom';


function HomeLogin(){
    return (
        <>
        <div>
            <nav className="bg-[#1B4332]">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                        <h1 className="h-10 w-auto text-white text-5xl font-bold">ServApp</h1>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <Link to={"./Inicio"} className="text-white hover:bg-[#95D5B2] rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Inicio</Link>
                            <Link to={"./Categorias"}className="text-white hover:bg-[#95D5B2] hover:text-white rounded-md px-3 py-2 text-sm font-medium">Categorias</Link>
                            <Link to={"./Contacto"} className="text-white hover:bg-[#95D5B2] hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contacto</Link>
                            <Link to={"./Ayuda"} className="text-white hover:bg-[#95D5B2] hover:text-white rounded-md px-3 py-2 text-sm font-medium">Ayuda</Link>
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full hover:bg-[#95D5B2] p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">View notifications</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                        </button>
                        
                        <div className="relative ml-3">
                        <div>
                            <button type="button" className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src="" alt=""></img>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
        <div className="bg-[#95D5B2]  min-h-screen flex items-center justify-center">
            <div className="bg-[#1B4332] w=96 p-6 shadow-lg rounded-xl flex flex-col gap-4 justify-center">
                <form  className="flex flex-col gap-6 justify-center">
                    <h1 className="text-white text-3xl gap-4">Busca un servicio que necesites</h1>
                    <input className="p-2 rounded-xl border" placeholder="Busca un servicio: Gasfiter, Niñeros, etc"/>
                    <button type="submit" className="hover:bg-[#95D5B2] rounded-xl text-2xl text-white py-2 duration-300 w-full">Buscar</button>
                </form>
            </div>
        </div>
            <div className="bg-[#95D5B2] flex gap-6">
                <div className="bg-[#1B4332] card grow text-white" >Publicacion_1</div>
                <div className="bg-[#1B4332] card grow text-white">Publicacion_2</div>
                <div className="bg-[#1B4332] card grow text-white">Publicacion_3</div>
                <div className="bg-[#1B4332] card grow text-white">Publicacion_4</div>
                <div className="bg-[#1B4332] card grow text-white">Publicacion_5</div>
                <div className="bg-[#1B4332] card grow text-white">Publicacion_5</div>
            </div>
        </>
    );

}

export default HomeLogin;