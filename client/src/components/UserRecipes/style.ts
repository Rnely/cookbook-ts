import styled from '@emotion/styled';
import { Button, Card, CardContent, Paper } from '@mui/material';
import { Box } from '@mui/system';

export const StyledCard = styled(Card)`
    width: 100%;
    min-height: 450px;
    max-height: 500px;
    background-color: rgb(255, 255, 255);
    border: 1px solid #fafafa;
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
  display: grid;
  grid-template-columns: repeat(4, 340px);
  grid-template-rows: auto;
  grid-auto-rows: auto;
  grid-gap: 10px;
  @media screen and (max-width: 1380px) {
    grid-template-columns: repeat(3, 340px);
  }

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 340px);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 340px;
  }
`;

export const SearchBox = styled(Box)``;
