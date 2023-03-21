import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import UserFollow from '../UserFollow';
import UserFollowList from '../UserFollowList';
import { setUserName } from '../../redux/slices/userNameSlice';

interface User {
  _id: string;
  name: String;
  regDate: String;
}

const RecipeDetails: React.FC = () => {
  const [user, setUser] = useState<User[] | null>(null);
  const dispatch = useDispatch();
  const userName = useSelector(
    (state: RootState) => state.currentUser.userName,
  );

  const currentUser = useSelector(
    (state: RootState) => state.currentUserId.userId,
  );

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, [userName]);

  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:5000/cookbook/users/${id}`,
    );
    setUser([response.data]);
    dispatch(setUserName(response.data.name));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-details">
      {user.map((user) => {
        return (
          <article key={user._id}>
            <h2>{userName}</h2>
            {currentUser ? (
              <UserFollow />
            ) : (
              <Link to="/login">
                <button type="button">Follow</button>
              </Link>
            )}
            <p>Member since: {user.regDate}</p>
            <UserFollowList />
          </article>
        );
      })}
    </div>
  );
};

export default RecipeDetails;
