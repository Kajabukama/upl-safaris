import React, { Component } from 'react';

class SearchForm extends Component {
   render(){
      return(
         <div className="search-form">
            <div className="container">
               <div className="row">
                  <div className="col-md-5">
                     <h2>Where would you like to go?</h2>
                  </div>
                  <div className="col-md-3">
                     <input type="text" className="form-control"  />
                  </div>
                  <div className="col-md-3">
                     <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-1">
                     <button className="btn btn-primary btn-lg"> Go</button>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default SearchForm;