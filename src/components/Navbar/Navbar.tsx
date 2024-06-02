import React, { useState } from 'react';
import './Navbar.scss';
import dropdownIcon from '../../assets/icons/myLogo.png';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='navbar'>
            <div className={`navbar__links ${isDropdownOpen ? 'navbar__links--open' : ''}`}>
                <a href='#my-journey' onClick={toggleDropdown}>My Journey</a>
                <a href='#projects' onClick={toggleDropdown}>Projects</a>
                <a href='#contact' onClick={toggleDropdown}>Contact</a>
            </div>
            <div className='navbar__dropdown-icon' onClick={toggleDropdown}>
                <img src={dropdownIcon} alt='dropdown-icon' />
            </div>
        </div>
    );
}

export default Navbar;
