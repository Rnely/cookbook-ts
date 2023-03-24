import {
  PersonAdd,
  PersonRemove,
  ArrowDownward,
  ArrowForward,
} from '@mui/icons-material';

interface ITextProps {
  text: string;
}

export const RecipeListButton: React.FC<ITextProps> = ({ text }) => {
  return (
    <button className="cssbuttons-io-button">
      {text}
      <div className="icon">
        <ArrowForward />
      </div>
    </button>
  );
};

export const UserFollowButton = () => {
  return (
    <button className="cssbuttons-io-button">
      Follow
      <div className="icon">
        <PersonAdd />
      </div>
    </button>
  );
};

export const UserUnfollowButton = () => {
  return (
    <button className="cssbuttons-io-button">
      Unollow
      <div className="icon">
        <PersonRemove />
      </div>
    </button>
  );
};

export const FollowListButton: React.FC<ITextProps> = ({ text }) => {
  return (
    <button className="cssbuttons-io-button">
      {text}
      <div className="icon">
        <ArrowDownward />
      </div>
    </button>
  );
};
