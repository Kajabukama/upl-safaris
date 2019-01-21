import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import MiniTopBar from './TopMinBar';
import MiddleTopBar from './MiddleTopBar';

class Navbar extends Component {

   render() {
      return (
         <div className="">
            <div className="top-menu-container">
               <div className="container">
                  <div className="row">
                     <MiniTopBar/>
                     <MiddleTopBar/>
                  </div>
               </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
               <div className="container">
                  {/* <Link className="navbar-brand" to="#">UPL - Safaris</Link> */}
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="#">Destinations </Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">Holiday Types</Link> </li>
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
