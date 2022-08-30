import React from "react";
import { useQuery } from '@apollo/client';
import { GET_NEWS_BY_TAG } from '../../queries';

const NewsStories = ({topic}) => {

    const { loading, error, data } = useQuery(GET_NEWS_BY_TAG, {tags: topic})
  //   const news = data.news.map((story => {
  //     return (
  //       <section className="story-section" src={story.img}>
  //       <div className="tag-box">
  //         <p className="tags">{story.tags}</p>
  //       </div>
  //       <div className="action-box">
  //         <p className="action">TAKE ACTION</p>
  //       </div>
  //       <div className="title-box">
  //       <h2 className="news-story-title">{story.title}</h2>
  //         <p className="author-name">by {story.author}</p>
  //       </div>
  //     </section>
  //   )
  // }))
  // const [ categoryNews, setCategoryNews ] = useState([])
  // const [ currentTag, setCurrentTag ] = useState('')
  
  
  // if(loading) return "Loading..."
  // if(error) return `Error! ${error.message}`
  // console.log(data)
  console.log(data.news)
    
    return (
      <div>
        HELLO
 
      </div>
   
    )
}

export default NewsStories;