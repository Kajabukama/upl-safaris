import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
   render(){
      return(
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col">
                     <ul>
                        <li className="list-header">Destinations</li>
                        <li><Link to="">Alaska</Link></li>
                        <li><Link to="">Antarctica</Link></li>
                        <li><Link to="">Arctic</Link></li>
                        <li><Link to="">Australia</Link></li>
                        <li><Link to="">Botswana</Link></li>
                        <li><Link to="">Canada</Link></li>
                        <li><Link to="">Chile</Link></li>
                        <li><Link to="">Cook Islands</Link></li>
                        <li><Link to="">Falkland </Link></li>
                        <li><Link to="">Faroe Islands</Link></li>
                        <li><Link to="">Fiji</Link></li>
                        <li><Link to="">Finland</Link></li>
                        <li><Link to="">French Polynesia</Link></li>
                     </ul>
                  </div>

                  <div className="col">
                     <ul>
                        <li className="list-header-top"><Link to="">Greenland</Link></li>
                        <li><Link to="">Hawaii</Link></li>
                        <li><Link to="">Iceland</Link></li>
                        <li><Link to="">Lapland</Link></li>
                        <li><Link to="">Namibia</Link></li>
                        <li><Link to="">New Zealand</Link></li>
                        <li><Link to="">Norway</Link></li>
                        <li><Link to="">Papua New Guinea</Link></li>
                        <li><Link to="">South Africa</Link></li>
                        <li><Link to="">St Helena</Link></li>
                        <li><Link to="">Svalbard</Link></li>
                        <li><Link to="">Sweden</Link></li>
                        <li><Link to="">Zimbabwe</Link></li>
                     </ul>
                  </div>

                  <div className="col">
                     <ul>
                        <li className="list-header">Holiday Type</li>
                        <li><Link to="">4x4</Link></li>
                        <li><Link to="">Active</Link></li>
                        <li><Link to="">Bear Watching</Link></li>
                        <li><Link to="">Bird Watching</Link></li>
                        <li><Link to="">Christmas and New Year</Link></li>
                        <li><Link to="">Classic Experiences</Link></li>
                        <li><Link to="">Cruise</Link></li>
                        <li><Link to="">Escorted</Link></li>
                        <li><Link to="">Family</Link></li>
                        <li><Link to="">Food and Wine</Link></li>
                        <li><Link to="">Icehotel</Link></li>
                        <li><Link to="">Independent</Link></li>
                        <li><Link to="">Island Escapes</Link></li>
                     </ul>
                  </div>
                  <div className="col">
                     <ul>
                        <li className="list-header-top"><Link to="">Log Cabin</Link></li>
                        <li><Link to="">Northern Lights</Link></li>
                        <li><Link to="">Photography</Link></li>
                        <li><Link to="">Rail</Link></li>
                        <li><Link to="">Safari</Link></li>
                        <li><Link to="">Self Drive</Link></li>
                        <li><Link to="">Short Breaks</Link></li>
                        <li><Link to="">Star Gazing</Link></li>
                        <li><Link to="">Volcano</Link></li>
                        <li><Link to="">Walking and Trekking</Link></li>
                        <li><Link to="">Whale Watching</Link></li>
                        <li><Link to="">Wildlife</Link></li>
                        <li><Link to="">Winter Break</Link></li>
                     </ul>
                  </div>
                  <div className="col col-2">
                     <ul>
                        <li className="list-header">Discover The World</li>
                        <li><Link to="">Make an Enquiry</Link></li>
                        <li><Link to="">Brochures</Link></li>
                        <li><Link to="">About Us</Link></li>
                        <li><Link to="">Meet the Team</Link></li>
                        <li><Link to="">Careers</Link></li>
                        <li><Link to="">Events</Link></li>
                        <li><Link to="">100% Guarantee</Link></li>
                        <li><Link to="">How to Book</Link></li>
                        <li><Link to="">Booking Conditions</Link></li>
                        <li><Link to="">Travel Insurance</Link></li>
                        <li><Link to="">Privacy Policy</Link></li>
                        <li><Link to="">Essential Travel Advice</Link></li>
                        <li><Link to="">Accessible Travel</Link></li>
                        <li><Link to="">School Trips</Link></li>
                     </ul>
                  </div>

                  <div className="col col-4">
                     <div className="footer-form-title mb-3">Signup to E-News</div>
                     <form>
                        <div className="form-group">
                           <input type="text" className="form-control" placeholder="Firsname"/>
                        </div>
                        <div className="form-group">
                           <input type="text" className="form-control" placeholder="Surname"/>
                        </div>
                        <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                           <button className="btn btn-block btn-lg text-white">Submit</button>
                        </div>
                     </form>
                  </div>

               </div>
            </div>
         </div>
      )
   }
}
export default Footer;