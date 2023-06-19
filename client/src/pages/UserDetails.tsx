import GetUserDetails from '../components/UserComponents/UserDetails';
import UserRecipes from '../components/UserComponents/UserRecipes';
import { useGetUsers } from '../components/UserComponents/useGetUsers';

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
