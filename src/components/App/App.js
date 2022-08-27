import React from 'react';
import NavBar from '../NavBar/NavBar';
import HotTopics from '../HotTopics/HotTopics';
import Footer from '../Footer/Footer';
import './App.css';
import NewsStories from '../NewsStories/NewsStories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HotTopics />
      <NewsStories />
      <Footer />
    </div>
  );
}

export default App;
