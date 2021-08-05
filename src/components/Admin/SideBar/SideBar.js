import React, { useContext } from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";
import './SideBar.css'
import { UserContext } from '../../../App';

const SideBar = () => {

    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    console.log(loggedInUser.email);

  return (
    <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
    <ul className="list-unstyled">
        <li>
    <Link to="/home" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Home</span>
            </Link>
            </li>
    {
        loggedInUser.email=== 'asif.hossain2k20@gmail.com'?<div>
              <li>
            <Link to="/orderList" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Order List</span>
            </Link>
        </li>
        <li>
            <Link to="/AddServices" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
            </Link>
        </li>
        <li>
            <Link to="/ourServicesAdmin" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Our Services</span>
            </Link>
        </li>
        

        <li>
            <Link to="/dashboard" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Your Order</span> 
            </Link>
        </li>
        <li>
            <Link to="/bookingList" className="text-white">
                <FontAwesomeIcon icon={faCalendar} /> <span>BookingList</span> 
            </Link>
        </li>
        <li>
            <Link to="/review" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Reviews</span>
            </Link>
        </li>




        <li>
            <Link to="/makeAAdmin" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Make A Admin</span>
            </Link>
        </li>



        

        
        </div>: <div>
        <li>
            <Link to="/dashboard" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Your Order</span> 
            </Link>
        </li>
        <li>
            <Link to="/bookingList" className="text-white">
                <FontAwesomeIcon icon={faCalendar} /> <span>BookingList</span> 
            </Link>
        </li>
        <li>
            <Link to="/review" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Reviews</span>
            </Link>
        </li>
        </div>
        
    }

    </ul>
   
    <div>
        <Link onClick={()=>setLoggedInUser({})} to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
    </div>
</div>
    );
};

export default SideBar;