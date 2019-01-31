import React, { Component } from 'react';
import './App.css';
import Navbar from './components/common/Navbar/Navbar';
import Routes from './router';
import HomeSlider from './components/common/Slider/Slider';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <Navbar/>
          <HomeSlider/>
          <Routes/>
      </div>
    );
  }
}

export default App;
