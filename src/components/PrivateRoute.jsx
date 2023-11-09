import React from 'react';
import { Navigate } from 'react-router-dom';
import { checkIfUserIsAuthenticated } from '../utils/authentication';

function PrivateRoute({ children }) {
  const isAuthenticated = checkIfUserIsAuthenticated();

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
}

export default PrivateRoute;
