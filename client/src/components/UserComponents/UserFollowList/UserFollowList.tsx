import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useGetUsers } from '../useGetUsers';
import { setUserName } from '../../../redux/slices/userNameSlice';
import {
  MarginBox,
  ListBox,
  ListMenu,
  ListMenuItem,
  StyledDivider,
} from './style';
import { Box } from '@mui/system';
import { ArrowDownButton } from '../../StyledButtons/StyledButtons';
import { StyledCardActions } from '../UserDetails/style';
import Text from '../../TextComponent';

interface User {
  _id: string;
  name: string;
  following: string[];
}

const UserFollowList: React.FC = () => {
  const [followState, setFollowState] = useState(false);
  const [anchorElList, setAnchorElList] = useState<null | HTMLElement>(null);

  const [followingArray, setFollowingArray] = useState<User[]>([]);
  const users: User[] = useSelector((state: RootState) => state.user.user);
  useGetUsers();

  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    const getFollowingArray = async (): Promise<User[]> => {
      const userRecipes: User[] = users.filter((user: User) => user._id === id);
      const currentUserFollowing: string[] | undefined =
        userRecipes[0]?.following;

      const followingSet: Set<string> = new Set(currentUserFollowing);

      const userFollowing: User[] = users.reduce((acc: User[], user: User) => {
        if (followingSet.has(user._id) && user._id !== id) {
          acc.push(user);
        }
        return acc;
      }, []);
      setFollowingArray(userFollowing);
      return userFollowing;
    };

    getFollowingArray();
  }, [followState]);

  const handleFollowState = (e: React.MouseEvent<HTMLElement>) => {
    setFollowState(!followState);
    setAnchorElList(e.currentTarget);
  };

  return (
    <ListBox>
      <StyledCardActions onClick={handleFollowState}>
        <ArrowDownButton
          text={followState ? 'Hide Following' : 'Show Following'}
        />
      </StyledCardActions>
      <ListMenu
        anchorEl={anchorElList}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElList)}
        onClose={() => {
          setAnchorElList(null);
          setFollowState(!followState);
        }}
      >
        {followingArray.length === 1 ? (
          <Text
            text={'Following ' + followingArray.length + ' user'}
            px={2}
            fontWeight={550}
          />
        ) : (
          <Text
            text={'Following ' + followingArray.length + ' users'}
            px={2}
            fontWeight={550}
          />
        )}
        <StyledDivider />

        {followState ? (
          <Box>
            {followingArray.map((user, index) => {
              return (
                <div key={index}>
                  <ListMenuItem
                    onClick={() => {
                      setAnchorElList(null);
                      setFollowState(!followState);
                      dispatch(setUserName(user.name));
                      nav(`/user/${user._id}`);
                    }}
                    key={user._id}
                  >
                    <Text text={user.name} px={3} />
                  </ListMenuItem>
                  <MarginBox>
                    <StyledDivider />
                  </MarginBox>
                </div>
              );
            })}
          </Box>
        ) : (
          ''
        )}
      </ListMenu>
    </ListBox>
  );
};

export default UserFollowList;
