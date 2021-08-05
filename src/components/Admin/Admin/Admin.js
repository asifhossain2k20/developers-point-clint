import React from 'react';
import Order from '../Order/Order';
import OrderListAdmin from '../OrderListAdmin/OrderListAdmin';
import SideBar from '../SideBar/SideBar';

const Admin = () => {
    return (
        <div>
            <div className="container-fluid row">
               
                <div className="col-md-3">
                        <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                <h1 className="text-center">Welcome! Our Admin Asif!!!</h1>
                        <OrderListAdmin></OrderListAdmin>
                </div>
            </div>
        </div>
    );
};

export default Admin;