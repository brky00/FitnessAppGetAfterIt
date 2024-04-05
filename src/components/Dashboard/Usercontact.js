import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, query, where, getDocs, updateDoc, doc,orderBy } from 'firebase/firestore';
import Swal from 'sweetalert2';
import './Usercontact.css';

const Usercontact = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchMade, setIsSearchMade] = useState(false);
  const [emailList, setEmailList] = useState([]);
  const [statusFilter, setStatusFilter] = useState('unread');

  const fetchContacts = async (filter = 'all') => {
    let q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
    if (filter === 'unread') {
      q = query(collection(db, 'contacts'), where('status', '==', 'notRead'), orderBy('createdAt', 'desc'));
    }
    const querySnapshot = await getDocs(q);
    let contactsArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    
    if (filter === 'all') {
      // first notRead'
      const notReadContacts = contactsArray.filter(contact => contact.status === 'notRead');

      // after that geetting we 'read' 
      const readContacts = contactsArray.filter(contact => contact.status === 'read');

      // merged both lists/arrays here.
      contactsArray = [...notReadContacts, ...readContacts];
    }
  
    setEmailList(contactsArray);
  };
  

  useEffect(() => {
    fetchContacts(statusFilter);
  }, [statusFilter]);

  const searchFormsByEmail = async (email) => {
    setIsSearchMade(true);
    const q = query(collection(db, 'contacts'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setSearchResults(results);
    if (results.length === 0) {
      Swal.fire('No results found', `No contact form for the email: ${email}`, 'info');
    }
  };

  const updateStatusToRead = async (id) => {
    try {
      const contactRef = doc(db, 'contacts', id);
      await updateDoc(contactRef, { status: 'read' });
      Swal.fire('Updated!', 'The status has been updated to read.', 'success');
      setEmailList(emailList.map((contact) => contact.id === id ? { ...contact, status: 'read' } : contact));
      setSearchResults(searchResults.map((contact) => contact.id === id ? { ...contact, status: 'read' } : contact));
      fetchContacts(statusFilter);
    } catch (error) {
      Swal.fire('Error!', 'There was an issue updating the status.', 'error');
    }
  };

  emailList.map((contact, index) => (
    console.log("contact in user contact: ",contact)
  ));

  return (
    <div>
      {statusFilter ==='unread' ?  <h3 style={{textAlign:"center"}} className='titlemail mt-5'>Unread Email addresses that have submitted a form</h3> :  <h3 style={{textAlign:"center"}} className='titlemail mt-5'>All Email addresses that have submitted a form</h3> }
     
      <div className='d-flex justify-content-center mt-5 mb-4'>
        <button className='btn btn-info me-2' onClick={() => setStatusFilter('all')}>All Contact Forms</button>
        <button className='btn btn-warning' onClick={() => setStatusFilter('unread')}>Unread Emails</button>
      </div>
      <div className="email-list">
        <ul>
          {emailList.map((contact, index) => (
            <li style={(contact.status)==="notRead" ? {backgroundColor:'beige'}: {backgroundColor:'gray'}} key={index} onClick={() => searchFormsByEmail(contact.email)}>
               {(contact.status)==="notRead" ? <i class="fa-solid fa-envelope me-2"></i>: ""}
              {contact.email} - {contact.status}
             
            </li>
          ))}
        </ul>
      </div>
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
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
      <div>
        {searchResults.map((form) => (
          <div key={form.id} className="searchResult">
            <p>Email: {form.email}</p>
            <p>Goal: {form.goals}</p>
            <p>Activity level: {form.activity}</p>
            <p>Experience: {form.experience}</p>
            <p>Improve: {form.improve}</p>
            <p>Specification: {form.specification}</p>
            <p>Status: {form.status}</p>
            {form.status === 'notRead' && (
              <button className='btn btn-danger' onClick={() => updateStatusToRead(form.id)}>Mark as Read</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usercontact;
