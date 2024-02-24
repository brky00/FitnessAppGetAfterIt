import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { db } from '../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';

const InfoBox = ({ title, value }) => (
  <div className='card text-center'>
    <div className='card-body'>
      <h5 className='card-title'>{title}</h5>
      <p className='card-text'>{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [userVisits, setUserVisits] = useState(0);
  const [userContacts, setUserContacts] = useState(0); 
  const [orders, setOrders] = useState(0);
  const [emailList, setEmailList] = useState([]);





  const fetchContacts = async () => {
    const querySnapshot = await getDocs(collection(db, 'contacts'));
    const contactsArray = [];
    const emails = []; // Ny liste for å lagre e-postadresser
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      contactsArray.push({ id: doc.id, ...data });
      if (data.email) { // Sjekk om dokumentet inneholder en e-postadresse
        emails.push(data.email); // Legg til e-postadressen i listen
      }
    });
    setEmailList(emails); // Oppdater tilstanden med listen av e-postadresser
};

useEffect(() => {
  fetchContacts();
}, []);


  const searchFormsByEmail = async (email) => {
    const q = query(collection(db, 'contacts'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });
    setSearchResults(results);
  };


  return (
    <>
      <div className='container-fluid dashBoardContainer'>
        <div className='row dashBoardRow'>
          <div className='col-4 col-sm-4 col-lg-2 leftSideCol'>
            <div className='row'>
              <div className='col-12 dashBoardProductsCol'>
                <Link className='dashBoardProducts' to="/dashTable">
                  <div className='d-flex justify-content-center align-items-center productLinkInnerDiv'>
                    <h2 className='me-3'>Products</h2>
                    <div><i className="fa-solid fa-bag-shopping"></i></div>
                  </div>
                </Link>
              </div>
              <div className='col-12 mt-5'>
                <Link className='dashBoardProducts' to="#">
                  <div className='d-flex justify-content-center align-items-center productLinkInnerDiv'>
                    <h2 className='me-3'>Contact</h2>
                    <div><i className="fa-solid fa-address-book"></i></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className='col-8 col-sm-8 col-lg-10 SideCol'>
            <h1>Dashboard</h1>
            <div className='row'>
              <InfoBox title='Users visited' value={userVisits} />
              <InfoBox title='Users contacted' value={userContacts} />
              <InfoBox title='Total ordered products' value={orders} />
            </div>
            
          <div className="email-list">
            <h3>Email addresses that have submitted a form</h3>
            <ul>
              {emailList.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </div>

            <div>
              <form onSubmit={(e) => {
                e.preventDefault();
                searchFormsByEmail(searchQuery);
              }}>
                <input
                  type="email"
                  placeholder="Search Email"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">search</button>
              </form>

              {searchResults.length > 0 ? (
              <div>
                {searchResults.map((form) => (
                  <div key={form.id} className="searchResult">
                    <p>Email: {form.email}</p>
                    <p>Goal: {form.goals}</p>
                    <p>Activity level: {form.activity}</p>
                    <p>Experience: {form.experience}</p>
                    <p>Improve: {form.improve}</p>
                    <p>Spesification: {form.specification}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>Ingen resultater funnet</p>
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
