import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../redux/slices/recipeQuerySlice';
import './style.css';
import { RootState } from '../../redux/store';
import { setUserId } from '../../redux/slices/userIdSlice';
import { setFollowing } from '../../redux/slices/followingSlice';
import { setCurrentUserName } from '../../redux/slices/currentUserSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const userName = useSelector(
    (state: RootState) => state.currentUserName.userName,
  );
  const userId = useSelector((state: RootState) => state.currentUserId.userId);

  const handleClick = () => {
    dispatch(setCurrentUserName(''));
    dispatch(setUserId(''));
    dispatch(setFollowing([]));
  };

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
                handleClick();
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
