import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="mt-5 footer">
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <span className="logo_name">GetAfterIt</span>
          </div>
          <div className="media-icons">
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://www.tiktok.com"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Customer Service</li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
          <ul className="box">
            <li className="link_name">Company</li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
          <ul className="box">
            <li className="link_name">Follow Us</li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Legal</li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
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
          <li>GetAfterIt@GAI.com</li>
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
