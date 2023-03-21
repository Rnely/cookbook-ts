import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from '../../redux/slices/userSlice';
import { useParams } from 'react-router-dom';

export const useGetUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const findUsers = async () => {
      const response = await axios.get('http://localhost:5000/cookbook/users');
      dispatch(setUser(response.data));
    };
    findUsers();
  });
};
