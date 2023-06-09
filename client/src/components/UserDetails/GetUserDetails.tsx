import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import UserFollow from '../UserFollow';
import UserFollowList from '../UserFollowList';
import { setUserName } from '../../redux/slices/userNameSlice';
import { StyledCard, StyledCardActions } from './style';
import Text from '../TextComponent/TextComponent';
import { UserFollowButton } from '../StyledButtons';
import LoadingComponent from '../LoadingComponent';
import UserCollections from '../UserCollections';

interface User {
  _id: string;
  name: string;
  regDate: string;
}

const GetUserDetails: React.FC = () => {
  const [user, setUser] = useState<User[] | null>(null);
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: RootState) => state.currentUserId.userId,
  );

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:5000/cookbook/users/${id}`,
    );
    setUser([response.data]);
    dispatch(setUserName(response.data.name));
  };

  if (!user) {
    return <LoadingComponent />;
  }

  return (
    <>
      {user.map((user) => {
        return (
          <StyledCard key={user._id}>
            <Text text={user.name} variant="h5" fontWeight={600} />

            <p>Member since: {user.regDate}</p>
            {currentUser ? (
              <UserFollow />
            ) : (
              <StyledCardActions onClick={() => nav('/authentication')}>
                <UserFollowButton />
              </StyledCardActions>
            )}
            <UserFollowList />
            <UserCollections />
          </StyledCard>
        );
      })}
    </>
  );
};

export default GetUserDetails;
