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
                                <div className='navbar__main--menu--hotline'>Crisis Hotlines<br/><br/>
                                    <ul className="navbar__main--menu--phone">
                                        <p>We understand these topics can feel heavy. Please reach out to a professional if you ever need to talk.</p><br/><br/>
                                        <p>LGBT National Youth Talkline 📞 1-800-246-7743</p>
                                        <p>Teen Line 📞 1-800-852-8336</p>
                                        <p>National Domestic Violence Hotline 📞 1-800-799-7233</p>
                                        <p>Marine Corps DSTRESS Line 📞 1-877-476-7734</p>
                                        <p>National Grad Crisis Line 📞 1-877-472-3457 </p>
                                        <p>National Alliance on Mental Illness (NAMI) HelpLine 📞 1-800-950-6264</p>
                                        <p>Disaster Distress Helpline (TTY) 📞 1-800-846-8517</p>
                                        <p>988 Suicide & Crisis Lifeline 📞 988</p>
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
