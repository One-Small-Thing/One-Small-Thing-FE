import React from "react";
import { useQuery } from '@apollo/client';
import { GET_NEWS_BY_TAG } from '../../queries';

const NewsStories = ({topic}) => {

    const { loading, error, data } = useQuery(GET_NEWS_BY_TAG, {tags: topic})
    
      // const [ categoryNews, setCategoryNews ] = useState([])
      // const [ currentTag, setCurrentTag ] = useState('')

    debugger
    if(loading) return "Loading..."
    if(error) return `Error! ${error.message}`
    console.log(data)
    
    return (
        <p>News</p>
    )
}

export default NewsStories;