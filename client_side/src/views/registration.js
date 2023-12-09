
import React, { useState } from 'react';
import '../styles/register.css';
import { createUser, writeUserData,sendEmailVerification } from '../firebase/firebaseFunctions';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
    
         return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUser(email, password);

      if (userCredential?.user?.uid) {
        // Write user data to the database
        writeUserData(userCredential.user.uid, name, email,password);


        // Send email verification
        await sendEmailVerification(userCredential.user);

        alert('Registration successful. Please check your email for verification.');
      } else {
        alert('Failed to create user or missing user UID.');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <body className='login'>
        {/* Your registration form JSX */}
        <div className="wrapper" style={{marginLeft:'600px'}}>
          <img src="logo.png" alt="Logo" className="logo" />
          <h2>Registration</h2>
          <form onSubmit={handleRegistration}>
            {/* Your form fields */}
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {/* Your other form elements */}
            <div className="input-box button">
              <input type="submit" value="Register Now" />
            </div>
            <div className="text">
              <h3>
                Already have an account? <a href="#">Login now</a>
              </h3>
            </div>

          </form>
        </div>
      </body>
    </>
  );
}
export default Registration;