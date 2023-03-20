import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';

const UserFollow = () => {
  const currentUser = useSelector(
    (state: RootState) => state.currentUserId.userId,
  );

  const { id } = useParams();

  const handleUserFollow = async () => {
    try {
      await axios.post(`http://localhost:5000/cookbook/users/${currentUser}`, {
        following: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="button" onClick={() => handleUserFollow()}>
      Follow
    </button>
  );
};
export default UserFollow;
