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
                    <label htmlFor='navi-toggle' className='navbar__main--menu--button'>
                        <span className='navbar__main--menu--icon'>&nbsp;</span>
                    </label>
                    <div className='navbar__main--menu--background'>&nbsp;</div>
                    <nav className='navbar__main--menu--nav'>
                        <ul className='navbar__main--menu--list'>
                            <li className='navbar__main--menu--item'><a href='#' className='navbar__main--menu--link'>About</a></li>
                            <li className='navbar__main--menu--item'><a href='#' className='navbar__main--menu--link'>Main</a></li>
                            <li className='navbar__main--menu--item'><a href='#' className='navbar__main--menu--link'>About 3</a></li>
                            <li className='navbar__main--menu--item'><a href='#' className='navbar__main--menu--link'>About 4</a></li>
                            <li className='navbar__main--menu--item'><a href='#' className='navbar__main--menu--link'>About 5</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default NavBar;
