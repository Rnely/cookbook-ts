import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setUserFollowing } from '../../redux/slices/userFollowingSlice';

interface User {
  _id: string;
  name: string;
  following: Array<String>;
}

const GetUserFollowing = () => {
  const [users, setUsers] = useState<User[]>([]);
  const dispatch = useDispatch();

  const userName = useSelector((state: RootState) => state.currentUser.user);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('http://localhost:5000/cookbook/users');
      setUsers(response.data);
      const userData = users.find(({ name }) => name === userName);
      if (userData) {
        dispatch(setUserFollowing(userData.following));
        console.log(userData.following);
      }
    };

    getUsers();
  }, []);
};

export default GetUserFollowing;
