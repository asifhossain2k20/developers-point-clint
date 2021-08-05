import React from 'react';
import { useHistory } from 'react-router-dom';
import './OurServicesCard.css'

const OurServicesCard = ({service}) => {
    const history = useHistory()
    console.log(service);
        const handleSubmit = (id) => {
            history.push(`/dashboard`)
            sessionStorage.setItem('id', id);
        }
    return (

        <div className="col-md-4 ps-5 pb-4 mb-4">
            <div class="card shadow card-container" style={{width: "18rem"}}>
        <div className="d-flex justify-content-center p-3">
        <img style={{height: "90px",width: "90px"}} src={service.imgURL} class="card-img-top" alt="..."/>
        </div>
        <div class="card-body text-center">
            <h4>${service.price}</h4>
            <h5 class="card-title">{service.name}</h5>
            <p class="card-text">{service.description}</p>
            <button  class="btn btn-primary" onClick={()=>{handleSubmit(service._id)}}>BUY NOW</button>
        </div>
        </div>
        </div>
    );
};

export default OurServicesCard;