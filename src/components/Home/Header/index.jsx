import React from 'react';
import './style.css';
import LogIn from '../LogIn';
import SignIn from '../SignIn';

const Header = () => (
    <div className='outer'>
        <img id='icon' src='/images/blogging.png' alt='icon' />


    <header className='home-header'>
        <h2>Your Own Blogging Site</h2>
        <p>
            Awesome place to make oneself <br /> productive and entertained through daily updates
        </p>
    </header>
    </div>
);

export default Header