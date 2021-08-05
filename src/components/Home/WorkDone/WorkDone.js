import React from 'react';
import img from '../../Images/Works/work.png'
import partner from '../../Images/Works/partner.png'
import expart from '../../Images/Works/expart.png'
import love from '../../Images/Works/love.png'
import it from '../../Images/Works/it.png'
import './WorkDone.css'
const WorkDone = () => {
    return (
        <div className="bg-light" style={{height:'400px'}}>
            <div className=" container mt-5 p-5">
            <div className="row">
                <div className="col-md-5 d-flex justify-content-center">
                  <img src={img} style={{height: '300px'}} alt="" />
                </div>
                <div className="col-md-7 mt-4">
            <h1>Web Development</h1>
             <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolor repellendus ipsum temporibus at quibusdam.</h6>
             <div className="row work-icon mt-5 p-3">
                 <div className="col-md-3">
                 <img src={expart} alt="" />
                     <div>
                         <h4>569+ </h4>
                         <h6>Expert Doctors</h6>
                     </div>
                 </div>
                 <div className="col-md-3">
                     <img src={love} alt="" />
                     <div>
                         <h4>356+ </h4>
                        <h6>Happy Clients</h6> 
                     </div>
                 </div>
                 <div className="col-md-3">
                 <img src={partner} alt="" />
                 <div>
                         <h4>783+ </h4>
                         <h6>  Business Partners</h6> 
                     </div>
                 </div>
                 <div className="col-md-3">
                 <img src={it} alt="" />
                 <div>
                         <h4>894+</h4>
                        <h6> IT Consultant</h6>
                     </div>
                 </div>
             </div>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default WorkDone;