import React from 'react';
import { Link } from 'react-router-dom';

const MiniTopBar = () => {
   return (
      <div className="col-md-12">
         <div className="top-min-bar">
            <ul class="mr-auto">
               <li class="nav-item">
                  <Link class="nav-link" to="#">
                     <span> <img src={ logo } width="15" alt="logo" /> </span> School Trips
                  </Link>
               </li>
               <li class="nav-item">
                  <Link class="nav-link" to="#">Sign-up to our Email</Link>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Currency
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                     <Link class="dropdown-item" to="#">United Kingdom</Link>
                     <Link class="dropdown-item" to="#">USA</Link>
                  </div>
               </li>

            </ul>
         </div>
      </div>
   )
}

export default MiniTopBar;
const logo = require('../../../assets/imgs/logo-mini.svg');
