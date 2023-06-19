import styled from '@emotion/styled';
import { Button, Card, CardActions } from '@mui/material';
import { Box } from '@mui/system';

export const StyledCard = styled(Card)`
  padding: 10px 16px;
  margin: 20px 0;
  margin-left: 300px;
  margin-right: 300px;
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

export const StyledCard2 = styled(Card)`
  width: 700px;
  padding: 10px 16px;
  margin: 20px 0;
  display: grid;
  grid-template-columns: 140px 140px 1fr;
  grid-template-rows: 50px 50px 350px 50px 2fr;
  grid-template-areas:
    'header header header'
    'time time diet'
    'image image image'
    'save rating  empty'
    'ing ing steps';
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
    padding: 20px 0;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50px 50px 250px 50px 2fr;
    grid-template-areas:
      'header header'
      'time diet'
      'image image'
      'rating save'
      'ing steps';
  }
  box-shadow: 4px 8px 12px #878787;
  &:hover {
    transform: scale(1.01);
  }
`;
export const HeaderBox = styled(Box)`
  grid-area: header;
  padding-left: 10px;
`;
export const TimeBox = styled(Box)`
  padding-left: 10px;
  grid-area: time;
`;
export const DietBox = styled(Box)`
  grid-area: diet;
  padding-left: 10px;
`;
export const ImageBox = styled(Box)`
  grid-area: image;
  display: flex;
  justify-content: center;
`;
export const RatingBox = styled(Box)`
  grid-area: rating;
  padding-left: 10px;
`;
export const SaveBox = styled(Box)`
  grid-area: save;
`;
export const IngBox = styled(Box)`
  grid-area: ing;
  border-right: 1px solid #e0e0e0;
  padding: 10px;
`;
export const StepsBox = styled(Box)`
  grid-area: steps;
  border-left: 1px solid #e0e0e0;
  padding: 10px;
`;
