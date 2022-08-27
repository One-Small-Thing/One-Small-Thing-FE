import React from 'react';
import NavBar from '../NavBar/NavBar';
import HotTopics from '../HotTopics/HotTopics';
import NewsStories from '../NewsStories/NewsStories';
import Article from '../Article/Article';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HotTopics />
      <NewsStories />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
