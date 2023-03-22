import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

export const StyledBox = styled(Box)`
  justify-content: center;
  flex-grow: 1;
  display: flex;
`;

export const PageButton = styled(Button)`
  margin-block: 8px;
  color: white;
  text-transform: none;
  &:hover {
    background-color: #2196f3;
  }
`;
