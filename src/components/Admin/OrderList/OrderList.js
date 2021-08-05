import React from 'react';
import OrderListAdmin from '../OrderListAdmin/OrderListAdmin';
import SideBar from '../SideBar/SideBar';

const OrderList = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                   <OrderListAdmin></OrderListAdmin>
                </div>
            </div>
        </div>
    );
};

export default OrderList;