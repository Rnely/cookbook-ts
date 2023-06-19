import { Box, Button } from '@mui/material';
import { useState } from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';
import '../styles.css';
import { AuthBox, FormBox, BtnBox } from './style';

const MobileAuth = () => {
  const [swap, setSwap] = useState(false);

  return (
    <AuthBox>
      <BtnBox>
        <button onClick={() => setSwap(!swap)}>
          {swap ? 'Login' : 'Register'}
        </button>
      </BtnBox>
      <FormBox>{swap ? <RegisterForm /> : <LoginForm />}</FormBox>
    </AuthBox>
  );
};
export default MobileAuth;
