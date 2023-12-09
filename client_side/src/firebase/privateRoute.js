// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';

const PrivateRoute = ({ element, ...props }) => {
  const { currentUser } = useAuth(); // Use your authentication context here

  return currentUser ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/user/login" replace />
  );
};

export default PrivateRoute;
