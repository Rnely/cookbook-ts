import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { RootState } from '../../redux/store';
import { setCurrentUserName } from '../../redux/slices/currentUserSlice';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const isPending = useSelector((state: RootState) => state.pending);

  const nav = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/cookbook/login', {
        name,
        password,
      });
      dispatch(setCurrentUserName(name));
      nav('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          className="inp"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Password:</label>
        <input
          className="inp"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isPending && <button type="submit">Submit</button>}
        {!isPending && <button disabled>Submiting...</button>}
      </form>
    </div>
  );
};

export default LoginForm;
