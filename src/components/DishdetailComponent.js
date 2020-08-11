import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,Form, Input, Label, FormGroup, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {LocalForm, Control, Errors} from 'react-redux-form';
//import { ReactComponent } from '*.svg';


function RenderDish({dish}){
	return(
		<div className ="col-12 col-md-5 m-1">
		<Card>
			<CardImg width="100%" src={dish.image} alt={dish.name} />
			<CardBody>
				<CardTitle><strong>{dish.name}</strong></CardTitle>
				<CardText>{dish.description}</CardText>
			</CardBody>
		</Card>
	</div >

	);
}

function RenderComments({comments, toggleModal}){
	if (comments !=null){
	return (
		<div className="col-12 col-md-5 m-1">
			<h4>Comments</h4>
			<ul className="list-unstyled">
				{comments.map((comment => {
					return(
						<div>
							<li key={comment.id}>
							<p>{comment.comment}</p>
							
							<p>-- {comment.author}, {comment.date}</p>
						</li>
						</div>
					);
				  }))
				}
			</ul>
			<CommentForm click={toggleModal}/>
		</div>
	);
	}
}	


const CommentForm = (props) => {
	return(
		<Button outline onClick={props.click} >
			<i className="fa fa-pencil" arial-hidden="true"></i>
			<em>Submit Comment</em>
		</Button>
	);
}





const required=(val)=> val && val.length;
const minlength=(len) =>(val)=> val && (val.length >= len);
const maxlength=(len) =>(val) => val && (val.length <= len);

class DishDetail extends Component{

	constructor(props){
		super(props);
		this.toggleModal=this.toggleModal.bind(this);
		this.handleCommentSubmit=this.handleCommentSubmit.bind(this);
		this.state={
			isCommentModalOpen: false
		};
	}

	toggleModal(){
		this.setState(
			{isCommentModalOpen: !this.state.isCommentModalOpen}
		);
	}

	handleCommentSubmit(values){
		this.toggleModal();
		alert("Your submission is "+JSON.stringify(values));
	}

	render(){
		if (this.props.dish !=null){
			return (
			  <div>
				  <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleModal}>
					  <ModalHeader className="bg-light" toggle={this.toggleModal}>
						  <strong>Submit Comment</strong>
					  </ModalHeader>
					  <ModalBody>
						  <LocalForm  onSubmit={(values) => this.handleCommentSubmit(values)}>
							<FormGroup>
								<Label htmlFor="rating" className="col-4">Rating</Label>
								<Col>
									<Control.select model=".rating" name="rating" id ="rating" className="col-12 col-md-12 form-control">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
									
								</Col>
						  	</FormGroup>
							<FormGroup>
								<Label htmlFor="name" className="col-4">Your Name</Label>
								<Col>
									<Control.text model=".name" name="name" id="name"
										placeholder="Your Name" 
										className="col-12 col-md-12 form-control" validators={{required, minlength: minlength(3), maxlength: maxlength(15)}}
									/>
									<Errors
										className="text-danger"
										model=".name"
										show="touched"
										messages={{
											required:"Required",
											minlength:"Most be 3 characters or more",
											maxlength:"Most be 15 characters or less"
										}}
									/>
								</Col>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="comment" className="col-4">Comment</Label>
								<Control.textarea rows="8" model=".comment"
									name="comment" id="comment"
									className="col-12 col-md-12 form-control" validators={{required}}
								/>
								<Errors
									className="text-danger"
									model=".comment"
									show="touched"
									messages={{
										required:"Required"
									}}
								/>
							</FormGroup>
							<Button  type="submit" value="submit" color="primary">Submit</Button>
						  </LocalForm>
					 	</ModalBody>
				  </Modal>
				  <div className= "container">
					  <div className="row">
						  <Breadcrumb>
							  <BreadcrumbItem><Link to = "/menu">Menu</Link> </BreadcrumbItem>
							  <BreadcrumbItem active> {this.props.dish.name} </BreadcrumbItem>
						  </Breadcrumb>
						  <div className="col-12">
							  <h3>{this.props.dish.name}</h3>
							  <hr/>
						  </div>
					  </div>
					  <div className = "row">
						  <RenderDish dish={this.props.dish} />
						  <div className ="col-12 col-md m-1">
							  <RenderComments comments = {this.props.comments} toggleModal={this.toggleModal}/>
						  </div>
					  </div>
				  </div>
			  </div>
 			);
		} 
			else return <div></div>
	}
}

	 
		
export default DishDetail;