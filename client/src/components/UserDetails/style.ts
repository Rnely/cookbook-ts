import styled from '@emotion/styled';
import { Card, CardActions } from '@mui/material';
import { Box } from '@mui/system';

export const StyledCard = styled(Card)`
  padding: 10px 16px;
  margin: 20px 0;
  background-color: rgb(255, 255, 255);
  border: 1px solid #fafafa;
  text-align: center;
  box-shadow: 4px 8px 12px #878787;
  &:hover {
    transform: scale(1.01);
  }
`;

export const AuthorBox = styled(Box)`
  display: inline;
`;

export const StyledCardActions = styled(CardActions)`
  display: inline-flex;
  justify-content: center;
`;
