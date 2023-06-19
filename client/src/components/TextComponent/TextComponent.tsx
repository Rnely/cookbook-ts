import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

interface ITextProps {
  text: String;
  variant?: Variant;
  color?: string;
  fontWeight?: number;
  fontSize?: number;
  px?: number;
  py?: number;
  pl?: number;
  my?: number;
  display?: string;
}

const Text: React.FC<ITextProps> = ({
  text,
  variant,
  color,
  fontWeight,
  fontSize,
  px,
  py,
  pl,
  my,
  display,
}) => {
  return (
    <Typography
      variant={variant}
      sx={{ color, fontSize, fontWeight, px, py, pl, my, display }}
    >
      {text}
    </Typography>
  );
};

export const NavText: React.FC<ITextProps> = ({ text }) => {
  return (
    <Typography fontSize={24} sx={{ color: 'white', display: 'block', px: 2 }}>
      {text}
    </Typography>
  );
};

export default Text;
