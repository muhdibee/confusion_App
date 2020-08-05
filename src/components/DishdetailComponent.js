import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,Form, Input, Label, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
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

class DishDetail extends Component{

	constructor(props){
		super(props);
		this.toggleModal=this.toggleModal.bind(this);
		this.handleLogin=this.handleLogin.bind(this);
		this.state={
			isCommentModalOpen: false,
		};
	}

	toggleModal(){
		this.setState(
			{isCommentModalOpen: !this.state.isCommentModalOpen}
		);
	}

	handleLogin(e){
		this.toggleModal();
		alert("Name: "+this.youName.value + " Rating: "+this.rating.value + " Comment: "+this.rating.value);
		e.preventDefault();
	}

	render(){
		if (this.props.dish !=null){
			return (
			  <div>
				  <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleModal}>
					  <ModalHeader className="bg-light"toggle={this.toggleModal}>
						  <strong>Submit Comment</strong>
					  </ModalHeader>
					  <ModalBody>
						  <Form onSubmit={this.handleLogin}>
							<FormGroup>
								<Label htmlFor="rating" className="col-4">Rating</Label>
								<Input type="select" name="rating" className="col-12 col-md-12" innerRef={(input)=> this.rating = input}>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Input>
						  	</FormGroup>
							<FormGroup>
								<Label htmlFor="name" className="col-4">Your Name</Label>
								<Input type="text" name="youName" 
									placeholder="Your Name" 
									className="col-12 col-md-12" 
									innerRef={(input)=> this.rating = input}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="comment" className="col-4">Comment</Label>
								
								<Input type="textarea" rows="8"
								name="comment" 
								className="col-12 col-md-12"
								innerRef={(input)=> this.comment = input}
								/>
							</FormGroup>
							<Button type="submit" value="submit" color="primary">Submit</Button>
						  </Form>
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