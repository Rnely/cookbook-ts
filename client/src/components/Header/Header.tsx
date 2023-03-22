import { AppBar } from '@mui/material';
import { Container } from '@mui/system';
import { StyledToolBar } from './style';
import Text from '../TextComponent/TextComponent';
import PageBox from './headerComps/PageBox';
import UserBox from './headerComps/UserBox';

const Header: React.FC = () => {
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <StyledToolBar>
            <Text text="CookBook" fontSize={28} px={2} />
            <PageBox />
            <UserBox />
          </StyledToolBar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
