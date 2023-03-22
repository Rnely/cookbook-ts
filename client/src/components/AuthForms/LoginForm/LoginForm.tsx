import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { RootState } from '../../../redux/store';
import { setCurrentUserName } from '../../../redux/slices/currentUserSlice';
import { setUserId } from '../../../redux/slices/userIdSlice';
import { setLogin } from '../../../redux/slices/loginSlice';
import GetUserId from '../../GetUserId';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const isPending = useSelector((state: RootState) => state.pending);
  const currentUserName = useSelector(
    (state: RootState) => state.currentUserName.userName,
  );

  const nav = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/cookbook/login', {
        name,
        password,
      });
      dispatch(setCurrentUserName(name));
      dispatch(setLogin(true));
      GetUserId();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isPending && <button type="submit">Submit</button>}
      {!isPending && <button disabled>Submiting...</button>}
    </form>
  );
};

export default LoginForm;
