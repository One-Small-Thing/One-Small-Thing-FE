import React from 'react';
import Topics from "../Topics/Topics"
import './HotTopics.css';

const HotTopics = () => {

    const Array = [ "Environment", "LGBTQIA+", "Reproductive Rights", "Education", "Domestic Violence", "Free & Open Computing", "Gun Control", "All Topics", "Surprise Me!"]

    const listItems = Array.map(element => {
        return (
        <Topics 
        id={Array.indexOf(element)} 
        key={element} 
        topic={element} 
        />
        )
    })

    return (
        <section className='hot-topics'>
            <div className='hot-topics__desc'>
                <h1>One Small Thing</h1>
                <p>When the world is at it's bleakest, sometimes it just needs brave souls who are willing to help.. Even if it's just one small thing.</p>
            </div>
            <div className='hot-topics__buttons'>
              {listItems}
            </div>

        </section>
    )
}

export default HotTopics;