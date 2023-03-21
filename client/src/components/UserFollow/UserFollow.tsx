import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import HandleUserFollow from './HandleUserFollow';
import { useState, useEffect } from 'react';

const UserFollow = () => {
  const currentUserId = useSelector(
    (state: RootState) => state.currentUserId.userId,
  );
  const userFollowing: string[] = useSelector(
    (state: RootState) => state.userFollowing.userFollowing,
  );
  const [isFollowing, setIsFollowing] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined && userFollowing.includes(id)) {
      setIsFollowing(true);
    }
  }, [userFollowing]);

  if (currentUserId === id) {
    return null;
  } else {
    return (
      <>{isFollowing ? <button>Unfollow</button> : <HandleUserFollow />}</>
    );
  }
};
export default UserFollow;
