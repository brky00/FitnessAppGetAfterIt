import React from 'react';
import './Merch.css';
import { Link } from "react-router-dom";
import hoodieImage from './images/hoodie.png';
import shortsImage from './images/shorts.png'
import jacketImage from './images/jakke.png';


const Merch = () => {
  return (
    <div className="merch-container">
      <h1>MERCH</h1>
      <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit">🔍</button>
      </div>
      <div className="stock-availability">
          <label>
              <input type="checkbox" name="in-stock" id="in-stock" />
              IN STOCK
          </label>
      </div>
      <div className="product-grid">
          <div className="product">
              <Link to='/merchinfo'> <img src={hoodieImage} alt="Gai Hoodie" />
              <p>Gai hoodie</p>
              <p>NOK 220</p></Link>
             
          </div>
          <div className="product">
              <img src={shortsImage} alt="Gai Shorts" />
              <p>Gai shorts</p>
              <p>NOK 220</p>
          </div>
          <div className="product">
              <img src={jacketImage} alt="Gai College Jacket" />
              <p>Gai college jacket</p>
              <p>NOK 220</p>
          </div>
      </div>
    </div>
  );
}

export default Merch;
