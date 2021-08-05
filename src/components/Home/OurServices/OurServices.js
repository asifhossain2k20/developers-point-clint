import React, { useEffect } from 'react';
import OurServicesCard from '../OurServicesCard/OurServicesCard';
import web from '../../Images/Icons/web.png'
import digital from '../../Images/Icons/digital.png'
import graphsic from '../../Images/Icons/graphsic.png'
import { useState } from 'react';




const OurServices = () => {
    const [servicesData, setServicesData] = useState([]);


    useEffect(()=>{
        fetch('https://calm-eyrie-20283.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>{
            setServicesData(data)
        })
    },[])

    return (
        <div className=" mt-4 container mb-4">
            <div className="text-center">
                <h1>Our Services</h1>
            </div>
            
            <div className="row mt-4">
                
                {
                    servicesData.map(service =><OurServicesCard  service={service}></OurServicesCard>)
                }
            </div>
            
        </div>
    );
};

export default OurServices;