import React from 'react';
import NavBar from '../NavBar/NavBar';
import HotTopics from '../HotTopics/HotTopics';
import NewsStories from '../NewsStories/NewsStories';
import Article from '../Article/Article';
import About from '../About/About';
import { Route } from 'react-router-dom';
import CongressAction from '../CongressAction/CongressAction';
import Footer from '../Footer/Footer';
import './App.css';


const App = () => {

  return (
      <div className="App">
        <NavBar />
        <Route exact path="/One-Small-Thing-FE" render={() => <HotTopics />} />
        <Route exact path="/One-Small-Thing-FE/About" component={About} />
        <Route path='/One-Small-Thing-FE/NewsStories/:topic' render={( { match } ) => { return (<NewsStories topic={match.params.topic}/>)} }/>
        <Route path='/One-Small-Thing-FE/Article' component={Article} />
        <Route exact path="/One-Small-Thing-FE/CongressAction" render={() => <CongressAction />} />
        <Footer />
      </div>

  );
}

export default App;
