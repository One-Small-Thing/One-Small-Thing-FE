import React from 'react';
import Topics from "../Topics/Topics"
import './HotTopics.css';

const HotTopics = () => {

    const Array = [ "Environment", "LGBTQ+", "Reproductive Rights", "Education", "Domestic Violence", "Free and Open Computing", "Gun Control", "Immigration", "Top Stories"]

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
                <p>When the world seems it is at it's bleakest, and a sense of helplessness comes along, sometimes it just needs brave souls who are willing to help- to take one action that begins a series of change for good in the world... Even if it's just One Small Thing.</p>
                <br/>
                <p>In this application you can select a topic of your interest and view what actionable things you can do to create change around them. Whether it's calling up a local politician to reform laws or simply meditating to stay grounded. One Small Thing is a place of solutions amongst a world of "what can I do to help". Lets use our power to change the world we live on for the better!</p>
            </div>
            <div className='hot-topics__buttons'>
              {listItems}
            </div>

        </section>
    )
}

export default HotTopics;