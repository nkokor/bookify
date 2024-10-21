import { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import '../../style/auth.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin); 
  };

  return (
    <div className='auth-form'>

      <p className='login-message'>Let's dive into the magical world of literature!</p>

      {isLogin ? (
        <LoginForm />
      ) : (
        <RegistrationForm />
      )}

    <div className='toggle-div'>
        <p className='p-button' onClick={toggleForm}>
          {isLogin ? "Don't have an account? Register now" : "Already have an account? Log in"}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
