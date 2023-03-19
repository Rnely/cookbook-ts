import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../redux/slices/recipeQuerySlice';
import './style.css';
import { RootState } from '../../redux/store';

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.currentUser.user);

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
        <Link to="/auth">Auth</Link>
        {user ? <Link to="/user">{user}</Link> : <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
};

export default Header;
