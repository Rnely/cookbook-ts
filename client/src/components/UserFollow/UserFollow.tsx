import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import HandleUserFollow from './HandleUserFollow';
import { useState, useEffect } from 'react';
import HandleUserUnfollow from './HandleUserUnfollow';

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
    } else {
      setIsFollowing(false);
    }
  }, [userFollowing]);

  if (currentUserId === id) {
    return null;
  } else {
    return <>{isFollowing ? <HandleUserUnfollow /> : <HandleUserFollow />}</>;
  }
};
export default UserFollow;
