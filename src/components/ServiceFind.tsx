import React from 'react';
import './ServiceFind.css';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POPULAR_SERVICES } from '../graphql/mutations/servicio';// Asegúrate de tener la ruta correcta
import Loading from '../pages/Loading';

const UserFind: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POPULAR_SERVICES);

  // Agrega un usuario de ejemplo a la lista recibida de la consulta
  const exampleUser = {
    id_servicio: 1,
    nombreUsuario: 'Syket',
    ocupacion: 'Software Engineer',
    calificacion: 5.0,
  };

  const [userList, setUserList] = React.useState<any[] | undefined>([exampleUser]);
  const [text, setText] = React.useState<string>('');

  // Actualiza la lista de usuarios cuando los datos de la consulta están disponibles
  React.useEffect(() => {
    if (data && data.getPupularService) {
      setUserList([exampleUser, ...data.getPupularService]);
    }
  }, [data]);

  const handleOnClick = () => {
    const findUsers = userList && userList.length > 0 ? userList.filter((u) => u.name === text) : undefined;
    console.log(findUsers);
    setUserList(findUsers);
  };

  if(loading) return <Loading/>

  return (
    <div className='bg-[#95D5B2]'>
      <div className="input__wrapper">
        <input
          type="text"
          placeholder="Buscar Servicio"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setUserList([exampleUser, ...(data?.getPupularService || [])]);
          }}
        />
        <button disabled={!text} onClick={handleOnClick}>
          Buscar
        </button>
      </div>

      <div className="body">
        {userList && userList.length === 0 && <div className="notFound">No User Found</div>}
        {userList && userList.length > 0 && userList.map((user) => (
          <div className="body__item">
            <h3>Name: {user.nombreUsuario}</h3>
            <p>Occupation: {user.ocupacion}</p>
            <p>Calificación: {user.calificacion}/5.0</p>
            <Link to={'/VerServicio/' + user.id_servicio}>
              <button type="submit" className="bg-[#95D5B2] rounded-md text-[#1B4332] py-1 hover:scale-105 duration-300 w-full">Ver {user.name}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFind;
