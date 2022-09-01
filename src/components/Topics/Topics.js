import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css';


const Topics = ({topic}) => {

    return (
        <Link to={`/NewsStories/${topic}`} className='topics'>
            <div className='topics__box'>
                <p>{topic}</p>
            </div>
        </Link>

    )
}

export default Topics