import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useGetUsers } from '../useGetUsers';

interface User {
  _id: string;
  name: string;
  following: string[];
}

const UserFollowList: React.FC = () => {
  const [followState, setFollowState] = useState(false);
  const [followingArray, setFollowingArray] = useState<User[]>([]);
  const query = useSelector((state: RootState) => state.recipeFilter.query);
  const users: User[] = useSelector((state: RootState) => state.user.user);
  useGetUsers();
  const { id } = useParams();

  useEffect(() => {
    const getFollowingArray = async (): Promise<User[]> => {
      const userRecipes: User[] = users.filter((user: User) => user._id === id);
      const currentUserFollowing: string[] | undefined =
        userRecipes[0]?.following;

      const followingSet: Set<string> = new Set(currentUserFollowing);

      const userFollowing: User[] = users.reduce((acc: User[], user: User) => {
        if (followingSet.has(user._id) && user._id !== id) {
          acc.push(user);
        }
        return acc;
      }, []);
      setFollowingArray(userFollowing);
      return userFollowing;
    };

    getFollowingArray();
  }, [followingArray]);

  const handleFollowState = () => {
    setFollowState(!followState);
  };

  return (
    <div className="user-list">
      <p>Following {followingArray.length} users</p>
      <button onClick={handleFollowState}>
        {followState ? 'Hide' : 'Show'} Following
      </button>
      {followState
        ? followingArray
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
                  <Link to={`/user/${user._id}`}>
                    <h2>{user.name}</h2>
                  </Link>
                </div>
              );
            })
        : ''}
    </div>
  );
};

export default UserFollowList;
