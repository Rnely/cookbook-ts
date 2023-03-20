import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../redux/slices/recipeQuerySlice';
import { setUser } from '../../redux/slices/userSlice';
import './style.css';
import { RootState } from '../../redux/store';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const userName = useSelector((state: RootState) => state.currentUser.user);
  const userId = useSelector((state: RootState) => state.currentUserId.userId);

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
        {userName ? (
          <div>
            <Link to={`/user/${userId}`}>{userName}</Link>
            <Link
              to="/"
              onClick={() => {
                dispatch(setUser(''));
              }}
            >
              Logout
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/auth">Auth</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
