import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './HotTopics.css';

const HotTopics = () => {

   const [ data, setData ] = useState([ 
        {
            "id": 1,
            "tags": ["LGBTQIA+", "Reproductive Rights"],
            "date": "02/22/22",
            "title": "LGBTQ Adoption Rights infringed!",
                "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores pariatur consequatur et vel, ullam voluptates deserunt sint nostrum culpa repudiandae, omnis odit ex rem perspiciatis quos libero amet. Ipsum, tenetur!",
                "author": "Danny Martin",
                "location": "Denver, CO",
                "img": "https://raisingchildren.net.au/__data/assets/image/0026/48455/raising-an-adopted-child.jpg"
          }, 
          {
            "id": 2,
            "tags": ["Environment"],
            "date": "02/22/22",
            "title": "Oil Spill!",
                "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit!",
                "author": "David Atanborough",
                "location": "New York, NY",
                "img": "https://www.greenpeace.org/static/planet4-international-stateless/2020/09/5a4f7d68-gp1su9nb-1024x576.jpg"
          }
    ])

    const [ categoryNews, setCategoryNews ] = useState([])
    const [ currentTag, setCurrentTag ] = useState('')

    const findCurrentTag = (event) => { 
       setCurrentTag(event.target.href)
    const hrefTag = currentTag.split('/')[4]
    const foundNews = data.reduce((acc, element) => {
        console.log()
        let results = element.tags.forEach(tag => {
            if (tag.toLowerCase() === hrefTag) {
            acc += hrefTag
            }
         })
         
        return acc
     }, '')


     console.log('foundNews', foundNews)
    }

    //Psuedo Code for JSON CONTRACT
    // query - GraphQL
    // const GET_THE_NEWS = gql `
    //  query {
    //  id
    //  tags
    //  date
    //  title
    //  content
    //  author
    //  location
    //  img
    //  }
    // `

    // RENAME DATA CONTRACT
    // const obj = USEQUERY(GET_THE_NEWS)
    // SEARCH FOR CAT TYPE / useState 
    // [ currentTag, setCurrentTag ] = useState('')
    // [ newsData, setNewsData ] = useState({})
    // const filteredTags obj.filter(element => element.tag === tags }
    // function currentTag() { if (currentTag) {} }




    return (
        <section className='hot-topics'>
            <div className='hot-topics__desc'>
                <h1>One Small Thing</h1>
                <p>When the world is at it's bleakest, sometimes it just needs brave souls who are willing to help.. Even if it's just one small thing.</p>
            </div>
            <div className='hot-topics__buttons'>
                <Link to="/newsStories/environment" onClick={event => findCurrentTag(event)} className='topics'>Environment</Link>
                <Link to="/newsStories/reproductive-rights" onClick={event => findCurrentTag(event)} className='topics'>Reproductive Rights</Link>
                <Link to="/newsStories/education" onClick={event => findCurrentTag(event)} className='topics'>Education</Link>
                <Link to="/newsStories/lgbtqia+" onClick={event => findCurrentTag(event)} className='topics'>LGBTQIA+</Link>
                <Link to="/newsStories/domestic-violence" onClick={event => findCurrentTag(event)} className='topics'>Domestic Violence</Link>
                <Link to="/newsStories/free-and-open-computing" onClick={event => findCurrentTag(event)} className='topics'>Free & Open Computing</Link>
                <Link to="/newsStories/gun-conrol" onClick={event => findCurrentTag(event)} className='topics'>Gun Control</Link>
                <Link to="/newsStories/all-topics" onClick={event => findCurrentTag(event)} className='topics'>All Topics</Link>
                <Link to="/newsStories/surprise-me" onClick={event => findCurrentTag(event)} className='topics'>Surprise Me!</Link>
            </div>

        </section>
    )
}

export default HotTopics;