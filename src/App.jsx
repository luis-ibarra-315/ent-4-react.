

import { useEffect, useState } from 'react';
import './App.css'
import useCRUD from './hooks/useCRUD';
import UserCard from './components/UserCard';
import UserForm from './components/UserForm';

function App() {

  const [update, setUpdate] = useState();
  const [isShow, setIsShow] = useState(false);
  const [users, getUsers, createUser, deleteUser, updateUser] = useCRUD();

  useEffect(() => {
    getUsers('/users');
  }, []);

  //console.log(users);

  const handleForm = () => {
    setIsShow(true);

  }

  return (
    <div className='app'>
      <div className='app_header'>
        <h1>Crud Users</h1>
        <button onClick={handleForm}>Create User</button>
      </div>

      <UserForm
        createUser={createUser}
        update={update}
        updateUser={updateUser}
        setUpdate={setUpdate}
        isShow={isShow}
        setIsShow={setIsShow}

      />
      <div className='app_container'>
        {
          users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUpdate={setUpdate}
              setIsShow={setIsShow}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App;
