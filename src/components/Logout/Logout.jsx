import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../redux/features/userSlice';
import './Logout.scss';

const Logout = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogout = (event) => {
    event.preventDefault();

    dispatch(logout());
  };
  return (
    <div className="logout">
      <h1 className="logout__title">
        Welcome, <span className="logout__name">{user.user.user.name}</span>
      </h1>
      <button className="logout__button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
