import styled from '@emotion/styled';
import {
  Divider,
  DividerProps,
  Menu,
  MenuItem,
  MenuProps,
} from '@mui/material';
import { Box } from '@mui/system';

export const ListBox = styled(Box)`
  flex-grow: 0;
`;

export const ListMenu = styled(Menu)<MenuProps>(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: 'white',
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: '#2196f3',
    borderWidth: 2,
  },
}));

export const ListMenuItem = styled(MenuItem)`
  &:hover {
    background-color: #b0d8f9;
    color: black;
  }
`;

export const StyledDivider = styled(Divider)<DividerProps>(({ theme }) => ({
  borderBottomColor: '#2196f3',
  borderBottomWidth: '2px',
  '&.MuiButtonBase-root-MuiMenuItem-root+.MuiDivider-root': {
    marginTop: '0px',
    marginBottom: '0px',
  },
}));

export const MarginBox = styled(Box)`
  margintop: '0px';
  marginbottom: '0px';
`;
