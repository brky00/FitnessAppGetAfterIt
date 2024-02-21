import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import  { db, analytics } from '../firebase-config';


// Lage infoBox for å vise total antall  kategorier, produkter og brukere i dashboarden
const InfoBox = ({ title, value}) => {
  return (
    <div className='card text-center'>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{value}</p>
      </div>
    </div>
  )
}

const Dashboard = () => {
  const [userVisits, setUserVisits]  = useState(0);
  const [userContacts, setUserContacts] = useState(0);
  const [orders, setOrders] = useState(0);

  // hente antall brukere som har besøkt fra Firebase analytics
  

  return (
    <>

    <div className='container-fluid dashBoardContainer'>
        <div className='row dashBoardRow'>
            <div className='col-4 col-sm-4 col-lg-2 leftSideCol'>
              <div className='row'>
                <div className='col-12 dashBoardProductsCol'>
                  <Link className='dashBoardProducts'  to="/dashTable">
                     <div className='d-flex justify-content-center align-items-center productLinkInnerDiv'> <h2 className='me-3'>  Products </h2><div><i class="fa-solid fa-bag-shopping"></i></div></div>
                  </Link>

                </div>
                <div className='col-12 mt-5 '>
                  <Link className='dashBoardProducts'  to="#">
                     <div className='d-flex justify-content-center align-items-center productLinkInnerDiv'> <h2 className='me-3 '> contact </h2> <div><i class="fa-solid fa-address-book"></i></div></div> 
                  </Link>
                </div>

              </div>
            </div>

            <div className='col-8 col-sm-8 col-lg-10 SideCol '>
                <h1>Dashboard</h1>
                <div className='row'>
                    <div className='row'>
                      <div className='col-md-4 mb-4 '>
                        <InfoBox title='Users visited' />
                      </div>
                      <div className='col-md-4 mb-4'>
                        <InfoBox title='Users contacted'/>
                      </div>
                      <div className='col-md-4 mb-4'>
                        <InfoBox title='Total ordered products'/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard



