import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';



function Article() {
    const location = useLocation()
    const [ embedUrl, setEmbedUrl ] = useState('')

    useEffect(() => {
        setEmbedUrl(location.state)
    }, [location.state])

    
    return(
        <div className="Link__Ember">
            <iframe type="External__Url" title="News Article" src={embedUrl} height="800px" width="800px"></iframe>
        </div>
    )
}

export default Article;