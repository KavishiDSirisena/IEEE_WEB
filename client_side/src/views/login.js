// Login.js
import React, { useState,useEffect } from 'react';
import '../styles/register.css';
import { loginUser } from '../firebase/firebaseFunctions';
import { useAuth } from '../firebase/AuthContext';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Log in user with email and password
      const { user, userData } = await loginUser(email, password);

      if (userData.status === 'pending') {
        setErrorMessage('User account is not yet activated.');
         // Reset input fields after displaying the error message
         setEmail('');
         setPassword('');
         return;
      }

      login(user); // Set the logged-in user in the context

      alert('Login successful');
      console.log('login successful');
       // Check user status and redirect accordingly
       if (userData.AdminStatus === 'notAnAdmin') {
        window.location.href = '/user/profile'; // Redirect to admin dashboard
      } else {
        window.location.href = '/admin/admindashboard'; // Redirect to user profile
      }
      // Optionally, you can redirect the user to another page after successful login
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    // Clear the error message after 5 seconds
    const timeoutId = setTimeout(() => {
      setErrorMessage('');
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [errorMessage]);

  return (
    <>
      <body className='login'>
        {/* Your login form JSX */}
        <div className="wrapper" style={{marginLeft:'600px'}}>
          <img src="logo.png" alt="Logo" className="logo"/>
          <h2 style={{marginRight:'600px'}}>Login</h2>

          {errorMessage && (
            <div style={{ background: 'red', color: '#fff', padding: '10px', textAlign: 'center',marginTop:'10px' }}>
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleLogin} style={{marginTop:'100px'}}>
            {/* Your form fields */}
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* Your other form elements */}
            <div className="input-box button">
              <input type="submit" value="Login" />
            </div>
            <div className="text">
              <h3>
                Don't have an account? <a href="#">Register now</a>
              </h3>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}

export default Login;
