import React from 'react'
import { Link } from 'react-router-dom';
import './Dashboard.css'
/*Fortsett her Lui*/
const Dashboard = () => {
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
            <div className='col-8 col-sm-8 col-lg-10 SideCol d-flex justify-content-center'>
                <h1>Dashboard</h1>
            </div>

        </div>
        
    </div>
    </>
  )
}

export default Dashboard



