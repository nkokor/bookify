import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useUser } from '../../context/UserContext';

const LoginForm = () => {
  const { login } = useAuth(); 
  const { setUser } = useUser(); 
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);

    login(); 
    setUser({ role: 'client', isLoggedIn: true }); 

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='auth-input-div'>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className='auth-input-div'>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <p className='p-button' id="forgot-pass-msg">Forgot Password?</p>
      </div>
      
      {/*<button type="submit">Log In</button>*/}
      <button onClick={() => {
        login();
      }}>Log in</button>

    </form>
  );
};

export default LoginForm;
