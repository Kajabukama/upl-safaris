import React, { Component } from 'react';
import './Slider.css';
import SearchForm from './SearchForm';

class HomeSlider extends Component {
   render() {
      return (
         <React.Fragment>
         <div className="slider-container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
               </ol>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img src={slider01} className="d-block w-100 img-fluid" alt="" />
                     <div className="carousel-caption">
                        <h5>Welcome to</h5>
                        <p>UPL Safaris - Tell The World Why I love Tanzania</p>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img src={slider02} className="d-block w-100 img-fluid" alt="" />
                     <div className="carousel-caption">
                        <h5>The Serengeti</h5>
                        <p>Northern Circuit - A home to the most Diverse Ecosystem</p>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img src={slider03} className="d-block w-100 img-fluid" alt="" />
                     <div className="carousel-caption">
                        <h5>Amazing Beaches</h5>
                        <p>Zanzibar Island - A mixture of people culture and Sea life</p>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img src={slider04} className="d-block w-100 img-fluid" alt="" />
                     <div className="carousel-caption">
                        <h5>Explore Culture</h5>
                        <p>Maasai - A land of Cultures, People and Amazing Sceneries</p>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
               </a>
               <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
               </a>
            </div>

         </div>
         <SearchForm/>
         </React.Fragment>
      )
   }
}
export default HomeSlider;

const slider01 = require('../../../assets/imgs/slider/01.jpg');
const slider02 = require('../../../assets/imgs/slider/02.jpg');
const slider03 = require('../../../assets/imgs/slider/03.jpg');
const slider04 = require('../../../assets/imgs/slider/04.jpg');