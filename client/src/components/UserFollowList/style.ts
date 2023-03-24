import styled from '@emotion/styled';
import { Menu, MenuItem } from '@mui/material';
import { Box } from '@mui/system';

export const ListBox = styled(Box)`
  flex-grow: 0;
`;

export const ListMenu = styled(Menu)`
  margin-top: 70px;
`;

export const ListMenuItem = styled(MenuItem)`
  &:hover {
    background-color: #2196f3;
    color: white;
  }
`;
