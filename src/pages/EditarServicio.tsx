import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../components/NavBar';

const EditarServicio: React.FC = () => {
  const { id_servicio } = useParams<{ id_servicio: string }>();
  const navigate = useNavigate();

  const users = [
    { id_servicio: 1, name: 'Syket', age: 20, designation: 'Software Engineer', direction: [-29.964266320209205, -71.34929533552395] },
    { id_servicio: 2, name: 'Sakib', age: 25, designation: 'Programmer', direction: [-29.964266320209205, -71.34929533552395] },
    { id_servicio: 3, name: 'Jamy', age: 30, designation: 'Designer', direction: [-29.964266320209205, -71.34929533552395] },
    { id_servicio: 4, name: 'Hanif', age: 20, designation: 'UX Writer', direction: [-29.964266320209205, -71.34929533552395] },
  ];

  const servicioId = id_servicio ? parseInt(id_servicio, 10) : undefined;
  const user = users.find((u) => u.id_servicio === servicioId);

  if (!user) {
    return <div>Usuario no encontrado</div>;
  }

  const [name, setName] = React.useState(user.name);
  const [age, setAge] = React.useState(user.age);
  const [designation, setDesignation] = React.useState(user.designation);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Updated Info:', { name, age, designation });

    // Mostrar mensaje de confirmación
    toast.success('Datos guardados correctamente');

    // Simular actualización de datos en el backend y redirección
    setTimeout(() => {
      navigate(-1); // Redirigir a la página anterior
    }, 2000);
  };

  return (
    <div className="bg-[#95D5B2] h-screen">
        <NavBar/> 
        <div className="flex h-screen bg-[#95D5B2] items-center justify-center">
        <form className="bg-[#1B4332] p-7 shadow-lg rounded-xl flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
            <h3>Editar Servicio</h3>
            <label>Nombre:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="p-2 rounded text-black" />
            <label>Edad:</label>
            <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value, 10))} className="p-2 rounded text-black" />
            <label>Designación:</label>
            <input value={designation} onChange={(e) => setDesignation(e.target.value)} className="p-2 rounded text-black" />
            <button type="submit" className="bg-[#95D5B2] p-2 rounded text-white mt-2">Guardar</button>
        </form>
        <ToastContainer />
        </div>
    </div>
  );
};

export default EditarServicio;
