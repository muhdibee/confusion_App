import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

export class DishDetail extends Component {
    render() {

        const renderComments = this.props.selectedDish.comments.map((selectedComments) => {
			return (
				<li key={selectedComments.id} className="list-unstyled">
					<p>{selectedComments.comment}</p>
					<p>-- {selectedComments.author}, {selectedComments.date}</p>
				</li>
			)
		}		
		);
        
        return (
            <div className= "container">
				<div className = "row">
					<div className ="col-12 col-md-5 m-1">
						<Card>
							<CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
							<CardBody>
								<CardTitle><strong>{this.props.selectedDish.name}</strong></CardTitle>
								<CardText>{this.props.selectedDish.description}</CardText>
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
}

//export default DishDetail;