import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUserFollowing } from '../../redux/slices/userFollowingslice';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import { UserUnfollowButton } from '../StyledButtons';

interface User {
  _id: string;
  name: string;
  following: Array<string>;
}

const HandleUserUnfollow = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: RootState) => state.currentUserId.userId,
  );
  const userName = useSelector((state: RootState) => state.userName.userName);
  const userFollowing: string[] = useSelector(
    (state: RootState) => state.userFollowing.userFollowing,
  );
  const [users, setUsers] = useState<User[]>([]);
  const following = [...userFollowing];

  const { id } = useParams();

  const handleUserUnfollow = async () => {
    if (id) {
      const index = following.indexOf(id);
      dispatch(setUserFollowing(following.splice(index, 1)));
      try {
        await axios.patch(
          `http://localhost:5000/cookbook/users/${currentUser}`,
          {
            following: following,
          },
        );
        dispatch(setUserFollowing([...following]));
      } catch (error) {
        console.log(error);
      }
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
    <div onClick={() => handleUserUnfollow()}>
      <UserUnfollowButton />
    </div>
  );
};
export default HandleUserUnfollow;
