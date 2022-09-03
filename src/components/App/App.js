import React from 'react';
import NavBar from '../NavBar/NavBar';
import HotTopics from '../HotTopics/HotTopics';
import NewsStories from '../NewsStories/NewsStories';
import Article from '../Article/Article';
import { Route } from 'react-router-dom';
// import NewsStories from '../NewsStories/NewsStories';
// import Article from '../Article/Article';
// import CongressAction from '../CongressAction/CongressAction';
import Footer from '../Footer/Footer';
import './App.css';


const App = () => {

  return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => <HotTopics />} />
        <Route path='/NewsStories/:topic' render={( { match } ) => { return (<NewsStories topic={match.params.topic}/>)} }/>
        <Route path='/Article' component={Article} />
        {/* <NewsStories />
        <Article />
        <CongressAction /> */}
        <Footer />
      </div>

  );
}

export default App;
