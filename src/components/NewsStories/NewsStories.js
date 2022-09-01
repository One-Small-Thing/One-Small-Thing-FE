import React from "react";
import { useQuery } from '@apollo/client';
import { GET_NEWS_BY_HEADLINE } from '../../queries';
import "./NewsStories.css"

const NewsStories = () => {
  const { loading, error, data } = useQuery(GET_NEWS_BY_HEADLINE)
  console.log(data)

  if(loading) return "Loading..."
  if(error) return `Error! ${error.message}`
  
  if(!loading){
    const news = data.headlines.map(story => {
    console.log("STORY", story)
    
    
    return (
      <section key={story.title} className="story" 
       style={{ backgroundImage:`url(${story.img})` }}
      >
          <div className="story__tag-box">
            <p className="tags">{story.tags}</p>
          </div>
          <div className="story__action-box">
            <p className="action">TAKE ACTION</p>
          </div>
          <div className="story__title-box">
          <h2 className="title">{story.title}</h2>
            <p className="author-name">by {story.author}</p>
          </div>
        </section>
    )
    })
      
      return (
        <div>
          {news}
        </div>
      )
  }
          
}
        
export default NewsStories;
        
   
        
