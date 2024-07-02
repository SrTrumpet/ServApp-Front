import React from 'react';
import './ServiceFind.css';
import { Link } from 'react-router-dom';

const UserFind: React.FC = () => {

  const users = [
    {
      id_servicio: 1,
      name: 'Syket',
      age: 20,
      designation: 'Software Engineer',
      direction: [-29.964266320209205, -71.34929533552395],
      calificacion: 5.0,
    },
    {
      id_servicio: 2,
      name: 'Sakib',
      age: 25,
      designation: 'Programmer',
      direction: [-29.964266320209205, -71.34929533552395],
      calificacion: 4.7,
    },
    {
      id_servicio: 3,
      name: 'Jamy',
      age: 30,
      designation: 'Designer',
      direction: [-29.964266320209205, -71.34929533552395],
      calificacion: 4.4,
    },
    {
      id_servicio: 4,
      name: 'Hanif',
      age: 20,
      designation: 'UX Writer',
      direction: [-29.964266320209205, -71.34929533552395],
      calificacion: 3.6,
    },
  ];
  const [userList, setUserList] = React.useState<
    {id_servicio: number, name: string; age: number;calificacion: number; designation: string; }[] | undefined
  >(users);
  const [text, setText] = React.useState<string>('');

  const handleOnClick = () => {
    const findUsers =
      userList && userList?.length > 0
        ? userList?.filter((u) => u?.name === text)
        : undefined;

    console.log(findUsers);

    setUserList(findUsers);
  };

  return (
    <div className='bg-[#95D5B2]'>
      <div className="input__wrapper">
        <input
          type="text"
          placeholder="Buscar Servicio"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setUserList(users);
          }}
        />
        <button disabled={!text} onClick={handleOnClick}>
          Buscar
        </button>
      </div>

      <div className="body">
        {userList && userList?.length === 0 && (
          <div className="notFound">No User Found</div>
        )}

        {userList &&
          userList?.length > 0 &&
          userList?.map((user) => {
            return (
              <div className="body__item">
                <h3>Name: {user?.name}</h3> 
                <p>Age: {user?.age}</p>
                <p>Designation: {user?.designation}</p>
                <p>Calificación: {user?.calificacion}/5.0</p>
                <Link to={'/VerServicio/'+user?.id_servicio}>
                    <button type="submit" className="bg-[#95D5B2] rounded-md text-[#1B4332] py-1 hover:scale-105
                        duration-300 
                        w-full">Ver {user.name}</button>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserFind;