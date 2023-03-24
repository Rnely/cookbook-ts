import { PersonAdd, PersonRemove, ArrowDownward } from '@mui/icons-material';

interface ITextProps {
  text: string;
}

export const RecipeListButton = () => {
  return (
    <button className="cssbuttons-io-button">
      {' '}
      Cook This
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
          ></path>
        </svg>
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
