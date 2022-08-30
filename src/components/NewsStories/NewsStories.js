import React from "react";
import { useQuery } from '@apollo/client';
import { GET_NEWS_BY_TAG } from '../../queries';

const NewsStories = ({topic}) => {

    const { loading, error, data } = useQuery(GET_NEWS_BY_TAG, {tags: topic})
    
      // const [ categoryNews, setCategoryNews ] = useState([])
      // const [ currentTag, setCurrentTag ] = useState('')


    if(loading) return "Loading..."
    if(error) return `Error! ${error.message}`
    console.log(data)
    
    return (
      <section className="story-section" >
        <div className="top-left-corner-box">
          <p className="tags">TAG HERE</p>
        </div>
        <h2 className="news-story-title">News Article Title</h2>
        <div className="bottom-left-corner-box">
          <p className="author-name">Author Name</p>
        </div>
      </section>
    )
}

export default NewsStories;