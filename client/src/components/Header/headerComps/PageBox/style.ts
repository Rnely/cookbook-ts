import styled from '@emotion/styled';
import { Close, Menu } from '@mui/icons-material';
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

export const ColoredMenu = styled(Menu)`
  color: white;
`;

export const RespBox = styled(Box)`
  width: 100%;
  height: calc(100% - 76px);
  color: white;
  background-color: black;
  position: fixed;
  top: 76px;
  left: 0;
`;

export const RespMenuBox = styled(Box)`
  justify-content: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ColoredClose = styled(Close)`
  color: white;
`;
