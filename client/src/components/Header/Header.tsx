import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../redux/slices/recipeQuerySlice';
import { setUserName } from '../../redux/slices/userNameSlice';
import './style.css';
import { RootState } from '../../redux/store';
import { setUserId } from '../../redux/slices/userIdSlice';
import { setFollowing } from '../../redux/slices/followingSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const userName = useSelector(
    (state: RootState) => state.currentUser.userName,
  );
  const userId = useSelector((state: RootState) => state.currentUserId.userId);

  const handleClick = () => {
    dispatch(setUserName(''));
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
            <Link to="/">
              <button
                onClick={() => {
                  handleClick();
                }}
              >
                LogOut
              </button>
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
