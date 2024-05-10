// AuthChecker.js

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//After login and logout the user action will be saved on local storage as well. If the user is logged in will it get access for admin dashboard. If he is loggout so he can't get access because of this parent file. Dahboard.js is children.
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