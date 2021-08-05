import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Order from '../Order/Order';
import SideBar from '../SideBar/SideBar';

const DashBoard = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                       <h1 className="text-center text-primary">Welcome {loggedInUser.name}</h1>
                       <Order></Order>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;