import LoginForm from '../components/AuthForms/LoginForm';
import GetUserId from '../components/GetUserId';

const Login = () => {
  GetUserId();
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
