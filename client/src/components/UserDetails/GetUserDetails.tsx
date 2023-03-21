import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import UserFollow from '../UserFollow';
import UserFollowList from '../UserFollowList';
import UserCheckFollowing from '../UserCheckFollowing';

interface User {
  _id: string;
  name: String;
  regDate: String;
}

const RecipeDetails: React.FC = () => {
  const [user, setUser] = useState<User[] | null>(null);

  const currentUser = useSelector(
    (state: RootState) => state.currentUserId.userId,
  );

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:5000/cookbook/users/${id}`,
    );
    setUser([response.data]);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-details">
      {user.map((user) => {
        return (
          <article key={user._id}>
            <h2>{user.name}</h2>
            {currentUser ? (
              <UserFollow />
            ) : (
              <Link to="/login">
                <button type="button">Follow</button>
              </Link>
            )}
            <p>Member since: {user.regDate}</p>
            <UserCheckFollowing />
            <UserFollowList />
          </article>
        );
      })}
    </div>
  );
};

export default RecipeDetails;
