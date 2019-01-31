import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class Rating extends Component {

   state = {
      rating: 2.4
   }
   changeRating(newRating, name) {
      this.setState({
         rating: newRating
      });
   }

   render() {
      return (
         <StarRatings
            rating={this.state.rating}
            starRatedColor="#ce8129"
            numberOfStars={5}
            name='rating' starDimension="25px" startSpacing="10px"
         />
      )
   }
}
export default Rating;