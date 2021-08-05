import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import c1 from '../../Images/Carousel/c1.jpg'
import c2 from '../../Images/Carousel/c2.jpg'
import c3 from '../../Images/Carousel/c3.jpg'
import './Carosel.css'

const HeaderCarousel = () => {
  
    return (
      <div className="carosel p-3 rounded">
      <div className="container">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={c1} className="img-fluid rounded" class="d-block w-100" alt="..." />
            <div class="opp carousel-caption d-none d-md-block">
              <h5>Web Development</h5>
              <p>
Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network). ... Among Web professionals, "Web development" usually refers to the main non-design aspects of building Web sites: writing markup and coding.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={c2} className="img-fluid rounded" class="d-block w-100" alt="..." />
            <div class="opp carousel-caption d-none d-md-block">
              <h5>Digital Marketing</h5>
              <p>Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={c3} className="img-fluid rounded" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block opp">
              <h5>SEO</h5>
              <p>
Search engine optimization (SEO) is the art and science of getting pages to rank higher in search engines such as Google. ... In Google and other search engines, the results page often features paid ads at the top of the page, followed by the regular results or what search marketers call the "organic search results"</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </div>
 
    );
};

export default HeaderCarousel;