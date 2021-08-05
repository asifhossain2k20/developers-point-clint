import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';
import Testimonials from '../Testimonials/Testimonials';
import WorkDone from '../WorkDone/WorkDone';

const Home = () => {
    return (
        <div className="bg-white">
           <Header></Header>
           <OurServices></OurServices>
           <WorkDone></WorkDone>
           <Testimonials></Testimonials>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;