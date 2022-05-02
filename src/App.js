import './App.css';
import AddUser from './Components/AddUser/AddUser';
import UserList from './Components/UserList/UserList';
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, 
              { name: uName, 
                age: uAge, 
                id: Math.random().toString() 
              }]
    })
  }

  function getId(id){
    setUserList(prevUserList=>prevUserList.filter(elem=>elem.id !== id));
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} getId={getId} />
    </div>
  );
}

export default App;
