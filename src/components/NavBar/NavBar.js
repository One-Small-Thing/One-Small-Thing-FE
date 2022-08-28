import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return (
        <div className='navbar'>
            <img className='navbar__img' src='https://cdn-icons-png.flaticon.com/512/1917/1917613.png'alt="pineapple"/>
            <div className='navbar__main'>
                <h1 className='navbar__main--display'>One Small Thing</h1>
                <div className='navbar__main--menu navbar__main--display'>
                    <input type='checkbox' className='navbar__main--menu--checkbox' id='navi-toggle'/>
                </div>
            </div>
        </div>
    )
}
export default NavBar;
