import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="mt-5 footer">
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <span className="logo_name">GetAfterIt</span>
          </div>
          <div className="media-icons">
            <a href="https://www.instagram.com/getafterit_official"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.tiktok.com/@getafterit_official"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Customer Service</li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
          </ul>
          <ul className="box">
            <li className="link_name">Follow Us</li>
            <li><a href="https://www.instagram.com/getafterit_official/">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@getafterit_official">Tiktok</a></li>
          
          </ul>
          <ul className="box">
            <li className="link_name">Legal</li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="finish">
        <ul className="box">
          <li className="link_name" style={{ color: 'white' }}>Adresse:</li>
          <li>Get it St 558</li>
          <li>Norway</li>
        </ul>
        <ul className="box">
          <li className="link_name" style={{ color: 'white' }}>Email:</li>
          <li>getafterit_response@hotmail.com</li>
        </ul>
        <ul className="box">
          <li className="link_name" style={{ color: 'white' }}>Tlf:</li>
          <li>+4744422333</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GetAfterIt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;