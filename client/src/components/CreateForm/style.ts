import styled from '@emotion/styled';
import {
  Card,
  CardActions,
  FormControl,
  FormControlLabel,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import { MuiFileInput } from 'mui-file-input';

export const CreateCard = styled(Card)`
  max-width: 700px;
  margin: 80px auto;
  text-align: center;
`;

export const CreateTextField = styled(TextField)`
  width: 90%;
  padding: 6px 10px;
  margin: 10px auto;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border: none;
`;

export const StyledCardActions = styled(CardActions)`
  display: inline-flex;
  margin: auto auto;
`;

export const IngBox = styled(Box)`
  display: flex;
`;

export const IngListBox = styled(Box)`
  overflow: hidden;
  padding: 0 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CreateIngTextField = styled(TextField)`
  width: 70%;
  padding: 6px 10px;
  margin: 10px 0;
  margin-left: 20px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border: none;
`;

export const CreateRowBox = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

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
  width: 200px;
`;

export const CreateFormBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const CreateFileInput = styled(MuiFileInput)`
  width: 90%;
  padding: 6px 10px;
  margin: 10px auto;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border: none;
`;
export const StepBox = styled(Box)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;
  overflow: auto;
  max-height: 200px;
`;
