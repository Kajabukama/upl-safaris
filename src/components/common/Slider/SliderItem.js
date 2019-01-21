import React from 'react';

class SliderItem extends React.Component  {
   render(){
      return (
         <div class="carousel-item">
            <img src={ this.props.item } class="d-block w-100 img-fluid" alt="" />
         </div>
      )
   }
}
export default SliderItem;