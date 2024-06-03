import React from 'react';
import './ServiceFind.css';
import { Button } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';

const UserFind: React.FC = () => {
  const users = [
    {
      name: 'Syket',
      age: 20,
      designation: 'Software Engineer',
    },
    {
      name: 'Sakib',
      age: 25,
      designation: 'Programmer',
    },
    {
      name: 'Jamy',
      age: 30,
      designation: 'Designer',
    },
    {
      name: 'Hanif',
      age: 20,
      designation: 'UX Writer',
    },
  ];
  const [userList, setUserList] = React.useState<
    { name: string; age: number; designation: string }[] | undefined
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
                <Link to="/VerServicio">
                    <button type="submit" className="bg-[#95D5B2] rounded-md text-[#1B4332] py-1 hover:scale-105
                        duration-300 
                        w-full">Ver</button>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserFind;