import { useState } from 'react';
import '../../style/auth.css';

const LoginForm = () => {
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

      <div className='forgot-pass-div'>
        <p className='p-button'>Forgot password?</p>
      </div>
      
      <button type="submit">Log In</button>

    </form>
  );
};

export default LoginForm;
