import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { RootState } from '../../../redux/store';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const isPending = useSelector((state: RootState) => state.pending);

  const nav = useNavigate();

  const regDate = new Date().toLocaleDateString('es');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/cookbook/register', {
        name,
        password,
        regDate,
      });
      nav('/');
      toast.success(`Successfully registered. Click here to login`, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClick: () => nav('/authentication'),
      });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isPending && <button type="submit">Submit</button>}
      {!isPending && <button disabled>Submiting...</button>}
    </form>
  );
};

export default RegisterForm;
