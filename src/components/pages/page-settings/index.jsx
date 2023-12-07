import * as React from 'react'
import './style.css'
import { useState } from 'react'
import AuthService from '../../../services/userAuth'

export const Settings = () => {

    const [passinp, setPassinp] = useState('');
    const [passrep, setPassrep] = useState('');
    const [mailinp, setMailinp] = useState('');
    const [reqstate, setReqstate] = useState(0);

    return (
        <div>
            <div className='page-wrapper'>
                <p>Безопастность</p>

                <input type='email' placeholder="email" value={mailinp} onChange={(e) => {setMailinp(e.target.value); setReqstate(0)}}/>
                
                <p className={reqstate & (1 << 5) ? "password-not-matching-text" : "password-matching-text"}>
                    Enter an actual mail
                </p>
                
                <br />
                <input  type='password'
                        placeholder="пароль"
                        className={(reqstate & (1 << 3)) ? "password-not-matching-input" : ""}
                        value={passinp} onChange={(e) => 
                        {setPassinp(e.target.value);
                        setReqstate(0)}}/>

                <p className={reqstate & (1 << 3) ? "password-not-matching-text" : "password-matching-text"}>
                    Password must be at least 8 symbols long
                </p>

                {/* <input  type='password'
                        className={reqstate & (1 << 2) ? "password-not-matching-input" : ""} 
                        placeholder="повторить пароль" 
                        value={passrep} onChange={(e) => 
                        {setPassrep(e.target.value); 
                        setReqstate(0)}}/> */}
                
                <p className={reqstate & (1 << 2) ? "password-not-matching-text" : "password-matching-text"}>Passwords do not match</p>
                
                {/* <button onClick={(e) => {HandleClick(e)}}>{reqstate & (1 << 0) ? "Loading..." : "Register"}</button> */}

            </div>
        </div>
    );

    function CheckFields()
    {
        let k = 0;
        k = k ^ ((passinp !== passrep) << 2) 
        k = k ^ ((!(/^.{8,}$/.test(passinp)))<< 3)
        //enter password check-up
        k = k ^ ((!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mailinp)) << 5)
        k = k ^ ((!(/^.{5,24}$/.test(passinp))) << 6)
        return k
    }
    
    async function HandleClick(e)
    {
        console.log(reqstate)
        e.preventDefault()
    
        const check = CheckFields()
    
        console.log(check)
    
        if (check)
        {
            setReqstate(check)
            return
        }
        setReqstate(1);
        await AuthService.registration(mailinp, passinp)
        setReqstate(0);
    }
};

