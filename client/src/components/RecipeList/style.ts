import styled from '@emotion/styled';
import { Button, Card, CardActions, CardContent, Paper } from '@mui/material';
import { Box } from '@mui/system';

export const StyledCard = styled(Card)`
    width: 330px;
    padding: 10px 16px;
    margin: 20px 0;
    background-color: rgb(255, 255, 255);
    border: 1px solid #fafafa;
    float: left;
    margin-left: 30px;
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SearchBox = styled(Box)``;

export const StyledCardActions = styled(CardActions)`
  display: inline-flex;
  justify-content: center;
  padding: 0px;
  margin: 0 8px;
  margin-bottom: 8px;
`;
