import React, { useEffect, useState } from 'react';
import TestimonialsCard from '../TestimonilsCard/TestimonialsCard';


const Testimonials = () => {
    const [testimonialsData, setTestimonialsData] = useState([]);


    useEffect(()=>{
        fetch('https://calm-eyrie-20283.herokuapp.com/allReviews')
        .then(res=>res.json())
        .then(data=>{
            setTestimonialsData(data)
        })
    },[])

    return (
        <div className="container mt-5 mb-5">
            <div className="text-center">
                <h1>Testimonials</h1>
            </div>
            <div className="row mt-5 ">
                {
                    testimonialsData.map(data=><TestimonialsCard data={data}></TestimonialsCard>)
                }
            </div>
            
        </div>
    );
};

export default Testimonials;