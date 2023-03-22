import { NavText } from '../../../TextComponent/TextComponent';
import { StyledBox, PageButton } from './style';
import { useNavigate } from 'react-router-dom';

const PageBox = () => {
  const nav = useNavigate();

  return (
    <StyledBox>
      <PageButton onClick={() => nav('/')}>
        <NavText text="Home" />
      </PageButton>
      <PageButton onClick={() => nav('/create')}>
        <NavText text="New Recipe" />
      </PageButton>
    </StyledBox>
  );
};
export default PageBox;
