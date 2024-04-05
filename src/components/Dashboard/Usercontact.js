import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Usercontact.css';
import { db } from '../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';

const  Usercontact = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
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
      <div>
        <h3 className='titlemail'>Email addresses that have submitted a form</h3>
        <div className="email-list">
            <ul>
              {emailList.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className='email-search'>

              
            <form className='email-search-form' onSubmit={(e) => {
                e.preventDefault();
                searchFormsByEmail(searchQuery);
              }}>
                <div>
                <input
                  type="email"
                  placeholder="Search Email"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">search</button>
                </div>
              </form>


            </div>

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
              <p className='ingenresultat'>No results found</p>
            )}
            </div>
      </div>
    );
  };
  
  export default Usercontact;