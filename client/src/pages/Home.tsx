import GetUserId from '../components/GetUserId';
import RecipeList from '../components/RecipeList';
import './style.css';

const Home = () => {
  GetUserId();
  return (
    <div className="home">
      <RecipeList />
    </div>
  );
};

export default Home;
