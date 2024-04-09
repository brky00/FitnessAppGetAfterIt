import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
        title: "Logging out...",
        text: "Please wait while we log you out.",
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });
    localStorage.setItem('isLoggedIn', 'false'); // logger out here with using false in local storage
    localStorage.removeItem('user'); // remove user
    navigate('/LoginAdmin'); // we send user to login back
    Swal.fire({
        icon: 'success',
        title: 'You are logged out!',
        showConfirmButton: false,
        timer: 1500,
    });
  };

  return (
    // <button onClick={handleLogout}>Logout</button>
   
    <div className='logOutDiv' onClick={handleLogout}> <i  class="fa-solid fa-right-from-bracket"></i> <span>Logg Out</span></div>
  );
};

export default Logout;
