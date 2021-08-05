import React from 'react';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <HeaderCarousel></HeaderCarousel>
        </div>
    );
};

export default Header;