import React from 'react';

const MiddleTopBar = () => {
   return (
      <div className="col-md-12">
         <div className="middle-top-bar">
            <div className="row">
               <div className="col-md-6">
                  <div className="left-panel">
                     <img src={logo} width="200" alt="logo" />
                  </div>
               </div>
               <div className="col-md-6  d-none d-md-block">
                  <div className="right-panel">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="enquire">
                              <button className="btn btn-block btn-lg btn-primary">
                                 Enquire Now
                                 <i class="material-icons icon">chevron_right</i>
                              </button>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="open-hours">
                              <div className="call">+255 767-266-134</div>
                              <div className="open">
                                 Open today, 8am - 6pm
                                 <i class="material-icons">expand_more</i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MiddleTopBar;
const logo =  require('../../../assets/imgs/logo-large.svg');
