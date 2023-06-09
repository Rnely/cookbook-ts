import { useState } from 'react';
import Text from '../TextComponent/TextComponent';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './styles.css';
import { useMediaQuery } from '@mui/material';
import MobileAuth from './MobileAuth/MobileAuth';

const AuthForms = () => {
  const [swapPanel, setSwapPanel] = useState(false);

  const isMobile = useMediaQuery('(max-width: 700px)');
  return (
    <>
      {isMobile ? (
        <div className="sigin">
          <MobileAuth />
        </div>
      ) : (
        <div className="sigin">
          <div
            className={['container', swapPanel ? 'right-panel-active' : null]
              .filter(Boolean)
              .join(' ')}
            id="container"
          >
            <div className="form-container sign-up-container">
              <RegisterForm />
            </div>
            <div className="form-container sign-in-container">
              <LoginForm />
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSwapPanel(false);
                    }}
                    className="ghost"
                    id="signIn"
                  >
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSwapPanel(true);
                    }}
                    className="ghost"
                    id="signUp"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthForms;
