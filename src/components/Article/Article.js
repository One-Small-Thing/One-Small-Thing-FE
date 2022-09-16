import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./Article.css"



function Article() {
    const location = useLocation()
    const [ embedUrl, setEmbedUrl ] = useState('')

    useEffect(() => {
        setEmbedUrl(location.state)
    }, [location.state])

    

    
    return(
       
            <div className="article">
                <iframe className="article__main" type="External__Url" title="News Article" src={embedUrl} height="800px" width="800px"></iframe>
                <Link className="Link__Article" to={`/One-Small-Thing-FE/NewsStories/${location.topic}`}>
                    <button className="article__button">Back</button>
                </Link>
            </div>
     
    )
}

export default Article;