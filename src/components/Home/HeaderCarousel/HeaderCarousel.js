import React from 'react';
import c1 from '../../Images/Carousel/c1.jpg'
import c2 from '../../Images/Carousel/c2.jpg'
import c3 from '../../Images/Carousel/c3.jpg'

const HeaderCarousel = () => {
    return (
        <div className="container mt-4 bg-light rounded">
          <div className="row">
            <div className="col-md-6 p-5">
                  <h1>Developers Point</h1>
                    <br />
                  <h5>DevelopersPoint is an IT company that provides services such as Web development, SEO, Digital marketing and Graphics design ETc.</h5>
                  <br />
                  <button className="btn btn-primary">HIRE US</button>
            </div>
            <div className="col-md-6">
               <div className="p-5">
                 <img src={c1} className="img-fluid rounded" alt="" />
               </div>
            </div>
          </div>

        </div>
    );
};

export default HeaderCarousel;