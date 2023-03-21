import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link, useParams } from 'react-router-dom';
import GetUsers from '../GetUsers';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  _id: string;
  name: string;
  following: string[];
}

const UserFollowList: React.FC = () => {
  const [followState, setFollowState] = useState(false);

  const { id } = useParams();

  const currentUser = useSelector(
    (state: RootState) => state.currentUser.userName,
  );

  const query = useSelector((state: RootState) => state.recipeFilter.query);
  const users: User[] = useSelector((state: RootState) => state.user.user);
  const following: string[] = useSelector(
    (state: RootState) => state.userFollowing.userFollowing,
  );

  GetUsers();

  //Getting array of followers
  const userRecipes = users.filter((user) => user._id === id);

  const userFollowing = users.filter((User) => {
    if (currentUser) {
      console.log('1');
      return following.some((id) => User.following.includes(id));
    } else {
      console.log('2');
      return following.every((id) => User.following.includes(id));
    }
  });

  const currentUserFollowing = userRecipes[0]?.following;

  const filteredUserFollowing = userFollowing.filter((user) =>
    currentUserFollowing?.includes(user._id),
  );

  const handleFollowState = () => {
    setFollowState(!followState);
  };

  return (
    <div className="user-list">
      <button onClick={handleFollowState}>
        {followState ? 'Hide' : 'Show'} Following
      </button>
      {followState
        ? filteredUserFollowing
            .filter((user) => {
              if (query === '') {
                return true;
              } else {
                return user.name.toLowerCase().includes(query.toLowerCase());
              }
            })
            .map((user) => {
              return (
                <div className="user-preview" key={user._id}>
                  <h2>{user.name}</h2>
                  <Link to={`/recipe/${user._id}`}>
                    <button>Cook this</button>
                  </Link>
                </div>
              );
            })
        : ''}
    </div>
  );
};

export default UserFollowList;
