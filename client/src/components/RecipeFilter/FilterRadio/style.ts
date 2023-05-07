import { styled } from '@mui/material/styles';
import { FormControl, FormControlLabel, Radio } from '@mui/material';

export const RadioItem = styled(FormControlLabel)`
  width: 100%;
  margin: 0;
  padding: 4px 16px;
`;
export const FilterRadioBox = styled(FormControl)`
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  align-items: center;
`;
export const ColoredRadio = styled(Radio)`
  color: white;
`;