import React from 'react';
import "./NewsStories/NewsStoryCard.css"

const NewsStoryCard = () => {


    return (
        <section key={story.title} className="story__section" style={{ backgroundImage:`url(${story.img})` }}
        alt="still image scene from corresponding news article">
            <div className="story__section__tag-box">
                <p className="tags">EDUCATION {story.tags}</p>
                <p className="action">TAKE ACTION</p>
            </div>
            <div className="story__section__title-box">
                <h2 className="title">{story.title}</h2>
                <p className="author-name">by Author Mc Authorson {story.author}</p>
                <p className="date">{story.date}</p>
            </div>
        </section>
    )
}

export default NewsStoryCard;