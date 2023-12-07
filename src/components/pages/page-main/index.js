import * as React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Headertop } from '../../header/header';
import { PageReg } from '../page-reg';
import { PageAuth } from '../page-auth';
import { Menu } from '../../menu'
import { Settings } from '../page-settings';

export const PageMain = () => {
    const [isAuthVisible, setIsAuthVisible] = useState(false);
    const [isRegVisible, setIsRegVisible] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);


    return (
        <div>
            <Headertop onSignInClick={() => setIsAuthVisible(true)}  onRegClick={() => setIsRegVisible(true)} onMenuClick={() => setIsMenuVisible(true)}/>
            
            <Settings/>

            {isAuthVisible && (
                <div className='form-wrapper'>
                    <PageAuth onExitClick={() => setIsAuthVisible(false)}/>
                </div>
            )}
            
            {isRegVisible && (
                <div className='form-wrapper'>
                    <PageReg onExitClick={() => setIsRegVisible(false)}/>
                </div>
            )}

            {isMenuVisible && (
                <div className='form-wrapper'>
                    <Menu onExitClick={() => setIsMenuVisible(false)}/>
                </div>
            )}

        </div>
    );
};

