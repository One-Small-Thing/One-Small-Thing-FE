import React from "react";
import NewsStoryCard from './NewsStories/NewStoryCard';
import { useQuery } from '@apollo/client';
import { GET_NEWS_BY_HEADLINE } from '../../queries';
import "./NewsStories.css"
import peace from "../../images/peace.jpg"

const NewsStories = () => {
  const { loading, error, data } = useQuery(GET_NEWS_BY_HEADLINE)

  if(loading) return "Loading..."
  if(error) return `Error! ${error.message}`
  if(data){
    const storyArr = data.headlines;
    const news = storyArry.map(story => {
      
    return (
      <div className="story">
        <NewsStoryCard />
      </div>
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
        
   
        
// <section key={story.title} className="story__section" style={{ backgroundImage:`url(${story.img})` }}
// alt="still image scene from corresponding news article">
// <div className="story__section__tag-box">
// <p className="tags">EDUCATION {story.tags}</p>
// <p className="action">TAKE ACTION</p>
// </div>
// <div className="story__section__title-box">
// <h2 className="title">{story.title}</h2>
// <p className="author-name">by Author Mc Authorson {story.author}</p>
// <p className="date">{story.date}</p>
// </div>
// </section>