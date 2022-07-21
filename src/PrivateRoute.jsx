import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const id = localStorage.getItem('token');

  if (!id) {
    return <Navigate to='/signin' />;
  }
  return children;
}

export default PrivateRoute;
