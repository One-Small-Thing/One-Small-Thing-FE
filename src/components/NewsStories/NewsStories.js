import React from "react";
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
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
              <label htmlFor="mpo-modal-controller" className="btn">TAKE ACTION</label>
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
                <label htmlFor="mpo-modal-controller" className="btn">TAKE ACTION</label>
              </div>
              <div className="story__section__title-box">
                <h2 className="title">{story.title}</h2>
                <p className="author-name">by {story.author}</p>
                <p className="date">{story.date}</p>
              </div>
              <Link className="Link__Article" to={{ pathname: "/Article", state: story.url }}><button>LINK</button></Link>
          </section>
        }
<div className="mpo-modal">
  <input type="checkbox" id="mpo-modal-controller" className="mpo-modal-open" hidden/>
  <div className="mpo-modal-wrap">
    <label htmlFor="mpo-modal-controller" className="mpo-modal-overlay"></label>
    <div className="mpo-modal-body">
      <label htmlFor="mpo-modal-controller" className="mpo-modal-close">&times;</label>
      <input type="radio" name="content-nav" id="modal-content-1" className="modal-radio" checked hidden/>
      <input type="radio" name="content-nav" id="modal-content-2" className="modal-radio" hidden/>
      <input type="radio" name="content-nav" id="modal-content-3" className="modal-radio" hidden/>
      <div className="mpo-modal-slide content-1">
        <div className="mpo-modal-content">
          <h2>Write to your local <br/> Congress member</h2>
          <p>
            Lorem ipsum dolo esse cillum pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="mpo-modal-nav">
            <label htmlFor="modal-content-2" className="next-slide">&#8250;&#8250;</label>
          </div>
        </div>
      </div>
      <div className="mpo-modal-slide content-2">
        <div className="mpo-modal-content">
          <h2>Practice a 5 minute <br/> personal meditation <br/> to east your stress</h2>
          <p>
            Lorem esse cillum cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="mpo-modal-nav">
            <label htmlFor="modal-content-1" className="prev-slide">&#8249;&#8249;</label>
            <label htmlFor="modal-content-3" className="next-slide">&#8250;&#8250;</label>
          </div>
        </div>
      </div>
      <div className="mpo-modal-slide content-3">
        <div className="mpo-modal-content">
          <h2>Find the closest <br/> pro-choice healthcare <br/> near you</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur int occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
            <div className="mpo-modal-nav">
              <label htmlFor="modal-content-2" className="prev-slide">&#8249;&#8249;</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
        
   
        
