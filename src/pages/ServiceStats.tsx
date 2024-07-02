import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import NavBar from '../components/NavBar';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ServiceStats: React.FC = () => {
  const { id_servicio } = useParams<{ id_servicio: string }>();
  const navigate = useNavigate();

  const users = [
    { 
      id_servicio: 1, 
      name: 'Syket', 
      age: 20, 
      designation: 'Software Engineer', 
      direction: [-29.964266320209205, -71.34929533552395],
      ventas: [12, 19, 3, 5, 2, 3], // Datos de ventas mensuales
      ganancias: [50, 25, 80, 60, 35, 70], // Datos de ganancias mensuales
    },
    { 
      id_servicio: 2, 
      name: 'Sakib', 
      age: 25, 
      designation: 'Programmer', 
      direction: [-29.964266320209205, -71.34929533552395],
      ventas: [8, 15, 5, 3, 1, 4], // Datos de ventas mensuales
      ganancias: [45, 30, 60, 50, 25, 55], // Datos de ganancias mensuales
    },
    { 
      id_servicio: 3, 
      name: 'Jamy', 
      age: 30, 
      designation: 'Designer', 
      direction: [-29.964266320209205, -71.34929533552395],
      ventas: [10, 18, 4, 6, 3, 2], // Datos de ventas mensuales
      ganancias: [55, 28, 75, 65, 40, 60], // Datos de ganancias mensuales
    },
    { 
      id_servicio: 4, 
      name: 'Hanif', 
      age: 20, 
      designation: 'UX Writer', 
      direction: [-29.964266320209205, -71.34929533552395],
      ventas: [15, 22, 7, 4, 3, 5], // Datos de ventas mensuales
      ganancias: [60, 35, 90, 70, 45, 80], // Datos de ganancias mensuales
    },
  ];

  const servicioId = id_servicio ? parseInt(id_servicio, 10) : undefined;
  const user = users.find((u) => u.id_servicio === servicioId);

  if (!user) {
    return <div>Usuario no encontrado</div>;
  }

  const ventasData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Ventas Mensuales',
        data: user.ventas,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const gananciasData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Ganancias Mensuales',
        data: user.ganancias,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: 'white', // Color de las etiquetas del eje X
        },
      },
      y: {
        ticks: {
          color: 'white', // Color de las etiquetas del eje Y
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Color de las etiquetas de la leyenda
        },
      },
      tooltip: {
        titleColor: 'white', // Color del título del tooltip
        bodyColor: 'white', // Color del cuerpo del tooltip
      },
    },
  };

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

  // Encontrar el mes con más ventas y ganancias
  const maxVentasIndex = user.ventas.indexOf(Math.max(...user.ventas));
  const maxGananciasIndex = user.ganancias.indexOf(Math.max(...user.ganancias));
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  const mesMaxVentas = meses[maxVentasIndex];
  const mesMaxGanancias = meses[maxGananciasIndex];

  return (
    <div className="bg-[#95D5B2] h-screen">
      <NavBar />
      <div className="flex h-screen bg-[#95D5B2] items-center justify-center">
        <form className="bg-[#1B4332] p-7 shadow-lg rounded-xl flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
          <h3>Estadísticas del Servicio</h3>
          <p>{user.designation}</p>
          <div className="mt-4">
            <h4>Ventas Mensuales</h4>
            <Bar data={ventasData} options={options} />
          </div>
          <div className="mt-4">
            <h4>Ganancias Mensuales</h4>
            <Bar data={gananciasData} options={options} />
          </div>
          <div className="mt-4">
            <p>Mes con más ventas: {mesMaxVentas}</p>
            <p>Mes con más ganancias: {mesMaxGanancias}</p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ServiceStats;



