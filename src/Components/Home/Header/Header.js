import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import Navbar from '../../Shared/Navbar/Navbar';

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar />
            <HeaderMain/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;