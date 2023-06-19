import GetUserDetails from '../components/UserDetails';
import UserRecipes from '../components/UserRecipes';
import { useGetUsers } from '../components/useGetUsers';

const UserDetails = () => {
  useGetUsers();
  return (
    <div>
      <div className="center">
        <GetUserDetails />
        <UserRecipes />
      </div>
    </div>
  );
};

export default UserDetails;
