import React from 'react';
import './HotTopics.css';

const HotTopics = () => {
    return (
        <section className='hot-topics'>
            <div className='hot-topics__desc'>
                <h1>One Small Thing</h1>
                <p>When the world is at it's bleakest, sometimes it just needs brave souls who are willing to help.. Even if it's just one small thing.</p>
            </div>
            <div className='hot-topics__buttons'>
                <div className='topics'>Enviroment</div>
                <div className='topics'>Reproductive Rights</div>
                <div className='topics'>Education</div>
                <div className='topics'>LGBTQIA+</div>
                <div className='topics'>Domestic Violence</div>
                <div className='topics'>Free & Open Computing</div>
                <div className='topics'>Gun Control</div>
                <div className='topics'>All Topics</div>
                <div className='topics'>Surprise Me!</div>
            </div>

        </section>
    )
}

export default HotTopics;