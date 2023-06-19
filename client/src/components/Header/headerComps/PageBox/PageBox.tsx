import { useMediaQuery } from '@mui/material';
import { NavText } from '../../../TextComponent/TextComponent';
import {
  StyledBox,
  PageButton,
  ColoredMenu,
  RespBox,
  RespMenuBox,
  ColoredClose,
} from './style';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PageBox = () => {
  const nav = useNavigate();
  const isMobile = useMediaQuery('(max-width: 700px)');

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, [isMobile]);

  return (
    <>
      {isMobile ? (
        <>
          <PageButton onClick={() => setMenu(!menu)}>
            {menu ? <ColoredClose /> : <ColoredMenu />}
          </PageButton>
          {menu ? (
            <RespBox>
              <RespMenuBox>
                <PageButton
                  onClick={() => {
                    nav('/');
                    setMenu(!menu);
                  }}
                >
                  <NavText text="Home" />
                </PageButton>
                <PageButton
                  onClick={() => {
                    nav('/create');
                    setMenu(!menu);
                  }}
                >
                  <NavText text="New Recipe" />
                </PageButton>
              </RespMenuBox>
            </RespBox>
          ) : (
            ''
          )}
        </>
      ) : (
        <StyledBox>
          <PageButton onClick={() => nav('/')}>
            <NavText text="Home" />
          </PageButton>
          <PageButton onClick={() => nav('/create')}>
            <NavText text="New Recipe" />
          </PageButton>
        </StyledBox>
      )}
    </>
  );
};
export default PageBox;
