import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, query, where, getDocs, updateDoc, doc,orderBy } from 'firebase/firestore';
import Swal from 'sweetalert2';
import './Usercontact.css';
import { useNavigate } from 'react-router-dom';
//Code fdor the page whick show the user contact form data.
const Usercontact = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchMade, setIsSearchMade] = useState(false);
  const [emailList, setEmailList] = useState([]);
  const [statusFilter, setStatusFilter] = useState('unread');
//Fetching all of user including old users who are the admin allready read from the firestore.
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
      console.log("notReadContacts",notReadContacts);

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

  //When the admin will change to read of form status will the code call this function.
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
    <div className='mb-5'>
      {statusFilter ==='unread' ?  <h3 style={{textAlign:"center"}} className='titlemail mt-5'>Unread Email addresses that have submitted a form</h3> :  <h3 style={{textAlign:"center"}} className='titlemail mt-5'>All Email addresses that have submitted a form</h3> }
             
      <div className="d-flex ms-5 align-items-center ">
        

          
        <div className=" orderBackButtonDiv">
          <button
            className="btn btn-primary orderBackButton"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>
        </div>

    </div>  
      <div className='d-flex justify-content-center mt-5 mb-4'>
        <button className='btn btn-info me-2' onClick={() => setStatusFilter('all')}>All Contact Forms</button>
        <button className='btn btn-warning' onClick={() => setStatusFilter('unread')}>Unread Emails</button>
      </div>
      {/* Here is the list of user contacts. And dynbamicly styling each rows based on if they are read or unread */}
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
            <input className='me-1'
              type="email"
              placeholder="Search Email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className='btn btn-primary' type="submit">Search</button>
          </div>
        </form>
      </div>
      <div>
        {searchResults.map((form) => (
          <div key={form.id} className="searchResult">
            
            <span className='d-flex'><p className='me-1 formProperties'>Email:</p> <p>{form.email}</p></span>
            <span className='d-flex'><p className='me-1 formProperties'>Goal:</p> <p>{form.goals}</p></span>
            <span className='d-flex'><p className='me-1 formProperties'>Activity level:</p> <p>{form.activity}</p></span>
            <span className='d-flex'><p className='me-1 formProperties'>Experience:</p> <p>{form.experience}</p></span>
            <span className='d-flex'><p className='me-1 formProperties'>Improve:</p> <p>{form.improve}</p></span>
            <span className='d-flex'><p className='me-1 formProperties'>Specification:</p> <p>{form.specification}</p></span>
            <span className='d-flex'><p className='me-1 formProperties'>Status:</p> <p>{form.status}</p></span>
          
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
