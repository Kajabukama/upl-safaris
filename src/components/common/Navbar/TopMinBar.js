import React from 'react';
import { Link } from 'react-router-dom';

const MiniTopBar = () => {
   return (
      <div className="col-md-12">
         <div className="top-min-bar">
            <ul className="mr-auto">
               <li className="nav-item">
                  <Link className="nav-link" to="#">
                     <span> <img src={ logo } width="15" alt="logo" /> </span> School Trips
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="#">Sign-up to our Email</Link>
               </li>
               <li className="nav-item dropdown">
                  <div className="btn-lang dropdown-toggle" to="#" id="b22" data-toggle="dropdown">
                     Currency
                     <i class="material-icons">chevron_right</i>
                  </div>
                  <div className="dropdown-menu" aria-labelledby="b22">
                     <Link className="dropdown-item" to="#">United Kingdom</Link>
                     <Link className="dropdown-item" to="#">USA</Link>
                  </div>
               </li>

            </ul>
         </div>
      </div>
   )
}

export default MiniTopBar;
const logo = require('../../../assets/imgs/logo-mini.svg');
