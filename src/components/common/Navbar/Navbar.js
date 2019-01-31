import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import MiniTopBar from './TopMinBar';
import MiddleTopBar from './MiddleTopBar';

class Navbar extends Component {

   render() {
      return (
         <div className="nav-wrapper">
            <div className="top-menu-container">
               <div className="container">
                  <div className="row">
                     <MiniTopBar/>
                     <MiddleTopBar/>
                  </div>
               </div>
            </div>
            <span class="position-absolute trigger"></span>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
               <div className="container">
                  {/* <Link className="navbar-brand" to="#">UPL - Safaris</Link> */}
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="#">Destinations </Link></li>
                        <li className="dropdown menu-large nav-item">
                           <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                              Holiday Types 
                              <i className="material-icons">expand_more</i>
                           </a>
                           <ul className="dropdown-menu">
                              <div className="container megamenu">
                                 <div className="row">
                                    <li className="col-md-2 dropdown-item">
                                       <ul>
                                          <li className="dropdown-header">Types</li>
                                          <li><Link to="#">Cruise</Link></li>
                                          <li><Link to="#">Escorted</Link></li>
                                          <li><Link to="#">Independent</Link></li>
                                          <li><Link to="#">Self Drive</Link></li>
                                          <li><Link to="#">Short Breaks</Link></li>
                                       </ul>
                                    </li>
                                    <li className="col-md-2 dropdown-item">
                                       <ul>
                                          <li className="dropdown-header">Water Breaks</li>
                                          <li><Link to="#">Christmass &amp; New Year</Link></li>
                                          <li><Link to="#">Log Cabin</Link></li>
                                          <li><Link to="#">Icehotel</Link></li>
                                          <li><Link to="#">Northern Lights</Link></li>
                                          <li className="dropdown-header">Discovery</li>
                                          <li><Link to="#">Active</Link></li>
                                          <li><Link to="#">Class Experience</Link></li>
                                          <li><Link to="#">Family</Link></li>
                                          <li><Link to="#">Island Escapes</Link></li>
                                          <li><Link to="#">Rail</Link></li>
                                          <li><Link to="#">Walking &amp; Trekking</Link></li>
                                       </ul>
                                    </li>
                                    
                                    <li className="col-md-2 dropdown-item">
                                       <ul>
                                          <li className="dropdown-header">Wildlife</li>
                                          <li><Link to="#">Bear Watching</Link></li>
                                          <li><Link to="#">Bird Watching</Link></li>
                                          <li><Link to="#">Safari</Link></li>
                                          <li><Link to="#">Whale Watching</Link></li>
                                          <li className="dropdown-header">Special Interest</li>
                                          <li><Link to="#">4x4</Link></li>
                                          <li><Link to="#">Food &amp; Wine</Link></li>
                                          <li><Link to="#">Photography</Link></li>
                                          <li><Link to="#">Star Gazing</Link></li>
                                          <li><Link to="#">Volcano</Link></li>
                                       </ul>
                                    </li>
                                    <li className="col-md-2 dropdown-item"></li>
                                    <li className="col-md-4 dropdown-item">
                                       <ul>
                                          <li>
                                             <li className="dropdown-header">Self Drive</li>
                                             <div style={{ width: '20px'}}>
                                             <div>Our self drive holidays offer<br/> the perfect combination of flexibility<br/> to explore at your own pace with the benefit of&hellip;</div>
                                       <img className="img-responsive" src={ img_header } alt="" width="200"/>
                                             </div>
                                          </li>
                                       </ul>
                                    </li>
                                 </div>
                              </div>
                           </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="#">Nothern Lights</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">Offers</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">Blog</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">About Us</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">School Trips</Link></li>
                        
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
      )
   }
}

export default Navbar;
const img_header = require('../../../assets/imgs/content/lion.jpg');
