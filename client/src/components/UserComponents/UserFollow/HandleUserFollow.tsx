import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUserFollowing } from '../../../redux/slices/userFollowingslice';
import { RootState } from '../../../redux/store';
import { useEffect, useState } from 'react';
import { UserFollowButton } from '../../StyledButtons';

interface User {
  _id: string;
  name: string;
  following: Array<string>;
}

const HandleUserFollow = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: RootState) => state.currentUserId.userId,
  );
  const userName = useSelector((state: RootState) => state.userName.userName);
  const userFollowing: string[] = useSelector(
    (state: RootState) => state.userFollowing.userFollowing,
  );
  const [users, setUsers] = useState<User[]>([]);

  const { id } = useParams();

  const handleUserFollow = async () => {
    try {
      await axios.post(`http://localhost:5000/cookbook/users/${currentUser}`, {
        following: id,
      });
      dispatch(setUserFollowing([...userFollowing, id]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserFollowing = async () => {
      const response = await axios.get('http://localhost:5000/cookbook/users');
      setUsers(response.data);
      const userData = users.find(({ name }) => name === userName);
      if (userData) {
        dispatch(setUserFollowing(userData.following));
      }
      getUserFollowing();
    };
  }, [id]);

  return (
    <div onClick={() => handleUserFollow()}>
      <UserFollowButton />
    </div>
  );
};
export default HandleUserFollow;
