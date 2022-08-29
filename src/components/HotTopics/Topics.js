import React from 'react';
import { Link } from 'react-router-dom';


const Topics = ({topic}) => {

    return (
        <Link to={`/NewsStories/${topic}`}>
            <div>
                <p>{topic}</p>
            </div>
        </Link>

    )
}

export default Topics