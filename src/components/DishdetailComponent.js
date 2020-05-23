import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    render() {

        const renderComments = this.props.dish.comments.map((selectedComment) => {
			return (
				<li key={selectedComment.id} className="list-unstyled">
					<p>{selectedComment.comment}</p>
					<p>-- {selectedComment.author}, {selectedComment.date}</p>
				</li>
        
			)
		}		
		);
        
        return (
            <div className= "container">
				<div className = "row">
					<div className ="col-12 col-md-5 m-1">
						<Card>
							<CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
							<CardBody>
								<CardTitle><strong>{this.props.dish.name}</strong></CardTitle>
								<CardText>{this.props.dish.description}</CardText>
							</CardBody>
						</Card>
					</div >
					<div className ="col-12 col-md m-1">
						<h4>Comments</h4>
						{renderComments}
					</div>

				</div>
			</div>

        );
    }
}export default DishDetail;