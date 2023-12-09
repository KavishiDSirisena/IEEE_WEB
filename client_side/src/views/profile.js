// UserProfile.js
import React, { useEffect, useState } from 'react';
import {  getUserData, logoutUser } from '../firebase/firebaseFunctions';
import { useAuth } from '../firebase/AuthContext';
import Login from './login';

function UserProfile() {
  const { currentUser, logout } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Check if there is a logged-in user
        if (currentUser) {
          const userId = currentUser.uid;
          const userData = await getUserData(userId);
          setUserDetails(userData);
        } else {
          console.error('No user is currently logged in.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      // Redirect to the login page after logout
      window.location.href = '/user/login';
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading user profile...</p>
      ) : userDetails ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {userDetails.username}</p>
          <p>Email: {userDetails.email}</p>
          <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
          {/* Add other user details as needed */}
        </div>
      ) : (
         <Login/>
      )}
    </div>
  );
}

export default UserProfile;
