import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentUserName } from '../../../../redux/slices/currentUserSlice';
import { setFollowing } from '../../../../redux/slices/followingSlice';
import { setUserId } from '../../../../redux/slices/userIdSlice';
import { RootState } from '../../../../redux/store';
import {
  Login as LoginIcon,
  Logout as LogoutIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';
import Text from '../../../TextComponent/TextComponent';
import { StyledBox, StyledButton } from './style';
import { setUserName } from '../../../../redux/slices/userNameSlice';

const UserBox = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const userId = useSelector((state: RootState) => state.currentUserId.userId);
  const currentUserName = useSelector(
    (state: RootState) => state.currentUserName.userName,
  );

  const handleClick = () => {
    dispatch(setCurrentUserName(''));
    dispatch(setUserId(''));
    dispatch(setFollowing([]));
    nav('/');
  };

  return (
    <div>
      {currentUserName ? (
        <StyledBox>
          <StyledButton
            title="Profile"
            onClick={() => {
              nav(`/user/${userId}`);
              dispatch(setUserName(currentUserName));
            }}
          >
            <AccountCircleIcon />
            <Text text={currentUserName} px={0.5} />
          </StyledButton>
          <StyledButton
            title="Logout"
            onClick={() => {
              handleClick();
            }}
          >
            <LogoutIcon />
          </StyledButton>
        </StyledBox>
      ) : (
        <StyledBox>
          <StyledButton title="Login" onClick={() => nav('/authentication')}>
            <LoginIcon />
          </StyledButton>
        </StyledBox>
      )}
    </div>
  );
};
export default UserBox;
