import React from "react";
import { useQuery } from '@apollo/client';
import { GET_NEWS_BY_TAG } from '../../queries';
import "./NewsStories.css"

const NewsStories = () => {

  const { loading, error, data } = useQuery(GET_NEWS_BY_TAG)
  console.log(data)
 

  //need to have call fully completed and loading: false 
//  if(!loading) {
//    const news = data.headlines.map((story => {

//       return (

//         <section key={story.title} className="story-section" 
//         // style={{ backgroundImage:`url(${story.img})` }}
//         >
//         <div className="tag-box">
//           <p className="tags">{story.tags}</p>
//         </div>
//         <div className="action-box">
//           <p className="action">TAKE ACTION</p>
//         </div>
//         <div className="title-box">
//         <h2 className="news-story-title">{story.title}</h2>
//           <p className="author-name">by {story.author}</p>
//         </div>
//       </section>
//     )
//   })) 
// } else {
//     return <div>"Loading..."</div>
// }
  // const [ categoryNews, setCategoryNews ] = useState([])
  // const [ currentTag, setCurrentTag ] = useState('')

  // if(loading) return "Loading..."
  // if(error) return `Error! ${error.message}`

  console.log("HELLO", data)
    // if(!loading){

      return (
        <div>
          HELLO
        </div>
     
      )
    // } else {
    //   return <p>AHHHH!</p>
    }
//}

export default NewsStories;