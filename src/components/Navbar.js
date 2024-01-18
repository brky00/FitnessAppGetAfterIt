import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "./images/lionGetAfterIt.png";

const Navbar = () => {
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
            <a href="#profile">
              <i className="fa-solid fa-user adminLogo"></i>
            </a>
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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/#home">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    CONTACT
                  </a>
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

              <div className="shoppingDiv">
                <Link className="shopping1" to="/shopping">
                  <i class="fa-solid fa-cart-shopping shopping"></i>
                </Link>
              </div>
            </div>
            <div className="shoppingDiv2">
              <Link className="shopping2" to="/shopping">
                <i class="fa-solid fa-cart-shopping shopping"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
