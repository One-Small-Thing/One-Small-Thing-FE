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
                <a>Enviroment</a>
                <a>Reproductive Rights</a>
                <a>Education</a>
                <a>LGBTQIA+</a>
                <a>Domestic Violence</a>
                <a>Free & Open Computing</a>
                <a>Gun Control</a>
                <a>All Topics</a>
                <a>Surprise Me!</a>
            </div>

        </section>
    )
}

export default HotTopics;