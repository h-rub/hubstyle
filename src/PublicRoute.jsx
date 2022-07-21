import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const id = localStorage.getItem('token');

  if (id) {
    return <Navigate to='/' />;
  }
  return children;
}

export default PublicRoute;
