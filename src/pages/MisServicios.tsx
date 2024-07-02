import "../styles/banner.css"
import UserFindUser from '../components/UserFindUser';
import NavBar from '../components/NavBar'


function MisServicios(){
    return (
        <div className="bg-[#95D5B2] h-screen">
            <NavBar/>
            <h1 className="text-5xl font-bold text-[#1B4332] text-center mb-10 ">Estas en tus servicios</h1>
            <UserFindUser/>
            </div>
    );
}
export default MisServicios;