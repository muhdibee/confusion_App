import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,Form, Input, Label, FormGroup, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {LocalForm, Control, Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';


function RenderDish({dish, isLoading, errMess}){
	if (isLoading){
		return(
			<div className="container">
				<div className="row">            
					<Loading />
				</div>
			</div>
		); 
	}	
	else if(errMess){
		    return(
				<div className="container">
					<div className="row">            
						<h4>{errMess}</h4>
					</div>
				</div>
		);
	}
	else if (dish !=null){
		return(
			<div className ="col-12 col-md-5 m-1">
				<Card>
					<CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle><strong>{dish.name}</strong></CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			</div >

		);
	}
	
}

function RenderComments({comments, dishId, addComment}){
	if (comments !=null){
	return (
		<div className="col-12 ">
			<h4 className="text-center">Comments</h4>
			<ul className="list-unstyled">
				{comments.map((comment =>{
					const currentDate = new Date().toISOString();
					return(
						<div>
							<Card>
								<CardBody col={6} className="">
								<li key={comment.id}>
									<p>{comment.comment}</p>
									<p>-- {comment.author}, {comment.date}</p>
								</li>
								<p>-- {currentDate}</p>
								</CardBody>
							</Card>
						</div>
					);
				  }))
				}
			</ul>
			<CommentForm addComment={addComment} dishId={dishId}/>
		</div>
	);
	}
}	


const required=(val)=> val && val.length;
const minlength=(len) =>(val)=> val && (val.length >= len);
const maxlength=(len) =>(val) => val && (val.length <= len);

class CommentForm extends Component{
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
		this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);

	}

	render(){
		return(
			<div>
				<Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleModal} className="primary">
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
									<Label htmlFor="author" className="col-4">Your Name</Label>
									<Col>
										<Control.text model=".author" name="author" id="name"
											placeholder="Your Name" 
											className="col-12 col-md-12 form-control" validators={{required, minlength: minlength(3), maxlength: maxlength(15)}}
										/>
										<Errors
											className="text-danger"
											model=".author"
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
					<Button outline onClick={this.toggleModal} >
						<i className="fa fa-pencil" ></i>
						<em>Submit Comment</em>
					</Button>
			</div>
		
		);
	}
	
}





class DishDetail extends Component{

	constructor(props){
		super(props);
		
	}
	

	render(){
		if (this.props.dish !=null){
			return (
			  <div>
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
							  <RenderComments comments = {this.props.comments}
							  addComment={this.props.addComment} dishId={this.props.dish.id}/>
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