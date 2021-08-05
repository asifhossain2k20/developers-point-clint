import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';

const OurServiceAdmin = () => {
    const [servicesData, setServicesData] = useState([]);
    useEffect(()=>{
        fetch('https://calm-eyrie-20283.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>{
            setServicesData(data)
        })
    },[])
    return (
        <div>
            
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                <div className="text-center">
                <h1>Our Services</h1>
            </div>
                <div className="mt-4">
                
                <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  servicesData.map((order, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{order.name}</td>
                        <td>{order.service}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
                </div>
                
                </div>
            </div>
           
        </div>
    );
};

export default OurServiceAdmin;