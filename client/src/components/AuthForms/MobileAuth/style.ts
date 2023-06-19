import { Box, styled } from '@mui/material';

export const AuthBox = styled(Box)`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const FormBox = styled(Box)`
  width: 100%;
`;

export const BtnBox = styled(Box)`
  margin-bottom: 40px;
`;
