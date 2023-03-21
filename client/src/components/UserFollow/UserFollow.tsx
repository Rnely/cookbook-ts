import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import HandleUserFollow from './HandleUserFollow';

const UserFollow = () => {
  const currentUserId = useSelector(
    (state: RootState) => state.currentUserId.userId,
  );
  const userFollowing: string[] = useSelector(
    (state: RootState) => state.userFollowing.userFollowing,
  );

  const { id } = useParams();

  const isFollowing = id !== undefined && userFollowing.includes(id);

  if (currentUserId === id) {
    return null;
  } else {
    return (
      <>{isFollowing ? <button>Unfollow</button> : <HandleUserFollow />}</>
    );
  }
};
export default UserFollow;
