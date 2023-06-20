import {
  PersonAdd,
  PersonRemove,
  ArrowDownward,
  ArrowForward,
  Add,
  Publish,
  ArrowBack,
} from '@mui/icons-material';

interface ITextProps {
  text: string;
}

export const ArrowForwardButton: React.FC<ITextProps> = ({ text }) => {
  return (
    <button className="cssbuttons-io-button">
      {text}
      <div className="icon">
        <ArrowForward />
      </div>
    </button>
  );
};

export const ArrowBackButton: React.FC<ITextProps> = ({ text }) => {
  return (
    <button className="cssbuttons-io-button">
      {text}
      <div className="icon">
        <ArrowBack />
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

export const ArrowDownButton: React.FC<ITextProps> = ({ text }) => {
  return (
    <button className="cssbuttons-io-button">
      {text}
      <div className="icon">
        <ArrowDownward />
      </div>
    </button>
  );
};

export const AddButton: React.FC<ITextProps> = ({ text }) => {
  return (
    <button type="button" className="cssbuttons-io-button">
      {text}
      <div className="icon">
        <Add />
      </div>
    </button>
  );
};

export const PublishButton: React.FC<ITextProps> = ({ text }) => {
  return (
    <button type="submit" className="cssbuttons-io-button">
      {text}
      <div className="icon">
        <Publish />
      </div>
    </button>
  );
};
