import React from "react";
import { useQuery } from '@apollo/client';
import { GET_NEWS_BY_HEADLINE } from '../../queries';
import "./NewsStories.css"

const NewsStories = () => {
  const { loading, error, data } = useQuery(GET_NEWS_BY_HEADLINE)
  console.log(data)
  
  if(!loading){
    const news = data.headlines.map(story => {
    console.log("STORY", story)
    
    
    return (
      <section key={story.title} className="story-section" 
      // style={{ backgroundImage:`url(${story.img})` }}
      >
          <div className="tag-box">
            <p className="tags">{story.tags}</p>
          </div>
          <div className="action-box">
            <p className="action">TAKE ACTION</p>
          </div>
          <div className="title-box">
          <h2 className="news-story-title">{story.title}</h2>
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
        
        // const [ categoryNews, setCategoryNews ] = useState([])
        // const [ currentTag, setCurrentTag ] = useState('')
        
        
        // if(loading) return "Loading..."
        // if(error) return `Error! ${error.message}`
        // console.log("HELLO", data)
        
        //     return <div>"Loading..."</div>
        
