import { Box, CardActions, styled } from '@mui/material';

export const FilterRatingBox = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px 16px;
`;
export const RowBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const StyledCardActions = styled(CardActions)`
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
