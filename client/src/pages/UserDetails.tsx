import GetUserDetails from '../components/UserDetails';
import UserRecipes from '../components/UserRecipes';

const UserDetails = () => {
  return (
    <div>
      <GetUserDetails />
      <div className="home">
        <UserRecipes />
      </div>
    </div>
  );
};

export default UserDetails;
