import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__main'>
                <Link to="/">
                    <h1 className='navbar__main--display'>One Small Thing</h1>
                </Link>
                <div className='navbar__main--menu'>
                    <input type='checkbox' className='navbar__main--menu--checkbox' id='navi-toggle'/>
                    <label htmlFor='navi-toggle' className='navbar__main--menu--button'>
                        <span className='navbar__main--menu--icon'>&nbsp;</span>
                    </label>
                    <div className='navbar__main--menu--background'>&nbsp;</div>
                    <nav className='navbar__main--menu--nav'>
                        <ul className='navbar__main--menu--list'>
                            <li className='navbar__main--menu--item'>
                                <Link to="/About" className='navbar__main--menu--link'>
                                    <div className='navbar__main--menu--link'>About</div>
                                </Link>
                            </li>
                            <li className='navbar__main--menu--item'>
                                <Link to="/" className="navbar__main--menu--link">
                                    <div className='navbar__main--menu--link'>Home</div>
                                </Link>
                            </li>
                            <li className='navbar__main--menu--item'>
                                <div className='navbar__main--menu--hotline'>Crisis Hotlines<br/>
                                    <ul>
                                        <li>line 1 3535665161616516 hdjkrghdfg </li>
                                        <li>line 2 3535665161616516 hdjkrghdfg </li>
                                        <li>line 3 3535665161616516 hdjkrghdfg </li>
                                        <li>line 1 3535665161616516 hdjkrghdfg </li>
                                        <li>line 1 3535665161616516 hdjkrghdfg </li>
                                        <li>line 1 3535665161616516 hdjkrghdfg </li>
                                        <li>line 1 3535665161616516 hdjkrghdfg </li>
                                        <li>line 1 3535665161616516 hdjkrghdfg </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default NavBar;
