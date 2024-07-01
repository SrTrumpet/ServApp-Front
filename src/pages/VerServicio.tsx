import { useParams } from 'react-router-dom';
import React from 'react';
import { PlacesProvider } from '../components/context/Places/PlacesProvider';
import { MapView } from '../components/MapView';
import { MapProvider } from '../components/context';
import { BtnMyLocation, SearchBar } from '../components';

const VerServicio: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const users: { id: number, name: string, age: number, designation: string, direction: [number, number] }[] = [
      {
        id: 1,
        name: 'Syket',
        age: 20,
        designation: 'Software Engineer',
        direction: [-71.24131243059544, -29.907130372114818],
      },
      {
        id: 2,
        name: 'Sakib',
        age: 25,
        designation: 'Programmer',
        direction: [-71.35330366426032, -29.965124866684768],
      },
      {
        id: 3,
        name: 'Jamy',
        age: 30,
        designation: 'Designer',
        direction: [-71.33763956422757,-29.957577277275888],
      },
      {
        id: 4,
        name: 'Hanif',
        age: 20,
        designation: 'UX Writer',
        direction: [-71.27433943093259,-29.904616504452086],
      },
    ];

    const user = users.find((u) => u.id === (id ? parseInt(id, 10) : undefined));

    if (!user) {
      return <div>Usuario no encontrado</div>;
    }

    return (
      <div className="flex h-screen bg-[#95D5B2] items-center">
        <div className="w-1/2 bg-[#95D5B2] flex items-center justify-center">
          <div className="bg-[#1B4332] p-7 shadow-lg rounded-xl flex flex-col gap-4">
            <form className="flex flex-col gap-7 text-white">
              <h3>Nombre: {user.name}</h3>
              <p>ID: {user.id}</p>
              <p>Edad: {user.age}</p>
              <p>Dirección: {user.direction}</p>
            </form>
          </div>
        </div>
        <div className="w-1/2 bg-[#95D5B2] flex items-center justify-center">
          <PlacesProvider>
            <MapProvider>
              <MapView direction={user.direction} />
              <BtnMyLocation />
              <SearchBar />
            </MapProvider>
          </PlacesProvider>
        </div>
      </div>
    );
};

export default VerServicio;
