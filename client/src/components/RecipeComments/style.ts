import { ThumbUp } from '@mui/icons-material';
import { Card, CardActions } from '@mui/material';
import { Box, style, styled } from '@mui/system';

export const StyledCard = styled(Card)`
  width: 700px;
  padding: 10px 16px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
    padding: 20px 0;
  }
  box-shadow: 4px 8px 12px #878787;
  &:hover {
    transform: scale(1.01);
  }
`;
export const ButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
export const CommentBox = styled(Box)`
  min-height: 80px;
  display: flex;
  flex-direction: column;
  border: 0.1em solid #282626;
  background-color: #e5e0e0;
  border-radius: 32px;
  padding-left: 20px;
  margin: 5px;
`;
export const CommentUser = styled(Box)`
  display: flex;
  flex-direction: row;
`;
export const CardAction = styled(CardActions)`
  padding: 0px;
  cursor: pointer;
`;
export const LikeBox = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const ColoredLike = styled(ThumbUp)`
  color: #1976d2;
`;
