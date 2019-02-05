import React, { Component } from 'react';
import './Home.css';
import Rating from '../../common/Rating/Rating';
import Footer from '../../common/Footer/Footer';

class HomePage extends Component {
   render() {
      return (
         <div className="home-container">
            <div className="container">
               <div className="row">
                  <div className="col-md-8">
                     <h3 className="title-home">AUTHENTIC HOLIDAYS FOR <br />PASSIONATE TRAVELLERS <small className="small-cap">EST. 1983</small></h3>
                     <p>
                        If you’re looking for an inspirational and authentic holiday experience that’s tailored to your needs, you’ve come to the right place. We’ve been at the forefront of tourism to Iceland, Lapland and the Polar regions for 35 years and are proud to be one of the UK’s leading independent specialist holiday companies. Our hand-picked range of European and worldwide destinations offer plenty of adventures to choose from, which our team of passionate travel experts know inside out. We’ll work with you to create a trip that perfectly suits your interests, timescales and budgets whether that’s a stunning self-drive, short break, joining a small group escorted tour or embarking on an awe-inspiring arctic voyage.
                     </p>
                  </div>
                  <div className="col-md-4">
                     <ul className="home-feature">
                        <li>TAILOR MADE HOLIDAY SPECIALISTS</li>
                        <li>35 YEARS OF EXPERTISE</li>
                        <li>FIRST HAND DESTINATION EXPERIENCE</li>
                        <li>FULL FINANCIAL PROTECTION</li>
                        <li>24/7 HOLIDAY SUPPORT</li>
                     </ul>
                  </div>
               </div>
               <div className="container">
                  <div className="row customer-rate">
                     <div className="col-md-4"><p> Customers rate UPL Safaris </p></div>
                     <div className="col-md-3">
                        <Rating />
                     </div>
                     <div className="col-md-4"><p className="c-feefo__avg"><b>Average score 4.8/5</b> Based on 124 Reviews</p></div>
                  </div>
               </div>
            </div>
            <Footer/>
         </div>
      )
   }
}
export default HomePage;