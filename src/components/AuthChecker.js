// AuthChecker.js

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthChecker = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate("/LoginAdmin");
    }
  }, []);

  return children; 
};

export default AuthChecker;