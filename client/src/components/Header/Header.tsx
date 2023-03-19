import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../redux/slices/recipeQuerySlice';
import './style.css';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <h1>Cook Book</h1>
      <div className="search">
        <label>Search: </label>
        <input
          placeholder="Enter Recipe Title"
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Recipe</Link>
      </div>
    </nav>
  );
};

export default Header;
