import { useParams } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import React, { useRef, useEffect, useContext } from 'react';


const VerServicio: React.FC = () => {
    const { id } = useParams<{ id: string }>();
  
    const coordinates = [Number, Number]
    const users = [
      {
        id: 1,
        name: 'Syket',
        age: 20,
        designation: 'Software Engineer',
        direction: [-29.964266320209205, -71.34929533552395],
      },
      {
        id: 2,
        name: 'Sakib',
        age: 25,
        designation: 'Programmer',
        direction: [-29.964782538322147, -71.34836489693791],
      },
      {
        id: 3,
        name: 'Jamy',
        age: 30,
        designation: 'Designer',
        direction: [-29.965590828640202, -71.35052997092953],
      },
      {
        id: 4,
        name: 'Hanif',
        age: 20,
        designation: 'UX Writer',
        direction: [-29.964393667098573, -71.35192634200634],
      },
    ];

    const user = users.find((u) => u.id === (id ? parseInt(id, 10) : undefined));


    if (!user) {
      return <div>Usuario no encontrado</div>;
    }


    const mapContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (mapContainerRef.current && user.direction && user.direction.length === 2) {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current!, // Referencia al contenedor del mapa
          style: 'mapbox://styles/mapbox/streets-v12', // URL del estilo
          center: [-74.5, 40], // Posición inicial [lng, lat]
          zoom: 12, // Nivel de zoom inicial
        });
        return () => map.remove();
      }
    }, [user.direction]); // Asegúrate de incluir user.direction en el array de dependencias
  return (
    <div className="flex h-screen bg-[#95D5B2] items-center">
      <div className="w-1/2 bg-[#95D5B2] flex items-center justify-center">
        <div className="bg-[#1B4332] p-7 shadow-lg rounded-xl flex flex-col gap-4">
          <form className="flex flex-col gap-7 text-white">
            <h3>Nombre: {user.name}</h3>
            <p>ID: {user.id}</p>
            <p>Edad: {user.age}</p>
            <p>Designación: {user.designation}</p>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-[#95D5B2] flex items-center justify-center">
        <div ref={mapContainerRef} 
        style={{ 
          width: '700px',
          height: '600px', 
          position: 'fixed',
          }}/>;
      </div>
    </div>
  );
};

export default VerServicio;
