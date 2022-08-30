import {gql} from '@apollo/client';

export const GET_NEWS_BY_TAG = gql `
  query {
        headlines {
            date
            author
            title
            content
            img
        }
}
`
