import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface User {
  _id: string;
  name: string;
  following: string[];
}

const UserCheckFollowing = () => {
  const currentUser = useSelector(
    (state: RootState) => state.currentUserId.userId,
  );
  const users: User[] = useSelector((state: RootState) => state.user.user);
  const following: string[] = useSelector(
    (state: RootState) => state.following.following,
  );

  //Getting array of followers
  const userRecipes = users.filter((user) => user._id === currentUser);

  const userFollowing = users.filter((User) => {
    return following.every((id) => User.following.includes(id));
  });

  const currentUserFollowing = userRecipes[0]?.following;

  const filteredUserFollowing = userFollowing.filter((user) =>
    currentUserFollowing?.includes(user._id),
  );

  return (
    <button onClick={() => console.log(filteredUserFollowing)}>
      cliock me
    </button>
  );
};
export default UserCheckFollowing;
