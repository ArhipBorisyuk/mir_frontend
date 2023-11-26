import * as React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

export const Headertop = ({ onSignInClick, onRegClick }) => {
    return (
        <div className='header-top'>
            <h1>sitelogo</h1>
            <div className='header-link-container'>
                <button onClick={onSignInClick} className='header-link'>Sign in</button>
                <button onClick={onRegClick} className='header-link'>Register</button>
            </div>
        </div>
    );
};