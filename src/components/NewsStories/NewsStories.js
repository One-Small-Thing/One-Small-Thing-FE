import React from "react";
import NewsStoryCard from './NewsStoryCard';
import { useQuery } from '@apollo/client';
import { GET_NEWS_BY_HEADLINE } from '../../queries';
import "./NewsStories.css"

const NewsStories = () => {
  const { loading, error, data } = useQuery(GET_NEWS_BY_HEADLINE)

  if(loading) return "Loading..."
  if(error) return `Error! ${error.message}`
  if(!loading) {
    const articleLinks = data.headlines.map(story=> {

      return (
        <NewsStoryCard 
          id={story.url} 
          key={story.url} 
          date={story.date} 
          title={story.title} 
          img={story.img} 
          description={story.description} 
          url={story.url} 
        /> 
      )
    })
    
    return(
      <div>
        {articleLinks}
      </div>
    )
  }
}
        
export default NewsStories;