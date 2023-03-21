import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setUserId } from '../../redux/slices/userIdSlice';
import { setFollowing } from '../../redux/slices/followingSlice';
import { setUserFollowing } from '../../redux/slices/userFollowingslice';

interface User {
  _id: string;
  name: string;
  following: Array<string>;
}

const GetUserId = () => {
  const [users, setUsers] = useState<User[]>([]);
  const dispatch = useDispatch();

  const userName = useSelector(
    (state: RootState) => state.currentUser.userName,
  );

  useEffect(() => {
    getUsers();
  }, [userName]);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/cookbook/users');
    setUsers(response.data);
    const userIds = users.map((user) => user._id);
    dispatch(setFollowing(userIds));
    const userData = users.find(({ name }) => name === userName);
    if (userData) {
      dispatch(setUserId(userData._id));
      dispatch(setUserFollowing(userData.following));
    }
  };
};

export default GetUserId;
