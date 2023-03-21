import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from '../../redux/slices/userSlice';

const GetUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    findUsers();
  }, []);
  const findUsers = async () => {
    const response = await axios.get('http://localhost:5000/cookbook/users');
    dispatch(setUser(response.data));
  };
};
export default GetUsers;
