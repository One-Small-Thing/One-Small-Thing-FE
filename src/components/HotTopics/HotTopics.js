import React from 'react';
import { Link } from 'react-router-dom'
import './HotTopics.css';

const HotTopics = () => {
    return (
        <section className='hot-topics'>
            <div className='hot-topics__desc'>
                <h1>One Small Thing</h1>
                <p>When the world is at it's bleakest, sometimes it just needs brave souls who are willing to help.. Even if it's just one small thing.</p>
            </div>
            <div className='hot-topics__buttons'>
                <Link to="/newsStories/environment" className='topics'>Environment</Link>
                <Link to="/newsStories/reproductive-rights" className='topics'>Reproductive Rights</Link>
                <Link to="/newsStories/education" className='topics'>Education</Link>
                <Link to="/newsStories/lgbtqia" className='topics'>LGBTQIA+</Link>
                <Link to="/newsStories/domestic-violence" className='topics'>Domestic Violence</Link>
                <Link to="/newsStories/free-and-open-computing" className='topics'>Free & Open Computing</Link>
                <Link to="/newsStories/gun-conrol" className='topics'>Gun Control</Link>
                <Link to="/newsStories/all-topics" className='topics'>All Topics</Link>
                <Link to="/newsStories/surprise-me" className='topics'>Surprise Me!</Link>
            </div>

        </section>
    )
}

export default HotTopics;