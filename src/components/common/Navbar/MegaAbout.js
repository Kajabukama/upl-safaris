import React from 'react';
import { Link } from 'react-router-dom';

const MegaAbout = () => {
   return (
      <li className="dropdown menu-large nav-item">
         <Link to="/" className="dropdown-toggle nav-link">
            About Us 
            <i className="material-icons">expand_more</i>
         </Link>
         <ul className="dropdown-menu">
            <div className="container megamenu">
               <div className="row">
                  <li className="col-md-6 dropdown-item">
                     <ul>
                        <li>
                        <img className="img-fluid avatar" src={ img_header } alt="" width="300"/>
                        </li>
                     </ul>
                  </li>
                  <li className="col-md-3 dropdown-item">
                     <ul>
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Contact Us</Link></li>
                        <li><Link to="#">Our Unique 100% Guarantee</Link></li>
                        <li><Link to="#">Meet The Team</Link></li>
                        <li><Link to="#">How to Book</Link></li>
                        <li><Link to="#">Price Promise</Link></li>
                        <li><Link to="#">Events</Link></li>
                     </ul>
                  </li>
                  <li className="col-md-3 dropdown-item">
                     <ul>
                        <li><Link to="#">Let’s start planning your trip</Link></li>
                        <li><Link to="#">Financial Protection</Link></li>
                        <li><Link to="#">Responsible Tourism</Link></li>
                        <li><Link to="#">Carrier at UPL-Safaris</Link></li>
                        <li><Link to="#">Brochures</Link></li>
                        <li><Link to="#">Blog</Link></li>
                     </ul>
                  </li>
                  
                  
               </div>
            </div>
         </ul>
      </li>
   )
}
export default MegaAbout;
const img_header = require('../../../assets/imgs/content/lion.jpg');
