import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const id = localStorage.getItem('id');

  if (token) {
    return <Navigate to='/' />;
  }
  return children;
}

export default PublicRoute;
