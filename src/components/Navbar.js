import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImage from "./images/lionGetAfterIt.png";
import Logout from "./Logout";




const Navbar = ({cartItems,handleTotalQuantityOfProduct}) => {
  const [login, setLogin]=useState(false);
  const navigate = useNavigate();
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  useEffect(() => {
    if (totalItems) {
      handleTotalQuantityOfProduct({ totalItems }); 
    }
  }, [totalItems]);

  const handleAdminClick = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn==='true') {
      navigate('/dashboard');
    } else {
      navigate('/LoginAdmin');
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setLogin(true);
      console.log("setlogin true");
    }
    else{
      setLogin(false);
      console.log("setlogin false");
    }
  }, [navigate]);

  return (
    <>
      {/* Upper Navbar */}
      <div className="NavbarBoth">
        <nav className="navbar navbar-expand-lg navbar-upper">
          <div className="container-fluid navbar-content">
            <a className="navbar-brand" href="#home">
              <img src={logoImage} alt="Logo" className="navbar-logo" />
            </a>
            <span className="getAfterItTekst mx-auto">Get After It</span>
            <div className="loggInAndOut d-flex flex-column justify-content-center">
           <div> <i className="fa-solid fa-user adminLogo d-flex justify-content-center mb-2" onClick={handleAdminClick}></i></div>
            {login && (
              <div>
                <Logout />
              </div>
            )}
            </div>
          
          </div>
        </nav>

        {/* Second Navbar */}
        <nav className="navbar navbar-expand-lg navbar-lower">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavDropdown"
            >
              {/*orginal org orgi*/}

              <div class="row">
                <div class="col-md-11 col-lg-11">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        CONTACT
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/merch">
                        MERCH
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#instagram">
                        INSTAGRAM
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#packages">
                        PACKAGES
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#about">
                        ABOUT US
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-1 col-lg-1 d-flex align-items-center ">
                  <div className="shoppingDiv">
                    <Link className="shopping1" to="/shopping">
                      <div className="d-flex align-items-center justify-content-center">
                        <i class="fa-solid fa-cart-shopping shopping"></i>
                        <span className="cart-length ms-1 d-flex align-items-center">
                          {totalItems === 0 ? "" : totalItems}
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="shoppingDiv2">
              <Link className="shopping2" to="/shopping">
                <div className="d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-cart-shopping shopping"></i>
                  <span className="cart-length ms-1 d-flex align-items-center">
                    {totalItems === 0 ? "" : totalItems}
                  </span>
                </div>
              </Link>
            </div>

          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
