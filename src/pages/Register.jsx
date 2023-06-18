import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
