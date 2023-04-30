import RecipeFilter from '../components/RecipeFilter/RecipeFilter';
import RecipeList from '../components/RecipeList';

import './style.css';

const Home = () => {
  return (
    <div className="home">
      <RecipeFilter />
      <div className='homeCenter'>
        <div className='homeContent'>
          <RecipeList />
        </div> 
      </div>
    </div>
  );
};

export default Home;
