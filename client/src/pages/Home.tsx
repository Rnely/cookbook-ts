import RecipeFilter from '../components/RecipeFilter/RecipeFilter';
import RecipeList from '../components/RecipeList';

import './style.css';

const Home = () => {
  return (
    <div className="home">
      <RecipeFilter />
      <RecipeList />
    </div>
  );
};

export default Home;
