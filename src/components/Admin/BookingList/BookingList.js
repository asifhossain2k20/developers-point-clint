import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import NavBar from '../../Home/NavBar/NavBar';
import BookingListTable from '../BookingListTable/BookingListTable';
import SideBar from '../SideBar/SideBar';

const BookingList = () => {
    const[loggedInUser,setLoginUser]=useContext(UserContext);
    const[bookings,setBookings]=useState([])
    useEffect(()=>{
        fetch('https://calm-eyrie-20283.herokuapp.com/bookings?email='+loggedInUser.email,{
            method: 'GET',
            headers: {'Content-Type': 'application/json',
                        authorization:`bearer ${sessionStorage.getItem('token')}` },
        })
        .then(res=>res.json())
        .then(data=>{setBookings(data)})
    },[])
    console.log(bookings);
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                   <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <h1>BookingList</h1>
                    <h2>Your Total Booking Items {bookings.length}</h2>
                    <BookingListTable  bookings={bookings}></BookingListTable>
                </div>
            </div>
            
        </div>
    );
};

export default BookingList;