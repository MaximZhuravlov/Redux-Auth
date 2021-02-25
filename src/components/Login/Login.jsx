import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/features/userSlice';
import './Login.scss';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(login({
      name: name,
      email: email,
      password: password,
      loggedIn: true
    }));
  };

  return (
    <div className="login">
      <form action="#" className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Login here</h1>
        <input
          type="text"
          className="login__input"
          placeholder="Enter your name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          type="email"
          className="login__input"
          placeholder="Enter your email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          className="login__input"
          placeholder="Enter your password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit" className="login__submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
