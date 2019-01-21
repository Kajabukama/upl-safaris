import React, { Component } from 'react';
import './Slider.css';
import SearchForm from './SearchForm';

class HomeSlider extends Component {
   render() {
      return (
         <React.Fragment>
         <div className="slider-container">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
               <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
               </ol>
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img src={slider01} class="d-block w-100 img-fluid" alt="" />
                  </div>
                  <div class="carousel-item">
                     <img src={slider02} class="d-block w-100 img-fluid" alt="" />
                  </div>
                  <div class="carousel-item">
                     <img src={slider03} class="d-block w-100 img-fluid" alt="" />
                  </div>
                  <div class="carousel-item">
                     <img src={slider04} class="d-block w-100 img-fluid" alt="" />
                  </div>
               </div>
               <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
               </a>
               <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
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