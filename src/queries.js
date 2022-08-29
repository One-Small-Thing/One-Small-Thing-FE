import {gql} from '@apollo/client';

export const GET_NEWS_BY_TAG = gql `
    query getNewsByTag($tags: String!) {
        news {
            id
            tags 
            date
            title
            content
            author
            location
            img
        }
    }
`