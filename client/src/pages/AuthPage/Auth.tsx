import AuthForms from '../../components/AuthForms';
import GetUserId from '../../components/GetUserId';
import './style.css';

const Auth = () => {
  GetUserId();
  return (
    <div>
      <AuthForms />
    </div>
  );
};

export default Auth;
