import RecipeFilter from '../components/RecipeComponent/RecipeFilter';
import RecipeList from '../components/RecipeComponent/RecipeList';

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
