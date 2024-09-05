import { useParams } from 'react-router-dom';
import React, { useState, useMemo } from 'react';
import { PlacesProvider } from '../components/context/Places/PlacesProvider';
import { MapView } from '../components/MapView';
import { MapProvider } from '../components/context';
import { BtnMyLocation, SearchBar } from '../components';

const VerServicio: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState<string>('');
    const [alert, setAlert] = useState<string>('');

    const users: { id: number, name: string, age: number, designation: string, direction: [number, number], calificacion: number}[] = [
      {
        id: 1,
        name: 'Syket',
        age: 20,
        designation: 'Software Engineer',
        direction: [-71.24131243059544, -29.907130372114818],
        calificacion: 5.0,
      },
      {
        id: 2,
        name: 'Sakib',
        age: 25,
        designation: 'Programmer',
        direction: [-71.35330366426032, -29.965124866684768],
        calificacion: 4.7,
      },
      {
        id: 3,
        name: 'Jamy',
        age: 30,
        designation: 'Designer',
        direction: [-71.33763956422757,-29.957577277275888],
        calificacion: 4.4,
      },
      {
        id: 4,
        name: 'Hanif',
        age: 20,
        designation: 'UX Writer',
        direction: [-71.27433943093259,-29.904616504452086],
        calificacion: 3.6,
      },
    ];

    const user = useMemo(() => users.find((u) => u.id === (id ? parseInt(id, 10) : undefined)), [id, users]);

    if (!user) {
      return <div>Usuario no encontrado</div>;
    }

    const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRating(parseInt(e.target.value, 10));
    };

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setComment(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Rating:', rating);
      console.log('Comment:', comment);
      setAlert('Los datos fueron enviados');
      setTimeout(() => setAlert(''), 3000); // Oculta el mensaje después de 3 segundos
      // Aquí puedes agregar la lógica para enviar los datos a un servidor
    };

    return (
      <div className="flex h-screen bg-[#95D5B2] items-center">
        <div className="w-1/2 bg-[#95D5B2] flex items-center justify-center">
          <UserDetailsForm
            user={user}
            rating={rating}
            comment={comment}
            onRatingChange={handleRatingChange}
            onCommentChange={handleCommentChange}
            onSubmit={handleSubmit}
          />
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
        {alert && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#2D6A4F] text-white p-4 rounded">
            {alert}
          </div>
        )}
      </div>
    );
};

interface UserDetailsFormProps {
    user: {
      id: number;
      name: string;
      age: number;
      designation: string;
      direction: [number, number];
      calificacion: number;
    };
    rating: number;
    comment: string;
    onRatingChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onCommentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UserDetailsForm: React.FC<UserDetailsFormProps> = ({ user, rating, comment, onRatingChange, onCommentChange, onSubmit }) => {
  return (
    <div className="bg-[#1B4332] p-7 shadow-lg rounded-xl flex flex-col gap-4">
      <form className="flex flex-col gap-7 text-white">
        <h3>Nombre: {user.name}</h3>
        <p>ID: {user.id}</p>
        <p>Edad: {user.age}</p>
        <p>Dirección: {user.direction}</p>
        <p>Calificación: {user.calificacion}/5.0</p>
    
      </form>
      <form className="flex flex-col gap-4 mt-4" onSubmit={onSubmit}>
        <label htmlFor="rating" className="text-white">Puntuación:</label>
        <select id="rating" value={rating} onChange={onRatingChange} className="p-2 rounded">
          <option value={0}>Seleccione una puntuación</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <label htmlFor="comment" className="text-white">Comentario:</label>
        <textarea id="comment" value={comment} onChange={onCommentChange} className="p-2 rounded h-24" />
        <button type="submit" className="bg-[#95D5B2] p-2 rounded text-white mt-2">Enviar</button>
      </form>
    </div>
  );
};

export default VerServicio;

