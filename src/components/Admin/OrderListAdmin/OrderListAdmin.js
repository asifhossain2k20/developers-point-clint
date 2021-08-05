import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const OrderListAdmin = () => {
    const [orderListData, setOrderListData] = useState([]);
    useEffect(()=>{
        fetch('https://calm-eyrie-20283.herokuapp.com/allOrders')
        .then(res=>res.json())
        .then(data=>{
            setOrderListData(data)
        })
    },[])


    const updateProduct=id=> {
       const value="Done"
       console.log(id);
        const product = {value};

        fetch(`https://calm-eyrie-20283.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                  console.log("update Done");
                }
        })
    }
    const deleteProduct=(id)=>{
        fetch(`https://calm-eyrie-20283.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            console.log("Delete")
            alert("Item Deleted Please Refresh & Login")
        })
    }

 console.log(orderListData);
    return (
        <div>
            
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Payment ID</th>
            <th className="text-secondary" scope="col">Service</th>
            <th className="text-secondary" scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            {
              orderListData.map((order, index) => 
                    
                <tr>
                  
                    <td>{index + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.payment}</td>
                    <td>{order.service}</td>
                    {
                    order.status==='Done'?<div>
                        <td style={{color:"green"}}>{order.status}</td>
                    </div>:<div>
                        <td style={{color:"red"}}>{order.status}</td>
                    </div>
                    }
                    <td>
                    <button className="btn btn-primary"onClick={() =>updateProduct(order._id)}>Work Done</button> 
                    <button className="btn btn-danger" onClick={()=>{deleteProduct(order._id)}}>Delete</button>
                    </td>
                </tr>
                )
            }
        </tbody>
    </table>
        </div>
    );
};

export default OrderListAdmin;