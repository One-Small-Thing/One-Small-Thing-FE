import React from "react";
import { useQuery, gql } from '@apollo/client';
import "./NewsStories.css"
import peace from "../../images/peace.jpg"

const NewsStories = (event) => {
  const GET_NEWS_BY_TAG = gql`
  query {
    stories(name: "${event.topic}")
      {
      date
      title
      img
      author
      url
      content
      description
    }
  }
  `
  const { loading, error, data } = useQuery(GET_NEWS_BY_TAG, {name: event.topic})

  if(loading) return "Loading..."
  if(error) return `Error! ${error.message}`
  if(!loading){
    const news = data.headlines.map(story => {
    
    return (
      <div className="story" key={story.title}>
        {!story.img && !story.author ?
        <section  className="story__section" style={{ backgroundImage:`url(${peace})` }}
                  alt="woman with making peace symbol with hand in air at a rally">
            <div className="story__section__tag-box">
              <p className="tags">{event.topic}</p>
              <p className="action">TAKE ACTION</p>
            </div>
            <div className="story__section__title-box">
              <h2 className="title">{story.title}</h2>
              <p className="date">{story.date}</p>
            </div>
          </section>
          : 
          <section className="story__section" style={{ backgroundImage:`url(${story.img})` }}
                    alt="still image scene from corresponding news article">
              <div className="story__section__tag-box">
                <p className="tags">{event.topic}</p>
                <p className="action">TAKE ACTION</p>
              </div>
              <div className="story__section__title-box">
                <h2 className="title">{story.title}</h2>
                <p className="author-name">by {story.author}</p>
                <p className="date">{story.date}</p>
              </div>
          </section>
        }
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
        
   
        
