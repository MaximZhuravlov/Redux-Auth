import React from 'react';
import Login from './components/Login/Login';
import './App.scss';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/features/userSlice';
import Logout from './components/Logout/Logout';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user.user.user ? <Logout /> : <Login />}
    </div>
  );
}

export default App;
