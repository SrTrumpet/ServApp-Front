import React from 'react';
import { useParams } from 'react-router-dom';


const VerServicio: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const users = [
      {
        id: 1,
        name: 'Syket',
        age: 20,
        designation: 'Software Engineer',
      },
      {
        id: 2,
        name: 'Sakib',
        age: 25,
        designation: 'Programmer',
      },
      {
        id: 3,
        name: 'Jamy',
        age: 30,
        designation: 'Designer',
      },
      {
        id: 4,
        name: 'Hanif',
        age: 20,
        designation: 'UX Writer',
      },
    ];

    const user = users.find((u) => u.id === (id ? parseInt(id, 10) : undefined));


    if (!user) {
      return <div>Usuario no encontrado</div>;
    }

    return (
      <div>
        <h3>Nombre: {user.name}</h3>
        <p>ID: {user.id}</p>
        <p>Edad: {user.age}</p>
        <p>Designación: {user.designation}</p>
      </div>
    );
};

export default VerServicio;
