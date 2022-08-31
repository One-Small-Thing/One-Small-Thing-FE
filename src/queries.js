import {gql} from '@apollo/client';

export const GET_NEWS_BY_HEADLINE = gql`
query {
        headlines {
            date
            title
            img
            url
            description
        }
    }
`

export const GET_NEWS_BY_TAG = gql`
query {
    stories(name: "Gun Violence")
        headlines {
            date
            title
            img
            url
            description
        }
    }
`