import React from 'react';

const TestimonialsCard = ({data}) => {
    return (
            <div className="col-md-4 ps-5 pb-4">
            <div className="card shadow border border-4" style={{width: "18rem"}}>
                <div className="d-flex justify-content-center p-3 rounded">
                <img style={{height: "90px",width: "90px"}} src={data.img} className="card-img-top rounded-circle" alt="..."/>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{data.name}</h5>
                    <p>{data.designation}</p>
                    <p className="card-text">{data.description}</p>
                    <h5>Rating : {data.rating}/100</h5>
                </div>
                </div>
        </div>
    );
};

export default TestimonialsCard;