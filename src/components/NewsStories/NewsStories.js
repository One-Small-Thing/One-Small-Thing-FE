import React from "react";
import { useQuery } from '@apollo/client';
import { GET_NEWS_BY_HEADLINE } from '../../queries';
import "./NewsStories.css"
import peace from "../../images/peace.jpg"

const NewsStories = () => {
  const { loading, error, data } = useQuery(GET_NEWS_BY_HEADLINE)

  if(loading) return "Loading..."
  if(error) return `Error! ${error.message}`
    const headlinesArr = data.headlines
    console.log(headlinesArr)
    
  if(headlinesArr){
    const news = headlinesArr.map(story => {

    return (
      <div className="story">

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
        
   
        
