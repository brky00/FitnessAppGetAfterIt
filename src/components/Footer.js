import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Ensure that your CSS rules are imported.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <span className="logo_name">Kakerike</span>
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
          {/* Convert anchor tags to Link components for internal navigation */}
          <ul className="box">
            <li className="link_name">Kundeservice</li>
            <li><Link to="/kontakt-oss">Kontakt oss</Link></li>
            <li><Link to="/bytte-retur">Bytte og retur</Link></li>
            <li><Link to="/kjop-vilkar">Kjøpsvilkår</Link></li>
            <li><Link to="/klikk-hent">Klikk og hent</Link></li>
          </ul>
          {/* ... other links ... */}
        </div>
        {/* ... rest of the footer content ... */}
      </div>
    </footer>
  );
};

export default Footer;
