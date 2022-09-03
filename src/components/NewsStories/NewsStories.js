import React from "react";
import NewsStoryCard from './NewsStoryCard';
import { useQuery } from '@apollo/client';
import { GET_NEWS_BY_HEADLINE } from '../../queries';
import "./NewsStories.css"

const NewsStories = () => {
  const { loading, error, data } = useQuery(GET_NEWS_BY_HEADLINE)

  if(loading) return "Loading..."
  if(error) return `Error! ${error.message}`
  if(data) {
    const response = data.headlines;
    const articleLinks = response.map(article => {
      return (
        <NewsStoryCard 
          id={article.url} 
          key={article.url} 
          date={article.date} 
          title={article.title} 
          img={article.img} 
          description={article.description} 
          url={article.url} 
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