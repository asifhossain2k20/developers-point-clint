import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddServices from "./components/Admin/AddServices/AddServices";
import Admin from "./components/Admin/Admin/Admin";
import BookingList from "./components/Admin/BookingList/BookingList";
import DashBoard from "./components/Admin/DashBoard/DashBoard";
import Order from "./components/Admin/Order/Order";
import OrderList from "./components/Admin/OrderList/OrderList";
import OurServiceAdmin from "./components/Admin/OurServiceAdmin/OurServiceAdmin";
import Review from "./components/Admin/Review/Review";
import Blogs from "./components/Blogs/Blogs";
import Developers from "./components/Developer/Developers";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
      <Route path="/login">
            <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/developer">
          <Developers></Developers>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <PrivateRoute path="/ourServicesAdmin">
          <OurServiceAdmin></OurServiceAdmin>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <DashBoard></DashBoard>
        </PrivateRoute>
        <PrivateRoute path="/orderList">
          <OrderList></OrderList>
        </PrivateRoute>
        <PrivateRoute path="/addServices">
           <AddServices></AddServices>
        </PrivateRoute>
        <PrivateRoute path="/makeAAdmin">
           
        </PrivateRoute>
        
        <PrivateRoute path="/bookingList">
          <BookingList></BookingList>
        </PrivateRoute>
        <PrivateRoute path="/review">
          <Review></Review>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
