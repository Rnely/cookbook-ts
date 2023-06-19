import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setUserId } from '../../../redux/slices/userIdSlice';
import { setFollowing } from '../../../redux/slices/followingSlice';
import { setUserFollowing } from '../../../redux/slices/userFollowingslice';
import { setUserCollections } from '../../../redux/slices/userCollections';

interface UserCollections {
  name: string;
  private: boolean;
  recipes: string[];
}

interface User {
  _id: string;
  name: string;
  following: Array<string>;
  collections: UserCollections[];
}

const GetUserId = () => {
  const [users, setUsers] = useState<User[]>([]);
  const dispatch = useDispatch();

  const currentUserName = useSelector(
    (state: RootState) => state.currentUserName.userName,
  );
  const userFollowing = useSelector(
    (state: RootState) => state.userFollowing.userFollowing,
  );
  const userCollections = useSelector(
    (state: RootState) => state.userCollections.userCollections,
  );

  useEffect(() => {
    getUsers();
  }, [currentUserName, userFollowing, userCollections]);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/cookbook/users');
    setUsers(response.data);
    const userIds = users.map((user) => user._id);
    dispatch(setFollowing(userIds));
    const userData = users.find(({ name }) => name === currentUserName);
    if (userData) {
      dispatch(setUserId(userData._id));
      dispatch(setUserFollowing(userData.following));
      dispatch(setUserCollections(userData.collections));
    }
  };
};

export default GetUserId;
