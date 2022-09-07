import React from "react";
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import "./NewsStories.css"
import peace from "../../images/peace.jpg"
import Loading from "../Loading/Loading";

const NewsStories = (event) => {
  const GET_NEWS_BY_TAG = gql`
  query News {
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

  if(loading) return <Loading/>
  if(error) return `Error! ${error.message}`
  if(!loading){
    const news = data.stories.map(story => {
    
    return (
      <div className="story" key={story.title}>
        {!story.img && !story.author ?
        <section  className="story__section">
            <img className='story__section-img' src={peace} alt="woman with making peace symbol with hand in air at a rally"/>
            <Link className="Link__Article" to={{ pathname: `/Article/${story.title}`, state: story.url }}>
              <div className="story__section__title-box">
                <div className="story__section__title-box--by">
                  <p className="date">{story.date}</p>
                  <p className="author-name"> {story.author}</p>
                </div>
                <h2 className="title">{story.title}</h2>
              </div>
            </Link>
            <div className="story__section__tag-box">
              <a className="btn-ta" href="#open-modal">TAKE ACTION</a>
            </div>
          </section>
          : 
          <section  className="story__section">
            <img className='story__section-img' src={story.img} alt="still scene from corresponding news article"/>
            <Link className="Link__Article" to={{ pathname: `/Article/${story.title}`, state: story.url }}>
              <div className="story__section__title-box">
                <div className="story__section__title-box--by">
                  <p className="date">{story.date}</p>
                  <p className="author-name"> {story.author}</p>
                </div>
                <h2 className="title">{story.title}</h2>
              </div>
            </Link>
            <div className="story__section__tag-box">
              <a className="btn-ta" href="#open-modal">TAKE ACTION</a>
            </div>
          </section>
        }
  {event.topic === "Reproductive Rights" && 
<div id="open-modal" className="modal-window">
  <div className="modal-box">
    <a href="#!" title="Close" className="modal-close">X</a>
      <Link to="/CongressAction" className='congress-action-link'>
        <h1 className='congress-action'>Write to your local <br/>Congress member</h1>
      </Link>
    <p>Take action by writing a letter or making a call to your local congress person about this issue! </p>
    <br/>
    <h1><a target="_blank" href="https://www.youtube.com/watch?v=inpok4MKVLM" className="external-link-meditation" rel="noreferrer">Practice a 5 minute personal meditation to ease your stress.</a></h1>
    <br/>
    <p>You can take action just by resetting your mind and body. Take action by centering your thoughts and meditating.</p>
    <br/>
    <h1><a target="_blank" href="https://roed-to-aid.herokuapp.com/" rel="noreferrer">Find the closest pro-choice healthcare near you</a></h1>
    <br/>
    <p>Roe'd To Aid brings awareness and expands access to safe, authorized clinics that provide necessary healthcare to all birthers. Share with out-of state friends.</p>
  </div>
</div>
  }
  {event.topic !== "Reproductive Rights" &&
  <div id="open-modal" className="modal-window">
  <div className="modal-box">
    <a href="#!" title="Close" className="modal-close">X</a>
      <Link to="/CongressAction" className='congress-action-link'>
        <h1 className='congress-action'>Write to your local <br/>Congress member</h1>
      </Link>
    <p>Take action by writing a letter or making a call to your local congress person about this issue! </p>
    <br/>
    <h1><a target="_blank" href="https://www.youtube.com/watch?v=inpok4MKVLM" className="external-link-meditation" rel="noreferrer">Practice a 5 minute personal meditation to ease your stress.</a></h1>
    <br/>
    <p>You can take action just by resetting your mind and body. Take action by centering your thoughts and meditating.</p>
    <br/>
  </div>
</div>
  }
</div>
    )
    })
      return (
        <div className="story-container">
          <h2 className="story-container__topic">{event.topic}</h2>
          <div className="story-container__news">
            { news }
          </div>
        </div>
      )
  }      
}
        
export default NewsStories;
