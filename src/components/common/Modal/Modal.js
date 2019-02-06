import React, { Component } from 'react';
import './Modal.css';

class NewsLetter extends Component {
	render() {
		return (
			<div>
				<div className="signup" data-toggle="modal" data-target="#newsletter">
					Sign-up to our Newsletter
          	</div>
				<div className="modal fade" id="newsletter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-xl modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-6">
										<img src={ news_letter } className="img-fluid" alt=""/>
									</div>
									<div className="col-md-6">
										<div className="modal-header">
											<button type="button" className="close" data-dismiss="modal" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div className="modal-body">
											<h3 className="text-center mb-3">Inspiration straight to your inbox</h3>
											<p>Sign-up to our newsletter to receive holiday inspiration and updates on our latest offers and exclusive events.</p>
											<form>
												<div className="form-group">
													<input type="text" className="form-control" placeholder="Your first Name"/>
												</div>
												<div className="form-group">
													<input type="text" className="form-control" placeholder="Your Last Name"/>
												</div>
												<div className="form-group">
													<input type="text" className="form-control" placeholder="Your Email address"/>
												</div>
												<div className="form-group">
													<button className="btn btn-block btn-lg text-white">Sign Up</button>
												</div>
											</form>
											<p className="mb-1 text-center text-faint">
											You can unsubscribe at any time. View our Privacy Policy.
											</p>
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
}
export default NewsLetter;
const news_letter = require('../../../assets/imgs/slider/news-letter.jpg')