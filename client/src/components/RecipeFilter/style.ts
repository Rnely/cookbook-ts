import { styled } from '@mui/material/styles';
import { Box, Card } from '@mui/material';

export const FilterButtonBox = styled(Box)`
  position: fixed;
  top: 100px;
`;

export const FilterCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.only('xs')]: {
    width: '100%',
    left: '0',
    height: `calc(100% - 93px)`,
    position: 'fixed',
    top: 93,
  },
  [theme.breakpoints.only('sm')]: {
    width: 400,
  },
  [theme.breakpoints.only('md')]: {
    width: 400,
  },
  [theme.breakpoints.only('lg')]: {
    width: 400,
  },
  [theme.breakpoints.only('xl')]: {
    width: 400,
  },
  color: 'white',
  position: 'fixed',
  top: 100,
  left: 10,
  height: '80%',
  backgroundColor: 'rgba(48, 47, 47, 0.8)',
  zIndex: 1,
}));

export const FilterTopBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
`;
export const FilterCloseBox = styled(Box)`
  position: absolute;
  right: 1em;
`;