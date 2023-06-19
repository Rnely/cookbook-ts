import { AppBar, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import { BtnBox, SpaceBox, StyledToolBar } from './style';
import Text from '../TextComponent/TextComponent';
import PageBox from './headerComps/PageBox';
import UserBox from './headerComps/UserBox';

const Header: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 700px)');

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <StyledToolBar>
          {isMobile ? (
            <SpaceBox>
              <Text text="CookBook" fontSize={28} px={2} />
              <BtnBox>
                <PageBox />
                <UserBox />
              </BtnBox>
            </SpaceBox>
          ) : (
            <>
              <Text text="CookBook" fontSize={28} px={2} />
              <PageBox />
              <UserBox />
            </>
          )}
        </StyledToolBar>
      </Container>
    </AppBar>
  );
};

export default Header;
