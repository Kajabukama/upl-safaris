import React, { Component } from 'react';
import './App.css';
import Navbar from './components/common/Navbar/Navbar';
import Routes from './router';
import HomeSlider from './components/common/Slider/Slider';
import NewsLetter from './components/common/Modal/Modal';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <NewsLetter/>
          <Navbar/>
          <HomeSlider/>
          <Routes/>
      </div>
    );
  }
}

export default App;
