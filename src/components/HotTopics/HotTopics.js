import React from 'react';
import Topics from "../Topics/Topics"
import './HotTopics.css';

const HotTopics = () => {

    const Array = [ "Environmental", "LGBTQ+", "Abortion Rights", "Education", "Domestic Violence", "Free and Open Computing", "Gun Violence", "Immigration", "All Topics"]

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
                <p>When the world seems it is at it's bleakest, and a sense of helplessness comes along, sometimes it just needs brave souls who are willing to help- to take one action that begins a series of change for good in the world... Even if it's just <strong>one small thing.</strong></p>
            </div>
            <div className='hot-topics__buttons'>
              {listItems}
            </div>

        </section>
    )
}

export default HotTopics;