import React from 'react';
import peace from "../../images/peace.jpg"
import "./NewsStoryCard.css"

const NewsStoryCard = ({id, date, title, img, description, url}) => {


    return (
        <section className="story__section" style={img ? { backgroundImage:`url(${img})`} : {backgroundImage: {peace}}}
        alt="still image scene from corresponding news article">
            <div className="story__section__tag-box">
                <p className="tags">EDUCATION</p>
                <p className="action">TAKE ACTION</p>
            </div>
            <div className="story__section__title-box">
                <h2 className="title">{title}</h2>
                <p className="author-name">by Author Mc Authorson</p>
                <p className="date">{date}</p>
            </div>
        </section>
    )
}

export default NewsStoryCard;