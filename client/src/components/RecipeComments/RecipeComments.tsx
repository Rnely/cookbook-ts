import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { RootState } from '../../redux/store';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import {
  ButtonBox,
  CardAction,
  CenteredCard,
  ColoredLike,
  CommentBox,
  CommentUser,
  LikeBox,
  StyledCard,
  TextBox,
} from './style';
import { CardActions, TextField } from '@mui/material';
import Text from '../TextComponent/TextComponent';
import { ArrowForwardButton } from '../StyledButtons';

interface Comments {
  commentId: String;
  userName: String;
  userId: String;
  comment: String;
  likes: number;
}

const RecipeComments = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comments[]>([]);
  const currentUserName = useSelector(
    (state: RootState) => state.currentUserName.userName,
  );
  const currentUserId = useSelector(
    (state: RootState) => state.currentUserId.userId,
  );
  const { id } = useParams();
  const nav = useNavigate();

  const getRecipeComments = async () => {
    const response = await axios.get(
      `http://localhost:5000/cookbook/recipes/${id}`,
    );
    setComments(response.data.comments);
  };

  useEffect(() => {
    getRecipeComments();
  }, []);

  const handleCommentSubmit = async () => {
    try {
      await axios.patch(
        `http://localhost:5000/cookbook/recipes/${id}/comments`,
        {
          userName: currentUserName,
          userId: currentUserId,
          comment: comment,
        },
      );
      toast.success(`Comment added`, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error: any) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    getRecipeComments();
  };

  const handleCommentLike = async (commentId: String, userId: String) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/cookbook/recipes/${id}/commentLikes`,
        {
          commentId,
          userId,
          currentUserId: currentUserId,
        },
      );
      const { message } = response.data;

      toast.success(message, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error: any) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    getRecipeComments();
  };

  return (
    <StyledCard>
      <Text text="Comments" variant="h5" fontWeight={600} pl={1} />
      <TextBox>
        <TextField
          id="standard-basic"
          label="Write a Comment"
          variant="standard"
          fullWidth
          onChange={(e) => setComment(e.target.value)}
        />
      </TextBox>
      <ButtonBox>
        <CardActions
          onClick={() =>
            currentUserId ? handleCommentSubmit() : nav('/authentication')
          }
        >
          <ArrowForwardButton text="Add comment" />
        </CardActions>
      </ButtonBox>
      {comments.map((comment, index) => {
        return (
          <CenteredCard key={index}>
            <CommentBox>
              <CommentUser>
                <CardAction onClick={() => nav(`/user/${comment.userId}`)}>
                  <Text text={comment.userName} fontWeight={600} />
                </CardAction>
                <Text text="&nbsp;commented:" />
              </CommentUser>
              <Text text={comment.comment} />
              <LikeBox>
                <CardAction
                  onClick={() =>
                    handleCommentLike(comment.commentId, comment.userId)
                  }
                >
                  <ColoredLike />
                </CardAction>
                <Text text="&nbsp;" />
                <Text text={`${comment.likes}`} variant="subtitle2" />
              </LikeBox>
            </CommentBox>
          </CenteredCard>
        );
      })}
    </StyledCard>
  );
};
export default RecipeComments;
