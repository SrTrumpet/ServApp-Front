
import ServiceFind from '../components/ServiceFind';
import NavBar from '../components/NavBar';
import "../styles/banner.css";

function HomeLogin() {
  return (
    <div className="bg-[#95D5B2] h-screen">
      <NavBar /> 
      <h2 className="text-5xl font-bold text-[#1B4332] text-center">Servicios más buscados</h2>
      <ServiceFind/>
    </div>
  );
}

export default HomeLogin;
