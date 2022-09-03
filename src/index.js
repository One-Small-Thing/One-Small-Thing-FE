import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BASE_URL}/graphql?test=1`,
  cache: new InMemoryCache()
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ApolloProvider>
);
