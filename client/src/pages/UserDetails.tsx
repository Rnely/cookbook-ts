import GetUserDetails from '../components/UserDetails';
import UserRecipes from '../components/UserRecipes';

const UserDetails = () => {
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
