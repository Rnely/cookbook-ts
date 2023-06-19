import styled from '@emotion/styled';
import { Button, Card, CardActions, CardContent, Paper } from '@mui/material';
import { Box } from '@mui/system';

export const StyledCard = styled(Card)`
    background-color: rgb(255, 255, 255);
    border: 1px solid #fafafa;
    float: left;
    &:hover {
        box-shadow: 4px 8px 12px #878787;
        transform: scale(1.03);
      }
  }
`;

export const StyledCardContent = styled(CardContent)``;

export const StyledButton = styled(Button)`
  color: black;
  &:hover {
    background-color: #e8e8e8;
  }
`;

export const TextBox = styled(Box)`
  margin-bottom: 15px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CardBox = styled(Box)`
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(4, 340px);
  grid-template-rows: 500px;
  grid-auto-rows: 500px;
  grid-gap: 10px;
  @media screen and (max-width: 1380px) {
    grid-template-columns: repeat(3, 340px);
    grid-template-rows: 500px;
    grid-auto-rows: 500px;
  }

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 340px);
    grid-template-rows: 500px;
    grid-auto-rows: 500px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 340px;
    grid-template-rows: 500px;
    grid-auto-rows: 500px;
  }
`;

export const SearchBox = styled(Box)``;

export const StyledCardActions = styled(CardActions)`
  display: inline-flex;
  justify-content: center;
  padding: 0px;
  margin: 0 8px;
  margin-bottom: 8px;
`;
