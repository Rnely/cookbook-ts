import RecipeFilter from '../components/RecipeFilter/RecipeFilter';
import RecipeList from '../components/RecipeList';

import './style.css';

const Home = () => {
  return (
    <>
      <RecipeFilter />
      <div className="center">
        <RecipeList />
      </div>
    </>
  );
};

export default Home;
