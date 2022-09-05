import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__main'>
                <h1 className='navbar__main--display'>One Small Thing</h1>
                <div className='navbar__main--menu'>
                    <input type='checkbox' className='navbar__main--menu--checkbox' id='navi-toggle'/>
                    <label htmlFor='navi-toggle' className='navbar__main--menu--button'>
                        <span className='navbar__main--menu--icon'>&nbsp;</span>
                    </label>
                    <div className='navbar__main--menu--background'>&nbsp;</div>
                    <nav className='navbar__main--menu--nav'>
                        <ul className='navbar__main--menu--list'>
                            <li className='navbar__main--menu--item'><div className='navbar__main--menu--link'>About</div></li>
                            <li className='navbar__main--menu--item'><div className='navbar__main--menu--link'>Main</div></li>
                            <li className='navbar__main--menu--item'><div className='navbar__main--menu--link'>About 3</div></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default NavBar;
